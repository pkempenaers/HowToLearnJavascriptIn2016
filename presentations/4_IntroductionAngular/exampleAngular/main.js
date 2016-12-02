(function() {
	angular.module('exampleApp', [])
	.component('exampleComponent', exampleComponent());

	function exampleComponent() {
		return {
			template: '<p>Value: {{$ctrl.value}}</p><button ng-click="$ctrl.add()">Add</button><button ng-click="$ctrl.subtract()">subtract</button>',
			controller : function() {
				var vm = this;
				angular.extend(vm, {
					value: 0,
					add,
					subtract,
				});

				function add() {
					vm.value += 1;
				}

				function subtract() {
					vm.value -= 1;
				}
			}
		};
	}
})();