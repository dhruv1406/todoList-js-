console.log("hello");
showList();

function handleSubmit(){
    let title = document.getElementById("title");
    let note = document.getElementById("addTxt");

    let todo = localStorage.getItem('todo');

    if(todo == null){
        newTodo = [];
    }else{
        newTodo = JSON.parse(todo);
    }

    newObj = {
        title : title.value,
        note  : note.value 
    }

    newTodo.push(newObj);
    localStorage.setItem('todo', JSON.stringify(newTodo));
    title.value = "";
    note.value = "";

    showList();
}


function showList(){
    let todo = localStorage.getItem('todo');
    if(todo == null){
        newTodo = [];
    }else{
        newTodo = JSON.parse(todo);
    }

    let html = "";
    newTodo.forEach(function(element, index){
        html += `<div class="card mx-2 my-2 noteCard" style="width: 16rem">
        <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.note}</p>
        <button type="submit" id=${index} onCLick ='deleteBtn(this.id)' class="btn btn-primary">Delete Note</button>
        </div>
        </div>
        </div>`;
    });
    
    let newList = document.getElementById("notes");
    if(newList !=0 ){
        newList.innerHTML = html;
    }else{
        newList.innerHTML = "Nothing to show";
    }
}

function deleteBtn(index){
    let todo = localStorage.getItem('todo');
    if(todo == null){
        newTodo = [];
    }else{
        newTodo = JSON.parse(todo);
    }

    newTodo.splice(index, 1);
    localStorage.setItem('todo',JSON.stringify(newTodo));
    showList();
}

let search = document.getElementById("searchTxt");
let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log("search initiated");

    let searchText = search.value.toLowerCase();
    console.log(searchText);
    let todo = document.getElementsByClassName("noteCard");
    Array.from(todo).forEach(function(element){
        let todoTitle = element.getElementsByTagName('h5')[0].innerText.toLowerCase();
        let todoText = element.getElementsByTagName("p")[0].innerText.toLowerCase();

        if(todoTitle.includes(searchText)){
            element.style.display="block";
        }else{
            if(todoText.includes(searchText)){
                element.style.display="block";
            }
            else{
                element.style.display = "none";
            }
        }

    });
    
});