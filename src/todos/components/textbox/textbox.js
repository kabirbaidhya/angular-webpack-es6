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
                vm.text = vm.text.trim();

                if (!vm.text) {
                    return;
                }

                vm.onSubmit(vm.text, e);
            }
        };
    }
}
