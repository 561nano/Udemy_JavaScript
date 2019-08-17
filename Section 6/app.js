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
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }

    };

    return {
        addItem: function (type, des, val) {
            var newItem, ID;

            //created new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            } else {
                ID = 0;
            }

            //Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }

            //Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },

        testing: function () {
            console.log(data);
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
        var input, newItem;

        // TODO 1. Get the field input data
        input = UIController.getInput();

        // TODO 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value)

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