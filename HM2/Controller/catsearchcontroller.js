(function (module) { 
    module.controller("catsearchcontroller", catsearchcontroller);

    function catsearchcontroller($filter) {
        var vm = this;
         vm.CatViewOrder=[{value: 'asc', name: 'Ascending'},
                          {value: 'dsc', name: 'Descending'}];
        vm.cats = [{
            name: 'cat1',
            url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426'
        }, {
            name: 'cat2',
            url: 'http://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',
        }, {
            name: 'cat3',
            url: 'http://www.businessinsider.com/image/4f3433986bb3f7b67a00003c/cute-cat.jpg'
        }, {
            name: 'cat4',
            url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426',
        }, {
            name: 'cat5',
            url: 'http://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'
        }];
        vm.Allcats = vm.cats;
        vm.search = search;       
        function search() {          
            if (vm.searchText) {
                 vm.cats = _.filter(vm.Allcats,
                function (item) {
                    return searchUtil(item, vm.searchText);
                });
            }     
            else {
                if (vm.selectedvalue==='asc'){
                    alert(vm.selectedvalue);
                    vm.cats= $filter('orderBy')(vm.Allcats, "name");
                }
                else if(vm.selectedvalue==='dsc'){
                 vm.cats= $filter('orderBy')(vm.Allcats, "name", true);
                    }                
            }

        }
        function searchUtil(item, toSearch) {          
            return (item.name.toLowerCase().indexOf(toSearch.toLowerCase()) > -1) ? true : false;
        }        
    } 
    })(angular.module("CatApp"));
