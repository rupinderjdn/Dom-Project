var form = document.getElementById('addForm')
var itemList = document.getElementById('items')

// Form Submit event
form.addEventListener('submit',addItem)

function addItem(e){
    e.preventDefault();
    console.log(e.target);
    var newItem = document.getElementById('item').value
    
    var li = document.createElement('li')
    li.className = 'list-group-item'

    // Add text Node with input value
    li.appendChild(document.createTextNode(newItem))


    // create a delete button element
    var delbtn = document.createElement('button')
    delbtn.className = "btn btn-danger btn-sm float-right delete"

    // add text node
    delbtn.appendChild(document.createTextNode("X"))

    li.appendChild(delbtn)

    itemList.appendChild(li)
}



// Delete Button Event
itemList.addEventListener('click',removeItem)

function removeItem(e){
    console.log(e.target)
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li = e.target.parentElement
            itemList.removeChild(li);
        }
    }
}

//Filtering the items
var filter = document.getElementById('filter')
filter.addEventListener('keyup',filterItems)
function filterItems(e){
    // convert to lowercase
    var text = e.target.value.toLowerCase()
    console.log(text)

    var items = Array.from(itemList.getElementsByTagName('li'))

    items.forEach((item,i)=>{
        var itemName = items[i].textContent
        if(itemName.toLowerCase().indexOf(text) >= 0){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none'
        }
    })

}