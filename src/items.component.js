(function () {
  'use strict';

  angular.module('data')
  .component('itemList', {
    templateUrl: 'src/templates/item-list-details.template.html',
    bindings: {
      items: '<'
    }
  })
  .controller('ItemListController', ItemListController);

  ItemListController.$inject = ['items'];
  function ItemListController(items) {
    var itemList = this;
    itemList.items = items;
  }
})();
