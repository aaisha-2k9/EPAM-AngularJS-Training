(function (module) { 
module.controller("catsearchcontroller", catsearchcontroller);
catsearchcontroller.$inject = ["$filter", "premiumCatService"];
function catsearchcontroller($filter, premiumCatService) {
    var vm = this;
    vm.CatViewOrder=[
    {value: 'asc', name: 'Ascending'},
    {value: 'dsc', name: 'Descending'}];
    vm.Allcats = premiumCatService.GetCats();
    vm.search = search; 
    vm.addCat=addCat;
    vm.resetAll=resetAll;
    function search() {          
        if (vm.searchText) {
            vm.cats = _.filter(vm.Allcats,
            function (item) {
            return searchUtil(item, vm.searchText);

        });
        }     
        else {
            if (vm.selectedvalue.value==='asc'){                    
            vm.Allcats= $filter('orderBy')(vm.Allcats, "name");
            }
            else if(vm.selectedvalue.value==='dsc'){
            vm.Allcats= $filter('orderBy')(vm.Allcats, "name", true);
            }                
        }
        }
    function addCat() {           
        premiumCatService.AddCat(vm.name, vm.url);
        vm.resetAll();
    }
    function searchUtil(item, toSearch) {
        /* Search Text in all 3 fields */
        return (item.name.toLowerCase().indexOf(toSearch.toLowerCase()) > -1) ? true : false;
    }
    function resetAll() {
        vm.name = '';
        vm.url = '';
        vm.searchText = '';
    }
    
} 
})(angular.module("CatApp"));
