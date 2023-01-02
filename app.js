var list = document.getElementById('list')

function addItem(){

    var input = document.getElementById('input');
    var li = document.createElement('li');
    var liText = document.createTextNode(input.value);
    li.appendChild(liText);
    list.appendChild(li)
    input.value = "";

    // create delete button
    var Delete = document.createElement('button');
    var deleteText = document.createTextNode("Delete");
    Delete.appendChild(deleteText);
    Delete.setAttribute("class","btn");
    Delete.setAttribute('onclick',"deleteBtn(this)")
    li.appendChild(Delete);
    
    /// Create Edit button
    var Edit  = document.createElement('button');
    var editText = document.createTextNode('Edit');
    Edit.appendChild(editText);
    Edit.setAttribute("class","btn");
    Edit.setAttribute("onclick","editBtn(this)");
   li.appendChild(Edit)

}
function deleteBtn(e){
    e.parentNode.remove()
}
function deleteAll(){
    list.innerHTML = "";
}
function editBtn(e){
 var val = prompt('Enter Edit Value', e.parentNode.firstChild.nodeValue);
 e.parentNode.firstChild.nodeValue = val;
}