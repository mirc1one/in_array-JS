function in_array(needle, haystack) {
    if (typeof needle === 'string') {
        for (let i in haystack) {
            if (haystack[i] === needle) {
                return true;
            }
        }
    } else if (typeof needle === 'object') {
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
