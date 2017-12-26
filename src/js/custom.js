angular.module("myApp", [])
  .controller('mainCtrl', ['$scope', function($scope) {
    $scope.countries = [{
      name: "United Kingdom",
      code: "uk"
    }, {
      name: "United States",
      code: "us"
    }, {
      name: "Canada",
      code: "ca"
    }, {
      name: "India",
      code: "in"
    }];
    $scope.topicList = [
      {id:'children',label:'Children\'s', selected: false},
      {id:'crafs',label:'Crafts & Hobbies', selected: false},
      {id:'popularculture',label:'Film & TV', selected: false},
      {id:'food',label:'Food & Drink', selected: false},
      {id:'gardening',label:'Gardening', selected: false},
      {id:'health',label:'Health & Beauty', selected: false},
      {id:'history',label:'History', selected: false},
      {id:'lego',label:'LEGO®', selected: false},
      {id:'pregnancy',label:'Parenting', selected: false},
      {id:'relationships',label:'Relationships', selected: false},
      {id:'science',label:'Science & Nature', selected: false},
      {id:'sports',label:'Sports & Fitness', selected: false},
      {id:'starwars',label:'Star Wars™', selected: false}];
    $scope.selectedTopics = [];
    $scope.onceIsCheck = false;

    $scope.toggleItem = function(el) {
      //$scope.onceIsCheck = false;
       if (el.selected)
         $scope.selectedTopics.push(el)
        else
           $scope.selectedTopics.splice($scope.selectedTopics.indexOf(el), 1);
     };
     $scope.legalList = [{
       label: 'I can confirm that I am 16 years of age'
     }, {
       label: 'I agree to the terms of the Privacy Policy'
     }];
     $scope.modalShown = false;
     $scope.submitForm = function() {
       //alert("successfully submitted");
        if ($scope.myForm.$valid)
             alert("successfully submitted");
             $scope.modalShown = !$scope.modalShow;
         // else
         //     alert('userform is not in scope');
    }

  }])
  .directive('modalDialog', function(){
    return{
      restrict: 'E',
      scope:{
         show: '='
       },
      replace: true,
      transclude: true,
      link: function(scope, element, attrs){
          scope.dialogStyle = {};
          if (attrs.width)
            scope.dialogStyle.width = attrs.width;
          if (attrs.height)
            scope.dialogStyle.height = attrs.height;
           scope.hideModal = function() {
            scope.show = false;
        };
      },
      template: "<div class='ng-modal transition' ng-show='show'><div class='ng-modal-overlay transition' ng-click='hideModal()'></div><div class='ng-modal-dialog transition' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
      //template: "<div class='modal fade'>
                    // <div class='modal-dialog'>
                    //   <div class='modal-content'>
                    //     <div class='modal-body' ng-transclude></div>
                    //     <div class='modal-footer'>
                    //       <button type='button' class='btn btn-info' data-dismiss='modal'>Close</button>
                    //     </div>
                    //   </div>
                    // </div>
                    // </div>"

   };
});


  //var messageModal = function() {
  // app.directive("messageModal", function(){
  //   return ({
  //     restrict: 'E',
  //     transclude: true,
  //     template: "<div class='modal fade'><div class='modal-dialog'><div class='modal-content'><div class='modal-body' ng-transclude></div><div class='modal-footer'><button type='button' class='btn btn-info' data-dismiss='modal'>Close</button></div></div></div></div>"
  //   });
  // });

  // app.directive("messageModal", [messageModal]);
  // app.controller("mainCtrl", [mainCtrl]);
