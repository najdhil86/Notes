//conditionals

//example 1

var bank_balance = 302.13;
var amount = 99.99;

if (amount < bank_balance) {
    
    console.log("I want to buy this phone!")
}

//example 2

const ACESSORY_PRICE = 9.99;

var bank_balance = 302.13;
var amount = 99.99;

amount = amount * 2;


//can we afford the extra purchase?

if (amount < bank_balance) {
    
    console.log("I'll take the accessory!" );
    amount = amount + ACESSORY_PRICE;
}

//otherwise:

else {
    
    console.log("No, thanks.");
}

//Loops

while (numOfCustomers > 0) {
    
    console.log("How may I help you ?" );
    
    //help the customer...
    
    numOfCustomers = numOfCustomers - 1;
}

//versus:

do {
    
    console.log("How may I help you?");
    
    // help the customer...
    
    numOfCustomers = numOfCustomers - 1;
    
} while (numOfCustomers > 0);



//practice conditionals

const taxPrice = 9.99;

var phonePrice = 100.00;
var accessory = 23.00;

var bank = 200.00;

bank = bank * 2;

console.log(bank);

if (phonePrice < bank) {
    
    console.log("You bought a phone!");
    bank = bank - phonePrice;
}

else {
    
    console.log("Sorry you have no more money!");
}