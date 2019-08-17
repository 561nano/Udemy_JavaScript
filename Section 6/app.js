var budgetController = (function () {

    // some code

})();


var UIController = (function () {

    // some code

})();


var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {

        // TODO 1. Get the field input data

        // TODO 2. Add the item to the budget controller

        // TODO 3. Add the item to the UI

        // TODO 4. Calculate the budget

        // TODO 5. Display the budget on the UI

    };

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13 || event.key === "Enter") {
            event.preventDefault(); // prevents the enter key from also triggering a click event
            ctrlAddItem();
        }
    });


})(budgetController, UIController);