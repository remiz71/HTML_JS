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
function update(inp){
    var row = document.getElementById("id_orderTable").rows[inp.value];
    row.style.backgroundColor = 'white';
    row.cells[0].innerText = newItemCategory.value;
    row.cells[1].innerText = newItemType.value;
    row.cells[2].innerText = newItemManuf.value;
    row.cells[3].innerText = newItemModel.value;
    row.cells[4].innerText = newItemQty.value;

    newItemType.value = "";
    newItemQty.value = "";
    newItemManuf.value = "";
    newItemModel.value = "";
    newItemCategory.value = "";

}

function edit(button){
    var ed = button.parentNode.parentNode;
    ed.style.backgroundColor = "yellow";
    var cat = ed.cells[0].innerText;
    var typ = ed.cells[1].innerText;
    var man = ed.cells[2].innerText;
    var mod = ed.cells[3].innerText;
    var qty = ed.cells[4].innerText;
    document.getElementsByName('newItemCategory')[0].value = cat;
    document.getElementsByName('newItemType')[0].value = typ;
    document.getElementsByName('newItemManuf')[0].value = man;
    document.getElementsByName('newItemModel')[0].value = mod;
    document.getElementsByName('newItemQty')[0].value = qty;
    var bt = document.getElementsByName("editOrder")[0];
    bt.value = ed.rowIndex;

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
    let editCell = row.insertCell(6)
    editCell.innerHTML = "<input type='button' onclick='edit(this)' name='EditItem' value='Edit Order'/>"


}

function addItemToOrder(){

    let values = prepareValues();
    let newRow = orderTable.insertRow();
    appendOrder(newRow,values);
    newItemType.value = "";
    newItemQty.value = "";
    newItemManuf.value = "";
    newItemModel.value = "";
    newItemCategory.value = "";
}

function deleteItem(button){
    const rowPar = button.parentNode.parentNode.parentNode;
    rowPar.removeChild(button.parentNode.parentNode);
}
btn_addItemToOrder.addEventListener("click", addItemToOrder);

