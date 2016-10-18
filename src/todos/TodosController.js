TodosController.$inject = ['TodoService'];

export default function TodosController(TodoService) {
    let vm = this;

    vm.todos = [];

    function init() {
        loadTodos();
    }

    function loadTodos() {
        vm.loading = true;

        TodoService.getAll()
            .then((data) => {
                vm.todos = data;
            })
            .finally(() => {
                vm.loading = false;
            });
    }

    init();
}
