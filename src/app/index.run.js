(function() {
  'use strict';

  angular
    .module('gulpAngularGenerator')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
