module.exports = {
    informational: {
        continue: 100,
        switching_protocols: 101,
        WebDAV_Processing: 102,
    }, 
    success: {
        OK: 200,
        Created: 201,
        Accepted: 202,
        Non_Authoritative_Information: 203,
        No_Content: 204,
        Reset_Content: 205,
        Partial_Content: 206,
        WebDAV_Multi_Status: 207,
        WebDAV_Already_Reported: 208,
        IM_Used: 226,
    },
    redirect: {
        Multiple_Choices: 300,
        Moved_Permanently: 301,
        Found: 302,
        See_Other: 303,
        Not_Modified: 304,
        Use_Proxy: 305,
        _Unused_: 306,
        Temporary_Redirect: 307,
        Permanent_Redirect: 308,
    },
    clientError: {
        Bad_Request: 400,
        Unauthorized: 401,
        Payment_Required: 402,
        Forbidden: 403,
        Not_Found: 404,
        Method_Not_Allowed: 405,
        Not_Acceptable: 406,
        Proxy_Authentication_Required: 407,
        Request_Timeout: 408,
        Conflict: 409,
        Gone: 410,
        Length_Required: 411,
        Precondition_Failed: 412,
        Request_Entity_Too_Large: 413,
        Request_URI_Too_Long: 414,
        Unsupported_Media_Type: 415,
        Requested_Range_Not_Satisfiable: 416,
        Expectation_Failed: 417,
        Im_a_teapot: 418,
        Enhance_Your_Calm: 420,
        WebDAV_Unprocessable_Entity: 422,
        WebDAV_Locked: 423,
        WebDAV_Failed_Dependency: 424,
        Reserved_for_WebDAV: 425,
        Upgrade_Required: 426,
        Precondition_Required: 428,
        Too_Many_Requests: 429,
        Request_Header_Fields_Too_Large: 431,
        Nginx_No_Response: 444,
        Microsoft_Retry_With: 449,
        Microsoft_Blocked_by_Windows_Parental_Controls: 450,
        Unavailable_For_Legal_Reasons: 451,
        Nginx_Client_Closed_Request: 499,
    },
    serverError: {
        Internal_Server_Error: 500,
        Not_Implemented: 501,
        Bad_Gateway: 502,
        Service_Unavailable: 503,
        Gateway_Timeout: 504,
        HTTP_Version_Not_Supported: 505,
        Variant_Also_Negotiates: 506,
        WebDAV_Insufficient_Storage: 507,
        WebDAV_Loop_Detected: 508,
        Apache_Bandwidth_Limit_Exceeded: 509,
        Not_Extended: 510,
        Network_Authentication_Required: 511,
        Network_read_timeout_error: 598,
        Network_connect_timeout_error: 599,
    },
    all: {
        continue: 100,
        switching_protocols: 101,
        WebDAV_Processing: 102,
        OK: 200,
        Created: 201,
        Accepted: 202,
        Non_Authoritative_Information: 203,
        No_Content: 204,
        Reset_Content: 205,
        Partial_Content: 206,
        WebDAV_Multi_Status: 207,
        WebDAV_Already_Reported: 208,
        IM_Used: 226,
        Multiple_Choices: 300,
        Moved_Permanently: 301,
        Found: 302,
        See_Other: 303,
        Not_Modified: 304,
        Use_Proxy: 305,
        _Unused_: 306,
        Temporary_Redirect: 307,
        Permanent_Redirect: 308,
        Bad_Request: 400,
        Unauthorized: 401,
        Payment_Required: 402,
        Forbidden: 403,
        Not_Found: 404,
        Method_Not_Allowed: 405,
        Not_Acceptable: 406,
        Proxy_Authentication_Required: 407,
        Request_Timeout: 408,
        Conflict: 409,
        Gone: 410,
        Length_Required: 411,
        Precondition_Failed: 412,
        Request_Entity_Too_Large: 413,
        Request_URI_Too_Long: 414,
        Unsupported_Media_Type: 415,
        Requested_Range_Not_Satisfiable: 416,
        Expectation_Failed: 417,
        Im_a_teapot: 418,
        Enhance_Your_Calm: 420,
        WebDAV_Unprocessable_Entity: 422,
        WebDAV_Locked: 423,
        WebDAV_Failed_Dependency: 424,
        Reserved_for_WebDAV: 425,
        Upgrade_Required: 426,
        Precondition_Required: 428,
        Too_Many_Requests: 429,
        Request_Header_Fields_Too_Large: 431,
        Nginx_No_Response: 444,
        Microsoft_Retry_With: 449,
        Microsoft_Blocked_by_Windows_Parental_Controls: 450,
        Unavailable_For_Legal_Reasons: 451,
        Nginx_Client_Closed_Request: 499,
        Internal_Server_Error: 500,
        Not_Implemented: 501,
        Bad_Gateway: 502,
        Service_Unavailable: 503,
        Gateway_Timeout: 504,
        HTTP_Version_Not_Supported: 505,
        Variant_Also_Negotiates: 506,
        WebDAV_Insufficient_Storage: 507,
        WebDAV_Loop_Detected: 508,
        Apache_Bandwidth_Limit_Exceeded: 509,
        Not_Extended: 510,
        Network_Authentication_Required: 511,
        Network_read_timeout_error: 598,
        Network_connect_timeout_error: 599,
    },
    lookup: {
        [100]: 'continue',
        [101]: 'switching_protocols',
        [102]: 'WebDAV_Processing',
        [200]: 'OK',
        [201]: 'Created',
        [202]: 'Accepted',
        [203]: 'Non_Authoritative_Information',
        [204]: 'No_Content',
        [205]: 'Reset_Content',
        [206]: 'Partial_Content',
        [207]: 'WebDAV_Multi_Status',
        [208]: 'WebDAV_Already_Reported',
        [226]: 'IM_Used',
        [300]: 'Multiple_Choices',
        [301]: 'Moved_Permanently',
        [302]: 'Found',
        [303]: 'See_Other',
        [304]: 'Not_Modified',
        [305]: 'Use_Proxy',
        [306]: '_Unused_',
        [307]: 'Temporary_Redirect',
        [308]: 'Permanent_Redirect',
        [400]: 'Bad_Request',
        [401]: 'Unauthorized',
        [402]: 'Payment_Required',
        [403]: 'Forbidden',
        [404]: 'Not_Found',
        [405]: 'Method_Not_Allowed',
        [406]: 'Not_Acceptable',
        [407]: 'Proxy_Authentication_Required',
        [408]: 'Request_Timeout',
        [409]: 'Conflict',
        [410]: 'Gone',
        [411]: 'Length_Required',
        [412]: 'Precondition_Failed',
        [413]: 'Request_Entity_Too_Large',
        [414]: 'Request_URI_Too_Long',
        [415]: 'Unsupported_Media_Type',
        [416]: 'Requested_Range_Not_Satisfiable',
        [417]: 'Expectation_Failed',
        [418]: 'Im_a_teapot',
        [420]: 'Enhance_Your_Calm',
        [422]: 'WebDAV_Unprocessable_Entity',
        [423]: 'WebDAV_Locked',
        [424]: 'WebDAV_Failed_Dependency',
        [425]: 'Reserved_for_WebDAV',
        [426]: 'Upgrade_Required',
        [428]: 'Precondition_Required',
        [429]: 'Too_Many_Requests',
        [431]: 'Request_Header_Fields_Too_Large',
        [444]: 'Nginx_No_Response',
        [449]: 'Microsoft_Retry_With',
        [450]: 'Microsoft_Blocked_by_Windows_Parental_Controls',
        [451]: 'Unavailable_For_Legal_Reasons',
        [499]: 'Nginx_Client_Closed_Request',
        [500]: 'Internal_Server_Error',
        [501]: 'Not_Implemented',
        [502]: 'Bad_Gateway',
        [503]: 'Service_Unavailable',
        [504]: 'Gateway_Timeout',
        [505]: 'HTTP_Version_Not_Supported',
        [506]: 'Variant_Also_Negotiates',
        [507]: 'WebDAV_Insufficient_Storage',
        [508]: 'WebDAV_Loop_Detected',
        [509]: 'Apache_Bandwidth_Limit_Exceeded',
        [510]: 'Not_Extended',
        [511]: 'Network_Authentication_Required',
        [598]: 'Network_read_timeout_error',
        [599]: 'Network_connect_timeout_error',
    },
}    

