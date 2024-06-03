
var todo_input = document.getElementById("todo_input")
var add_todo_btn = document.getElementById("add_todo_btn")
var delete_all_todo_btn = document.getElementById("delete_all_todo_btn")
var todo_list = document.getElementById("todo_list")



add_todo_btn.addEventListener("click" , function(){
    if(!todo_input.value) return alert("add some value on Todo")
    
    var list_item =
     `<li>
      <span>${todo_input.value} </span> 
      <button class ="editBtn" onclick="edit(this)">Edit</button>
      <button class ="delBtn" onclick="deleteFun(this)">del</button> 
       
      </li>`
    todo_list.innerHTML +=list_item      

    todo_input.value = ""
})

function edit(element){
    console.log("Edit=>" , element.previousElementSibling.innerText)
    
    var previousValue = element.previousElementSibling.innerText

    var updatedValue = prompt("Edit value" , previousValue)

    element.previousElementSibling.innerText = updatedValue
}

function deleteFun(element){
    //console.log("Delete=>" , element.parentElement)
    element.parentElement.remove()
}