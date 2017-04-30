(function () {
  'use strict';

  angular.module('data')
  .component('categoryList', {
    templateUrl: 'src/templates/caterogy-list-items.template.html',
    bindings: {
      categories: '<'
    }
  });
})();
