import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import config from './todos.config';
import TodoService from './TodoService';
import TodosController from './TodosController';
import todoList from './components/todoList';

let todos = angular.module('todos', [uiRouter, ngResource]);

todos.config(config)
    .component('todoList', todoList)
    .service('TodoService', TodoService)
    .controller('TodosController', TodosController);

export default todos.name;
