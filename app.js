'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //via MDN docs
}

var pikePlaceMarket = {
  name: '1st and Pike',
  minCustsPerHour: 23,
  maxCustsPerHour: 65,
  avgCookiesPerCust: 6.3,
  custEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustomersEachHour: function() {
    for(var i = 0; i < hours.length; i++){
      this.custEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.customersEachHour[i] + this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total daily');
    }
  },
  render: function(){

  }
};
