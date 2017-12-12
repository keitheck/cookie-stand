'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
  custMin: 23,
  custMax: 65,
  avgCookies: 6.3,
  avgCustHour: function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (this.custMax - this.custMin) + this.custMin);
  },
  cookiesTotal: function () {
    var cookiesPerHour = [];
    for (var i = 0; i < storeHours.length; i++) {
      cookiesPerHour.push(Math.round(this.avgCookies * this.avgCustHour()));
    };
    return cookiesPerHour;
  }
};
//console.log(pike.cookiesTotal());
var cookiesTotalArr = pike.cookiesTotal();
console.log(cookiesTotalArr);





























// function calcCookies() {
//   var cookiesPerHour = [];
//
//   for (var i = 0; i < storeHours.length; i++) {
//     cookiesPerHour.push(Math.round(pike.avgCookies * pike.avgCustHour()));
//   };
// console.log("cookiesPerHour:", cookiesPerHour);
//
// }
// calcCookies();
