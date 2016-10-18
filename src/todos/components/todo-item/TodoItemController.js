TodoItemController.$inject = ['$scope', 'TodoService'];

export default function TodoItemController($scope, TodoService) {
    let vm = this;

    vm.editing = false;
    vm.saving = false;

    vm.beginEdit = function() {
        vm.editing = true;
    };

    vm.stopEdit = function() {
        vm.editing = false;
    };

    vm.saveChanges = function() {
        vm.saving = true;

        TodoService.update(vm.data.id, vm.data)
            .then(() => vm.stopEdit())
            .finally(() => {
                vm.saving = false;
            });
    };

    $scope.$watch('vm.data.completed', () => {
        vm.saveChanges()
    });
}
