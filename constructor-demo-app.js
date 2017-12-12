'use strict';

var briansClass = [];

function Student(firstName, lastInitial, favNum) {
  this.course = '201d29';
  this.firstName = firstName;
  this.lastInitial = lastInitial;
  this.faveNumber = favNum;
  this.isCodeNinja = true;
  this.intro = function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  };
  briansClass.push(this);
};

new Student('Tama', 'R', 32);
new Student('Jay', 'm', 11);
