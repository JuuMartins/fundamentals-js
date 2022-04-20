/*
The first thing we need to keep in mind is that JavaScript is case-sensitive, that is, it is case sensitive. This means
 that everything we write, whether instructions specific to the language (like console.log) or when we name a variable, 
 has to be done in the same pattern, which includes the question of upper and lower case.
 */

const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR);

/*
- camelCase: Starts with a lowercase letter and the first letter of each word is then capitalized. For example: myVar or 
UserPassword. This is the convention used by JavaScript for variables and functions.
- snake_case: Spaces are replaced by the _ (underscore) character, with all words in lowercase. For example: my_variable 
or username_password.
- kebab-case: Similar to the previous one, but with spaces replaced by hyphens. For example: my-var or user-password. 
This convention cannot be used in JavaScript for variables and functions.
- PascalCase: Similar to CamelCase, but in this case all words begin with a capital letter. For example: MyVar or 
CustomerPassword.
*/

/* Null and Undefined Types

Null is a special type, as it can be translated as “no value” and can be assigned as the value of a variable

*/

let input = null;

if (input === null) {
    console.log('No information');
} else {
    console.log(input);
}

console.log(null == undefined); // true
console.log(null === undefined); // false