// Deep Javascript Foundation

var v;

typeof v;

v = "1";
typeof v;

v = 2;
typeof v;

v = true;
typeof v;

v = {};
typeof v;

v = Symbol();
typeof v;

typeof doesntExist;

var v = null;
typeof v

v = function () { };
typeof v;

v = [1, 2, 3];
typeof v;

//coming soon!

var v = 42n;
// or: BigInt(42)
typeof v;

var myAge = Number("0o46");
var myNextAge = Number("39");
var myCatsAge = Number("n/a");
myAge - "my son's age";

myCatsAge === myCatsAge;

isNaN(myAge);
isNaN(myCatsAge);
isNaN("my son's age");

Number.isNaN(myCatsAge);
Number.isNaN("my son's age");

var trendRate = -0;

trendRate === -0;

trendRate.toString();
trendRate === 0;
trendRate < 0;
trendRate > 0;

Object.is(trendRate, -0);
Object.is(trendRate, 0);


// Beginner Javascript

