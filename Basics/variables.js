const accountId = 144553
let accountEmail = "jimi@account.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 //Not Allowed
console.table([accountId,accountEmail,accountPassword,accountCity.accountState]);
accountEmail = "vs@vs.com"
accountPassword = "121212"
accountCity = "Bengaluru"
let accountState;
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
/*
Prefer Not to use var because of issue in block scope and functional scope.
*/