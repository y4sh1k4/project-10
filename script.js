todos = [
    {
        name:"Buy eggs",
        id:"1",
        done:false
    },
    {
        name:"Buy books",
        id:"2",
        done:false
    },
    {
        name:"Study",
        id:"3",
        done:true
    }
]


const to_do_container = document.getElementById("to_do_container");

function render(){
    to_do_container.innerHTML = "";
    todos.forEach(item =>{
        to_do_container.appendChild(getTodo(item))
    });

}
function getTodo(item){
    const container = document.createElement("div");
    container.classList.add("todo");
    const input = document.createElement("input");
    input.id=item.id;
    input.checked = item.done;
    input.type = "checkbox";
    input.addEventListener("click", (e) => {
        item.done=!item.done;
        render();
    })
    container.appendChild(input);
    const label = document.createElement("label");
    label.htmlFor = item.id;
    label.innerText = item.name;
    if(item.done){
        label.classList.add("cut");
    }
    container.appendChild(label);
    return container;
}
render();