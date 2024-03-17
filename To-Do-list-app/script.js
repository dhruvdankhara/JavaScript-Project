// select element from DOM
let list = document.querySelector('.list');
let input = document.querySelector('input');
let btn = document.querySelector('button');
let edit = false;
let editloc;

// save data in local storage
function saveData() {
    localStorage.setItem('data', list.innerHTML);
}

// get saved data from local storage
function getData() {
    let oldTasks = localStorage.getItem('data');
    list.innerHTML = oldTasks;

}

// add editrd task to list
function addEditedTask(task){
    let editedLi = editloc.parentElement.parentElement;
    editedLi.querySelector('#taskText').textContent = task;
    edit = false;
}

// create function to add task
function addtask() {  
    let task = input.value.trim()   ;
    if(task === '') {
        window.alert("Please enter a task");
    }else{
        // if we do editing in task
        if(edit){
            addEditedTask(task);
        }else{
            let li = document.createElement('li');
            li.innerHTML = `<p id="taskText" class="w-9/12 text-xl cursor-pointer text-wrap text-ellipsis truncate">${task}</p>
            <div class="flex gap-1"> 
                            <img id="editbtn" class="w-11 h-11 p-3 cursor-pointer hover:bg-slate-200 hover:rounded-xl " src="pen-to-square-regular.svg" alt="">
                            <img id="removebtn" class="w-11 h-11 p-3 cursor-pointer hover:bg-slate-200 hover:rounded-xl" src="trash-can-regular.svg" alt="">
                            </div>`;
            li.classList = 'flex gap-4 items-center justify-between w-96 pl-3 hover:outline hover:outline-1 hover:rounded-xl hover:outline-slate-400';
            list.appendChild(li);
        }
    }
    input.value = '';
    edit = false;
    saveData();
}


// create function for mark as done.
function taskComplete(tar){
    tar.classList.toggle('line-through');
    tar.classList.toggle('text-slate-700');   
}

// create funrction for delete task
function deleteTask(tar){
    tar.parentElement.parentElement.remove();
}


function editTask(tar) {
    edit = true;
    editloc = tar;
    let taskLi = tar.parentElement.previousElementSibling;
    input.value = taskLi.innerText.trim();
    input.focus();
}

// event listeners

// add task listener
btn.addEventListener('click',addtask);
input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        addtask();
    }
});

// delete, mark as done listener
list.addEventListener( 'click' , (e) =>  {
    let tar = e.target;
    if ( tar.id == 'removebtn'){
        deleteTask(tar);
    }else if (tar.id === 'taskText'){
        taskComplete(tar);    
    }else if (tar.id === 'editbtn'){
        editTask(tar);
    }
    saveData();
}); 


getData();