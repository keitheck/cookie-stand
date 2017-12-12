'use strict'

var storeInfo = {
  storeName: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  avgCustHour: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers; },
  cookiesTotal: function () {
    var cookiesPerHour = [];
    for (var i = 0; i < this.hoursOpen.length; i++) {
      cookiesPerHour.push(Math.round(this.avgCookies * this.avgCustHour()));
    };
    return cookiesPerHour;
    console.log('cookiesPerHour', cookiesPerHour);
  }
};

var cookiesTotalArr = storeInfo.cookiesTotal();
console.log(parseInt(cookiesTotalArr));

var cookies = storeInfo.cookiesTotal();
console.log(cookies);
