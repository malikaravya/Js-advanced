// variables and constants
// accountId, account_Id can be declare as variable names.
// name of memory accountId 
// const var - value it cannot be changed .


const accountId = 1445533
let accountEmail="malik.099@google.com"
var accountPassword="12345"

// this is not a good practice to declare variables.
accountCity="jaipur"
// no data will be stored in memory(since variable has been declared /not defined with a value).
let accountState;


// accountId=2(const variable  value  cannot be updated /not allowed.


console.log(accountId);
accountEmail="hc@hc.com"
accountPassword="212223"
accountCity="delhi"


// output in tabular format.

 console.table([ accountId,accountEmail,accountPassword,accountCity,accountState])

 // in var keyword we dont use scope/block
 // in jS we use two keywords(const and let ).
 /*
prefer not to use var because of issue in (block scope and functional scope).

 */