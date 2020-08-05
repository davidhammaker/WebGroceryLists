let addedItem = document.getElementById("addedItem");
addedItem.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("newItem").click();
    }
});
let itemCounter = 1;
let newItemEl = document.getElementById('newItem');
let addNewItemClick = function () {
    let newListItem = document.getElementById('addedItem').value;
    let newBulletPoint = document.createElement('p');
    let newBulletPointCheck = document.createElement('INPUT');
    newBulletPointCheck.setAttribute('type', 'checkbox');
    newBulletPoint.appendChild(newBulletPointCheck);
    let newBulletPointText = document.createTextNode(newListItem);
    newBulletPoint.appendChild(newBulletPointText);
    newBulletPoint.setAttribute('id', itemCounter)
    itemCounter++;
    listItems.appendChild(newBulletPoint);
    newBulletPointCheck.addEventListener('click', function(event){
        if (newBulletPointCheck.checked === true) {
            newBulletPoint.style.textDecoration = "line-through";
        } else {
            newBulletPoint.style.textDecoration = ""
        }
    });
    document.getElementById('addedItem').value = '';
}
newItemEl.addEventListener('click',addNewItemClick);

