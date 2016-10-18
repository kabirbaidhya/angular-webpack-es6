import angular from 'angular';
import KeyCode from 'keycode-js';

export default {
    bindings: {
        'text': '=',
        'placeholder': '@',
        'onSubmit': '=',
        'disabled': '='
    },
    template: require('./textbox.html'),
    controllerAs: 'vm',
    controller() {
        let vm = this;

        vm.placeholder = vm.placeholder || 'Enter Text';

        vm.handleKeyPress = function(e) {
            if (e.which === KeyCode.KEY_RETURN && angular.isFunction(vm.onSubmit)) {
                vm.value = vm.value.trim();

                if (!vm.value) {
                    return;
                }

                vm.onSubmit(vm.value, e);
            }
        };
    }
}
