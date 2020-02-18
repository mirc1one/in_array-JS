// in_array that performs just like in PHP
// Functional
function in_array(needle, haystack) {
    if (typeof needle === 'string' || typeof needle === 'number') {
        for (let i in haystack) {
            if (haystack[i] === needle) {
                return true;
            }
        }
    } else if (Array.isArray(needle)) {
        for (let i in needle) {
            for (let j in haystack) {
                if (needle[i] === haystack[j]) {
                    return true;
                }
            }
        }
    } else {
        return null;
    }
    
    return false;
}

// Or use it as prototype in JavaScript
// Prototype
Array.prototype.in_array = String.prototype.in_array = function(needle) {
    const haystack = this;

    if (typeof needle === 'string' || typeof needle === 'number') {
        for (let i in haystack) {
            if (haystack[i] === needle) {
                return true;
            }
        }
    } else if (Array.isArray(needle)) {
        for (let i in needle) {
            for (let j in haystack) {
                if (needle[i] === haystack[j]) {
                    return true;
                }
            }
        }
    } else {
        return null;
    }
    
    return false;
}
