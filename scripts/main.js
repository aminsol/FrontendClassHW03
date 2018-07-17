(function (window) {
    "use strict";
    const $ = window.jQuery;
    const FORM_SELECTOR = "[data-coffee-order=\"form\"]";
    const CHECKLIST_SELECTOR = "[data-coffee-order=\"checklist\"]";
    const App = window.App;
    const Truck = App.Truck;
    const DataStore = App.DataStore;
    const FormHandler = App.FormHandler;
    const CheckList = App.CheckList;
    const myTruck = new Truck("ncc-1701", new DataStore());
    //
    const checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    const formHandler = new FormHandler(FORM_SELECTOR);

    $("#payment").on("click", function () {
        window.location.replace("payment.html");
    });

    $("#strengthLevel").change(function () {
        let value = $(this).val();
        let R = 255 * value / 100;
        let G = 255 - (255 * value / 100);
        let B = 50 - (50 * value / 100);
        $(this).css("background-color", "rgba("+ R +","+ G +","+ B +",1)");
    });

    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });

    console.log(formHandler);
    window.myTruck = myTruck;
})(window);
