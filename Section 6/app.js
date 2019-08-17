var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            allExpenses: [],
            allIncome: []
        },
        totals: {
            exp: 0,
            inc: 0
        }

    }

})();


var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc(ome) or exp(enses)
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    }

})();


var controller = (function (budgetCtrl, UICtrl) {

    var setUpEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13 || event.key === "Enter") {
                event.preventDefault(); // prevents the enter key from also triggering a click event
                ctrlAddItem();
            }

        });
    };

    var ctrlAddItem = function () {

        // TODO 1. Get the field input data
        var input = UIController.getInput();
        console.log(input);


        // TODO 2. Add the item to the budget controller

        // TODO 3. Add the item to the UI

        // TODO 4. Calculate the budget

        // TODO 5. Display the budget on the UI

    };

    return {
        init: function () {
            setUpEventListeners();
        }
    }

})(budgetController, UIController);


controller.init();