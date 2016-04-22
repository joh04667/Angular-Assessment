var app = angular.module('Assessment', []);

app.controller('MainController', function(){
  var vm = this;
  vm.boxMessage = null;
  vm.previousMessages = [];

  vm.submit = function() {
      // set current message to previous if it exists
    vm.currentMessage ? vm.previousMessages.push(vm.currentMessage) : 0 ;
      // set box message to current if it is not null
    vm.boxMessage ? vm.currentMessage = vm.boxMessage : 0;
    vm.boxMessage = null;
  };




}); // main control
