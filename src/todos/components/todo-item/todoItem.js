import angular from 'angular';

export default {
    bindings: {
        'data': '='
    },
    template: require('./todoItem.html'),
    controllerAs: 'vm',
    controller: 'TodoItemController'
}
