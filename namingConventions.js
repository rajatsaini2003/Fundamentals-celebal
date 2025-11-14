// camelCase
let userName = "JohnDoe";
let userAge = 30;   
function getUserInfo() {
    return `${userName} is ${userAge} years old.`;
}
console.log(getUserInfo());

// PascalCase
class UserProfile {
    constructor(firstName, lastName) {  
        this.firstName = firstName;
        this.lastName = lastName;
    }
}   
const userProfile = new UserProfile("John", "Doe");
console.log(userProfile);

// snake_case
let user_address = "123 Main St";
let user_phone_number = "555-1234";

function getUserContact() {
    return `Address: ${user_address}, Phone: ${user_phone_number}`;
}   
console.log(getUserContact());

// kebab-case -> typically used in file names, not in code
// Example file names
// user-profile.js
// user-settings.json
// order-history.html
