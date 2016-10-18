import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from './app.config';
import todos from '../todos';

let app = angular.module('app', [uiRouter, todos]);

app.config(config);

export default app.name;