// //1xx Informational
// 100 Continue
// 101 Switching Protocols
// 102 Processing (WebDAV)
// //2xx Success
// 200 OK
// 201 Created
// 202 Accepted
// 203 Non-Authoritative Information
// 204 No Content
// 205 Reset Content
// 206 Partial Content
// 207 Multi-Status (WebDAV)
// 208 Already Reported (WebDAV)
// 226 IM Used

// //3xx Redirection
// 300 Multiple Choices
// 301 Moved Permanently
// 302 Found
// 303 See Other
// 304 Not Modified
// 305 Use Proxy
// 306 (Unused)
// 307 Temporary Redirect
// 308 Permanent Redirect (experimental)
// //4xx Client Error
// 400 Bad Request
// 401 Unauthorized
// 402 Payment Required
// 403 Forbidden
// 404 Not Found
// 405 Method Not Allowed
// 406 Not Acceptable
// 407 Proxy Authentication Required
// 408 Request Timeout
// 409 Conflict
// 410 Gone
// 411 Length Required
// 412 Precondition Failed
// 413 Request Entity Too Large
// 414 Request-URI Too Long
// 415 Unsupported Media Type
// 416 Requested Range Not Satisfiable
// 417 Expectation Failed
// 418 I'm a teapot (RFC 2324)
// 420 Enhance Your Calm (Twitter)
// 422 Unprocessable Entity (WebDAV)
// 423 Locked (WebDAV)
// 424 Failed Dependency (WebDAV)
// 425 Reserved for WebDAV
// 426 Upgrade Required
// 428 Precondition Required
// 429 Too Many Requests
// 431 Request Header Fields Too Large
// 444 No Response (Nginx)
// 449 Retry With (Microsoft)
// 450 Blocked by Windows Parental Controls (Microsoft)
// 451 Unavailable For Legal Reasons
// 499 Client Closed Request (Nginx)

// //5xx Server Error
// 500 Internal Server Error
// 501 Not Implemented
// 502 Bad Gateway
// 503 Service Unavailable
// 504 Gateway Timeout
// 505 HTTP Version Not Supported
// 506 Variant Also Negotiates (Experimental)
// 507 Insufficient Storage (WebDAV)
// 508 Loop Detected (WebDAV)
// 509 Bandwidth Limit Exceeded (Apache)
// 510 Not Extended
// 511 Network Authentication Required
// 598 Network read timeout error
// 599 Network connect timeout error
