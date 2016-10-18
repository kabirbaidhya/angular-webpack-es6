import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todos from './todos';
import config from './app.config';

let app = angular.module('app', [uiRouter, todos]);

app.config(config);

export default app.name;
