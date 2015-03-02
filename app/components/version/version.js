'use strict';

angular.module('rantly.version', [
  'rantly.version.interpolate-filter',
  'rantly.version.version-directive'
])

.value('version', '0.1');
