import React from 'react';

// props.size : string -- space separated list of bootstrap size classes, without the col-prefix
//                        e.g. '6 md-4 xl-2' -> 'col-6 col-md-4 col-xl-2'
export default props => {
    var sizes = (props.size || '').split(' ');
    sizes = sizes.map(size => 'col-' + size);
    sizes = sizes.join(' ');

    return <div className={sizes + ' ' + props.className}>{props.children}</div>;
}