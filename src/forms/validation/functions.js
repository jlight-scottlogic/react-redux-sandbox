export const required = (val) =>
    (val != null && val.length > 0) ?
        { isValid: true } :
        { isValid: false, message: '{field} is required' };
