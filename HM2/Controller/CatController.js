
(function (module) {      
    module.controller("CatAppController", function ($scope) {
    $scope.Cats = [
            {name: "cat1",CatClicked: false, CatCnt: 0},
            {name: "cat2",CatClicked: false, CatCnt: 0},
            {name: "cat3",CatClicked: false, CatCnt: 0},
            {name: "cat4",CatClicked: false, CatCnt: 0},
            {name: "cat5",CatClicked: false, CatCnt: 0}
        ];    
         
    $scope.CatClck = function(index) {         
          $scope.Cats[index].CatClicked= true;
    }
    debugger;
     $scope.CatClickerincrement = function(CatCnt,index,action) {
         debugger;
         var CatCount= "CatCount" + index; 
           if(index <= $scope.Cats.length) {
                    if (CatCnt)
                        {CatCount=CatCnt;}
                    else
                       CatCount=0;
                   CatCount= CatCount+1;              

           $scope.Cats[index].CatCnt= CatCount;
        }
  }  
      $scope.CatClickerdecrement = function(CatCnt,index,action) {
         debugger;
         var CatCount= "CatCount" + index; 
           if(index <= $scope.Cats.length) {
                    if (CatCnt)
                        {CatCount=CatCnt;}
                    else
                       CatCount=0;
                   CatCount= CatCount-1;              

           $scope.Cats[index].CatCnt= CatCount;
        }
  }  

});
})(angular.module("CatApp"));
