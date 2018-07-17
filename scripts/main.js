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

    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });

    console.log(formHandler);
    window.myTruck = myTruck;
})(window);
