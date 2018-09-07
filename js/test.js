// ============= date calculator ===============
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd;
}

if(mm<10) {
    mm = '0'+mm;
}

today = yyyy+ '-' + mm + '-' + dd;
//console.log(today);

// Here are the two dates to compare
var date1 = '2017-2-14';
var date2 = today;

// First we split the values to arrays date1[0] is the year, [1] the month and [2] the day
date1 = date1.split('-');
date2 = date2.split('-');

// Now we convert the array to a Date object, which has several helpful methods
date1 = new Date(date1[0], date1[1], date1[2]);
date2 = new Date(date2[0], date2[1], date2[2]);

// We use the getTime() method and get the unixtime (in milliseconds, but we want seconds, therefore we divide it through 1000)
date1_unixtime = parseInt(date1.getTime() / 1000);
date2_unixtime = parseInt(date2.getTime() / 1000);

// This is the calculated difference in seconds
var timeDifference = date2_unixtime - date1_unixtime;

// in Hours
var timeDifferenceInHours = timeDifference / 60 / 60;

// and finaly, in days :)
var timeDifferenceInDays = timeDifferenceInHours  / 24;
// ============= end of date calculator ===========


var tween1 = KUTE.to('#dance', { path: '#taekwondo' },{morphPrecision:2, morphIndex:451, duration:2000}).start();
var tween2 = KUTE.to('#dance', { path: '#archery' },{morphPrecision:2, morphIndex:124,duration:2000});
var tween3 = KUTE.to('#dance', { path: '#swimming' },{morphPrecision:2, morphIndex:220,reverseFirstPath:true,duration:2000})
var tween4 = KUTE.to('#dance', { path: '#dance' },{morphPrecision:2, morphIndex:300,reverseSecondPath:true,duration:2000});

tween1.chain(tween2);
tween2.chain(tween3);
tween3.chain(tween4);
tween4.chain(tween1);


var numberTween1 = KUTE.to('#code', {number: 56519}).start();
var numberTween3 = KUTE.to('#cat', {number: timeDifferenceInDays}).start();






