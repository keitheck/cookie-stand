'use strict';

//---------------------------------------------------------------
//data
//---------------------------------------------------------------

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'];

var salesTable = document.getElementById('salmon-sales-table');
makeHeaderRow();

var storeInfoList = [];

function SalmonStores(storeName, minCustsPerHour, maxCustsPerHour, avgCookiesPerCust) {
  this.name = storeName;
  this.minCustsPerHour = minCustsPerHour;
  this.maxCustsPerHour = maxCustsPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailySales = 0;
  this.calcCustsEachHour = function(){
    for(var i = 0; i < hours.length; i++){
      this.custEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  };
  this.calcCookiesEachHour = function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust);
      //console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      //console.log(this.totalDailySales, 'total daily');
    }
  };
  this.render = function() {
    this.calcCookiesEachHour();
    var tableRowEl = document.createElement('tr');

    var tableDataEl = document.createElement('td');
    tableDataEl.textContent = this.name;
    tableRowEl.appendChild(tableDataEl);

    for(var i = 0; i < this.cookiesEachHour.length; i++){
      tableDataEl = document.createElement('td');
      tableDataEl.textContent = this.cookiesEachHour[i];
      tableRowEl.appendChild(tableDataEl);
    }

    tableDataEl = document.createElement('td');
    tableDataEl.textContent = this.totalDailySales;
    tableRowEl.appendChild(tableDataEl);

    salesTable.appendChild(tableRowEl);
  };
  storeInfoList.push(this);
};

new SalmonStores('1st and Pike', 23, 65, 6.3);
new SalmonStores('SeaTac Airport', 3, 24,1.2);
new SalmonStores('Seattle Center', 11, 38,3.7);
new SalmonStores('Capitol Hill', 20,38, 2.3);
new SalmonStores('Alki', 2, 16,4.6);

//---------------------------------------------------------------
//DEFINE ACTIONS (DECLARE VARIABLES)
//---------------------------------------------------------------

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //via MDN docs
}




for(var i = 0; i < storeInfoList.length; i++){
  var dailyTotal = dailyTotal + storeInfoList.totalDailySales;
}
console.log('dailyTotal', dailyTotal);

//---------------------------------------------------------------
//DO ACTIONS
//---------------------------------------------------------------

for(var j = 0; j < storeInfoList.length; j++){
  storeInfoList[j].render();
}


function makeHeaderRow(){
  var tableRowEl = document.createElement('tr');
  var tableHeaderEl = document.createElement('th');
  tableHeaderEl.textContent = 'Store Location:';
  tableRowEl.appendChild(tableHeaderEl);

  for (var i = 0; i < hours.length; i++){
    tableHeaderEl = document.createElement('th');
    tableHeaderEl.textContent = hours[i];
    tableRowEl.appendChild(tableHeaderEl);
  }
  tableHeaderEl = document.createElement('th');
  tableHeaderEl.textContent = 'Daily Total:';
  tableRowEl.appendChild(tableHeaderEl);

  salesTable.appendChild(tableRowEl);

};





//END
