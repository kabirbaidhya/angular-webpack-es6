import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './routes.config';
import TodosController from './TodosController';

let todos = angular.module('todos', [uiRouter]);

todos
    .config(routes)
    .controller('TodosController', TodosController);

export default todos.name;
