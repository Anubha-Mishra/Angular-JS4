(function () {
  'use strict';

  angular.module('data')
  .component('itemList', {
    templateUrl: 'src/templates/item-list-details.template.html',
    bindings: {
      items: '<'
    }
  });
})();
