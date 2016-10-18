import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import config from './todos.config';
import TodoService from './TodoService';
import TodosController from './TodosController';

// Components
import textbox from './components/textbox/textbox';
import todoList from './components/todo-list/todoList';

let todos = angular.module('todos', [uiRouter, ngResource]);

todos.config(config)
    .component('textbox', textbox)
    .component('todoList', todoList)
    .service('TodoService', TodoService)
    .controller('TodosController', TodosController);

export default todos.name;
