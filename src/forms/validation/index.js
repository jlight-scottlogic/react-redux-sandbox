export const required = (val) =>
    (val != null && val.length > 0) ?
        { valid: true } :
        { valid: false, message: '{field} is required' };