
(function (module) {      
    module.controller("CatAppController", function ($scope) {
    $scope.Cats = [
            {name: "cat1", CatCnt: 0},
            {name: "cat2", CatCnt: 0},
            {name: "cat3", CatCnt: 0},
            {name: "cat4", CatCnt: 0},
            {name: "cat5", CatCnt: 0}
        ];                   
    $scope.CatClick = function(CatCnt,index) {
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

});
})(angular.module("CatApp"));
