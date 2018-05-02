var Mongoose = require('mongoose');
var SchemaTypes = Mongoose.SchemaTypes;


// - Fields are defined in an array, where each element is a string, optionally followed by an object.
// - Field string format: "name type [unique] [index] [sparse] [trim] [uppercase] [lowercase] [required]"
// - If there are additional properties necessary, they can be specified in the optional object 
//   following the field string.
// - Field name must come first. All other values can appear in any order.
// - Typed arrays can be defined by following type with brackets (no space betwee), e.g. string[]
// - Multiple spaces may be used between words, e.g. to align columns.
//
//   var fields = ["name string unique index", "intValue number" {min: 0 }] // {min: 0} applies to "intValue"

const typeNames = ['string', 'number', 'date', 'buffer', 'boolean', 'mixed', 'objectid', 'array', 'decimal128'];
const typeTypes = [String, Number, Date, Buffer, Boolean, SchemaTypes.Mixed, SchemaTypes.ObjectId, Array, SchemaTypes.Decimal128];

const modifiers = {
    unique: field => field.unique = true,
    index: field => field.index = true,
    sparse: field => field.sparse = true,
    trim: field => field.trim = true,
    uppercase: field => field.uppercase = true,
    lowercase: field => field.lowercase = true,
    required: field => field.required = true,
};
/**
 * Creates an object that can be used to initailize a Mongoose Schema object
 * @param {any[]} fields - An array of strings defining fields. Optionally, an
 *                         object may follow each or any of the field strings to
 *                         define additional properties.
 */
function Template(fields) {
    for (var i = 0; i < fields.length; i++) {
        var fieldDef = fields[i];
        if (typeof fieldDef != 'string') throw Error("Invalid field definition. Expected: string.");

        // if an object follows, it contains additional info about this field
        var fieldDetails = fields[i + 1];
        if (typeof fieldDetails == 'object') {
            i++; // don't iterate over the object
        } else {
            fieldDetails = null;
        }

        // Name is first word
        var fieldParts = fieldDef.split(' ').filter(notEmpty => notEmpty);
        var fieldName = fieldParts[0];
        fieldParts.shift();

        var fieldObject = {};
        this[fieldName] = fieldObject;

        // Each remaining word is either a modifier, which is applied via a function from the
        // modifiers object, or it's a type name, which is looked up via the typeNames array.
        fieldParts.forEach(part => {
            var modifier = modifiers[part];
            if (modifier) {
                modifier(fieldObject);
            } else {
                // "[]"" at end denotes array
                var isArray = false;
                if (part.endsWith('[]')) {
                    isArray = true;
                    part = part.substr(0, part.length - 2);
                }

                var typeIndex = typeNames.indexOf(part.toLowerCase());
                if (typeIndex >= 0) {
                    if (fieldObject.type) throw Error('Multiple types specified for field.');
                    fieldObject.type = isArray ? [typeTypes[typeIndex]]: typeTypes[typeIndex] ;
                } else {
                    // If it's not a modifier, and it's not a type, what is it?
                    throw Error('Unexpected token in field: ' + part);
                }
            }

            
        });

        for (prop in fieldDetails) {
            fieldObject[prop] = fieldDetails[prop];
        }

        if (!fieldObject.type) throw Error('Type not specified for field ' + fieldName);
    }
}

/** Returns a NEW schema based on this template. */
Template.prototype.toSchema = function (options) {
    if (!options) return Mongoose.Schema(this);
    return Mongoose.Schema(this, options || {});
}

module.exports = Template;