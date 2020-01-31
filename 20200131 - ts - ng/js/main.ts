var sel = document.getElementById("selType") as HTMLSelectElement;
var txt = document.getElementById("txtQuantity") as HTMLInputElement;
var pnl = document.getElementById("pnlResult") as HTMLDivElement;

class Item {
    constructor(
        public type: string,
        public quantity: number) {

    }
}

class Basket {
    private _items: Item[] = [];
    constructor() {

    }
    add = (item) => {
        this._items.push(item);
    }

    getTotalItems = () => {
        let list: Item[] = [];

        this._items.forEach(item => {
            let exist = false;
            list.forEach(element => {
                if(element.type == item.type){
                    exist = true;
                    element.quantity += item.quantity;
                }
            });
            if(!exist)
                list.push(new Item(item.type, item.quantity));
        });


        return list;
    }
}
var basket = new Basket();

function addItem() {
    var item = new Item(sel.value, parseInt(txt.value));
    basket.add(item);
    sel.value = "";
    txt.value = "1";
}

function getTotals() {
    let list = basket.getTotalItems();
    pnl.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        let p = document.createElement("p");
        p.innerHTML = item.type + ": " + item.quantity;
        pnl.appendChild(p);
    }
}