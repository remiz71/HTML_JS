const newItemCategory = document.querySelector("[name=newItemCategory]");
const newItemType = document.querySelector("[name=newItemType]");
const newItemManuf = document.querySelector("[name=newItemManuf]");
const newItemModel = document.querySelector("[name=newItemModel]");
const newItemQty = document.querySelector("[name=newItemQty]");
const btn_addItemToOrder = document.querySelector("[name=addItemToOrder]")
const orderTable = document.getElementById('id_orderTable');

function prepareValues(){
    let values ={};
    values.category = newItemCategory.value;
    values.type = newItemType.value;
    values.manuf = newItemManuf.value;
    values.model = newItemModel.value;
    values.qty = newItemQty.value;
    return values;
}

function appendOrder(row,values){
    let categoryCell = row.insertCell(0);
    categoryCell.innerHTML=values.category;

    let typeCell = row.insertCell(1);
    typeCell.innerHTML=values.type;

    let manufCell = row.insertCell(2);
    manufCell.innerHTML=values.manuf;

    let modelCell = row.insertCell(3);
    modelCell.innerHTML=values.model;

    let qtyCell = row.insertCell(4);
    qtyCell.innerHTML=values.qty;

    let actionCell = row.insertCell(5);
    actionCell.innerHTML = "<input type='button' name='bt_del' onclick='deleteItem(this)' value='DELETE'>";


}

function addItemToOrder(){
    let values = prepareValues();
    let newRow = orderTable.insertRow();
    appendOrder(newRow,values);
}

function deleteItem(button){
    const rowPar = button.parentNode.parentNode.parentNode;
    rowPar.removeChild(button.parentNode.parentNode);
}
btn_addItemToOrder.addEventListener("click", addItemToOrder);

