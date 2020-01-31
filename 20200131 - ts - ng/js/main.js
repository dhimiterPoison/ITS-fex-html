var sel = document.getElementById("selType");
var txt = document.getElementById("txtQuantity");
var pnl = document.getElementById("pnlResult");
var Item = /** @class */ (function () {
    function Item(type, quantity) {
        this.type = type;
        this.quantity = quantity;
    }
    return Item;
}());
var Basket = /** @class */ (function () {
    function Basket() {
        var _this = this;
        this._items = [];
        this.add = function (item) {
            _this._items.push(item);
        };
        this.getTotalItems = function () {
            var list = [];
            _this._items.forEach(function (item) {
                var exist = false;
                list.forEach(function (element) {
                    if (element.type == item.type) {
                        exist = true;
                        element.quantity += item.quantity;
                    }
                });
                if (!exist)
                    list.push(new Item(item.type, item.quantity));
            });
            return list;
        };
    }
    return Basket;
}());
var basket = new Basket();
function addItem() {
    var item = new Item(sel.value, parseInt(txt.value));
    basket.add(item);
    sel.value = "";
    txt.value = "1";
}
function getTotals() {
    var list = basket.getTotalItems();
    pnl.innerHTML = "";
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var p = document.createElement("p");
        p.innerHTML = item.type + ": " + item.quantity;
        pnl.appendChild(p);
    }
}
