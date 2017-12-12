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
      var oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total daily');
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    //access the element in the DOM where our stuff will go
    var ulEl = document.getElementById('pike');

    for(var i = 0; i < hours.length; i++){
      //create an element
      var liEl = document.createElement('li');
      //give it content
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      //append it to the parent
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

pikePlaceMarket.render();

//---------------------------------------------------------------------------



var seaTacAirport = {
  name: 'SeaTac Airport',
  minCustsPerHour: 3,
  maxCustsPerHour: 24,
  avgCookiesPerCust: 1.2,
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
      var oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total daily');
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    //access the element in the DOM where our stuff will go
    var ulEl = document.getElementById('seaTac');

    for(var i = 0; i < hours.length; i++){
      //create an element
      var liEl = document.createElement('li');
      //give it content
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      //append it to the parent
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

seaTacAirport.render();

//---------------------------------------------------------------------------


var seattleCenterStore = {
  name: 'Seattle Center',
  minCustsPerHour: 11,
  maxCustsPerHour: 38,
  avgCookiesPerCust: 3.7,
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
      var oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total daily');
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    //access the element in the DOM where our stuff will go
    var ulEl = document.getElementById('seattleCenter');

    for(var i = 0; i < hours.length; i++){
      //create an element
      var liEl = document.createElement('li');
      //give it content
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      //append it to the parent
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

seattleCenterStore.render();

//---------------------------------------------------------------------------


var capitolHillStore = {
  name: 'Capitol Hill',
  minCustsPerHour: 20,
  maxCustsPerHour: 38,
  avgCookiesPerCust: 2.3,
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
      var oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total daily');
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    //access the element in the DOM where our stuff will go
    var ulEl = document.getElementById('capitolHill');

    for(var i = 0; i < hours.length; i++){
      //create an element
      var liEl = document.createElement('li');
      //give it content
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      //append it to the parent
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

capitolHillStore.render();

//---------------------------------------------------------------------------



var alkiStore = {
  name: 'Alki',
  minCustsPerHour: 2,
  maxCustsPerHour: 16,
  avgCookiesPerCust: 4.6,
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
      var oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total daily');
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    //access the element in the DOM where our stuff will go
    var ulEl = document.getElementById('alki');

    for(var i = 0; i < hours.length; i++){
      //create an element
      var liEl = document.createElement('li');
      //give it content
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      //append it to the parent
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

alkiStore.render();

//---------------------------------------------------------------------------

var totalForDay = (pikePlaceMarket.totalDailySales + seaTacAirport.totalDailySales + seattleCenterStore.totalDailySales + capitolHillStore.totalDailySales + alkiStore.totalDailySales);

console.log('total for day', totalForDay);

var renderTotal = function(){
  var ulEl = document.getElementById('total');
  var liEl = document.createElement('li');
  liEl.textContent = totalForDay;
  ulEl.appendChild(liEl);
};

renderTotal();
