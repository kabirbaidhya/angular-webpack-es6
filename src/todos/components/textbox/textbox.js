import angular from 'angular';
import KeyCode from 'keycode-js';

export default {
    bindings: {
        'text': '=',
        'placeholder': '@',
        'onSubmit': '=',
        'disabled': '='
    },
    template: `
        <input  type="text"
                placeholder="{{vm.placeholder}}"
                ng-model="vm.value"
                ng-keypress="vm.handleKeyPress($event)"
                ng-disabled="vm.disabled"
        />`,
    controllerAs: 'vm',
    controller() {
        let vm = this;

        vm.value = vm.text || '';
        vm.placeholder = vm.placeholder || 'Enter Text';

        vm.handleKeyPress = function(e) {
            if (e.which === KeyCode.KEY_RETURN && angular.isFunction(vm.onSubmit)) {
                vm.onSubmit(vm.value, e);
            }
        };
    }
}
