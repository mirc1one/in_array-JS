# in_array-JS
PHP-like in_array function but in Javascript  
Returns true if at least one element is found in element  
needle = letter, number or array  
haystack = array mandatory  
  
const test = in_array(needle, haystack);  
  
# For javascript prototype
Use it like you would use any object function.  
For example:  
var haystack = [1, 3, 5, 7, 9]  
var needle = [1, 2]  
  
needle.in_array(haystack) // returns true  
  
needle = [10, 20]  
needle.in_array(haystack) // returns false  
  
haystack = 'TEST'  
needle = 'T'  
needle.in_array(haystack) // returns true  


