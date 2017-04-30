(function () {
  'use strict';

  angular.module('data')
  .controller('CategoriesListController', CategoriesListController)
  .controller('ItemListController', ItemListController);

  CategoriesListController.$inject = ['categories']
  function CategoriesListController(categories) {
    var categoryList = this;
    categoryList.catogary = categories;
  }

  ItemListController.$inject = ['items'];
  function ItemListController(items) {
    var itemList = this;
    itemList.items = items;
  }
})();
