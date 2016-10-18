export default {
    bindings: {
        'items': '=',
    },
    template: require('./todoList.html'),
    controller() {
        this.items = this.items || [];

        this.hasItems = function() {
            return (this.items.length > 0);
        };
    },
    controllerAs: 'vm'
}
