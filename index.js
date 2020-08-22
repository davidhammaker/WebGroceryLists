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
    // Get the added item value
    let newListItem = document.getElementById('addedItem').value;

    // Create a new div to hold everything
    let newBulletPoint = document.createElement('div');

    // Create a label to hold checkbox and item text
    let newBulletPointLabel = document.createElement('label');
    newBulletPointLabel.setAttribute('style', 'margin-bottom: 0');
    newBulletPoint.appendChild(newBulletPointLabel);

    // Create checkbox
    let newBulletPointCheck = document.createElement('INPUT');
    newBulletPointCheck.setAttribute('type', 'checkbox');
    newBulletPointCheck.setAttribute('class', 'checkbox-custom');
    newBulletPointLabel.appendChild(newBulletPointCheck);

    // Create text
    let newBulletPointText = document.createTextNode(newListItem);
    newBulletPointLabel.appendChild(newBulletPointText);
    
    // Add ID and class to the new div
    newBulletPoint.setAttribute('id', itemCounter);
    newBulletPoint.setAttribute('class', 'checkbox p-2 list-item');
    itemCounter++;

    // Add the new item to the list
    let listItems = document.getElementById('listItems');
    listItems.appendChild(newBulletPoint);

    // Give checkbox toggle functionality
    newBulletPointCheck.addEventListener('click', function(event){
        if (newBulletPointCheck.checked === true) {
            newBulletPointLabel.style.textDecoration = "line-through";
        } else {
            newBulletPointLabel.style.textDecoration = ""
        }
    });

    // Clear the input
    document.getElementById('addedItem').value = '';
}

newItemEl.addEventListener('click',addNewItemClick);

