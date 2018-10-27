window.onload = init;

function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("li");
            element.innerText = task;
            /*element.addEventListener("click", () => {
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
            });*/
            /* element.addEventListener("click", function(){
                console.log(this);
                let parent = this.parentNode;
                if(parent){
                    parent.removeChild(this);
                }
            });*/

            // Añadir un boton para marcar de finalizado
            var element2 = document.createElement("input");
            element2.setAttribute("type", "submit");
            element2.setAttribute("value", "Ready");
            element.appendChild(element2);

            element2.addEventListener('click', function () {
                if (this.click) {
                    element.style.textDecoration = "line-through";
                    element.removeChild(element2);
                }
            });

            // Elmine de la lista
            var element3 = document.createElement("input");
            element3.setAttribute("type", "submit");
            element3.setAttribute("value", "Delete");
            element.appendChild(element3);

            element3.addEventListener('click', function () {
                let parent = element.parentNode;
                if (parent) {
                    parent.removeChild(element);
                }
            })

            if (priority) {
                this.listTask.unshift({
                    element,
                    task,
                    element2
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task,
                    element2
                });
                this.listHTML.appendChild(element);
            }
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;
        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }
        todoList.add(task, form.important.checked);
    });
}