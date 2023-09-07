const accountId = 123456;
var gmail = "jiturajsharma8093@gamil.com";
let accountPasswrod = "12345";
accountCity = "Gaya";
let accountState;
// accountId = 546;   // not allowed to change because const
console.log(accountId);

/*
prefer not to user var
because of issue in block scope and function scope // {scope}
*/

gmail = "jitu@google.com"
accountPasswrod = 852741;
accountCity = "Aurangabad";

console.table([accountState,gmail, accountId, accountPasswrod, accountCity])