// Budget app modules architecture and structure
var budgetController = (function () {

    //Code

})();

var UIController = (function () {

    // Code

})();

var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {

        // 1 Get the filed input data

        // 2 Add the item to the budget controller 

        // 3 Add item to the UI

        // 4 Calculate the budget 

        // 5 Display the budget on the UI

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);