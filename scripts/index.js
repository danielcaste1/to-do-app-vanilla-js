window.addEventListener("load", ()=>{
    runApp();
});

const runApp = ()=>{
    const addButton = document.querySelector("#addButton");
    addButton.addEventListener("click", ()=>{
        addTask();
    });
    
};

const addTask = ()=>{
    const taskText = document.querySelector("#taskInput")
    const taskValue = taskText.value;
    if(!taskValue.length == 0){
        const task = createTaskElement(taskValue);
        const tasksContainer = document.querySelector("#tasksContainer");
        tasksContainer.appendChild(task);
        taskText.value = "";
    }
};

const createTaskElement = (taskText)=>{
    
    const p = document.createElement("p");
    p.innerHTML = taskText;

    const doneButton = document.createElement("button");
    doneButton.innerHTML = "Done";
    doneButton.setAttribute("type", "button");
    doneButton.classList.add("doneButton", "main-button");

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("type", "button");
    deleteButton.classList.add("deleteButton", "secondary-button");

    const buttonsContainer = document.createElement("div");
    buttonsContainer.appendChild(doneButton);
    buttonsContainer.appendChild(deleteButton);

    const container = document.createElement("div");
    container.classList.add("task");
    container.appendChild(p);
    container.appendChild(buttonsContainer);
    doneButton.addEventListener("click", (e)=>{
        const doneButton = e.currentTarget;
        const buttonContainer = doneButton.parentNode;
        const taskToDone = buttonContainer.parentNode;
        const p = taskToDone.firstElementChild;
        p.innerHTML = p.innerHTML.strike();
        doneButton.setAttribute("disabled", true);

    });
    deleteButton.addEventListener("click", (e)=>{
        const deleteButton = e.currentTarget;
        const buttonContainer = deleteButton.parentNode;
        const taskToDelete = buttonContainer.parentNode;
        const tasksContainer = document.querySelector("#tasksContainer");
        tasksContainer.removeChild(taskToDelete);
    });
    return container;
}