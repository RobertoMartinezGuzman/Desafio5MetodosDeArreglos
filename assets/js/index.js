    const listaTarea = document.querySelector("#tareas")
    const tareaInput = document.querySelector("#nuevaTarea")
    const btnAgregar = document.querySelector("#agregarTarea")
    const contadorTareas = document.querySelector("#contar-tareas")
    const contadorRealizadas = document.querySelector("#contador-realizadas")
    
    let tareas = [];
    let idCount = 0;

    btnAgregar.addEventListener("click", () => {
        agregarTarea(tareaInput.value)
        tareaInput.value = "";
    })

    function agregarTarea (nombre) {
        tareas.push({id: idCount, name: nombre, isRealizaded: false });
        idCount++;
        renderTareas()
    } 

    
    function borrar(id){
        // let index = getIndexByID(id);
        let index = tareas.findIndex((ele) => ele.id == id)
        tareas.splice(index, 1)
        renderTareas()
    }

    function realized(id) {
        tarea = tareas.filter((element)=> element.id == id)[0];
        tarea.isRealizaded = !tarea.isRealizaded;
        renderTareas();
    }

    function renderTareas () {
        listaTarea.innerHTML = "";
        tareas.forEach((tarea) => {
            listaTarea.innerHTML +=  
            `<tr>
            <td>${tarea.id}</td>
            <td>${tarea.name}</td>
            <td><input type="checkbox" id='checkBox${tarea.id}' onclick='realized(${tarea.id})' style='width: 20px; height: 20px;'</td>
            <td><button onclick='borrar(${tarea.id})'> x </button></td>
            </tr>`
            if (tarea.isRealizaded) {
            document.querySelector(`#checkBox${tarea.id}`).setAttribute('checked', 'checked')
            }
        })
        contadorTareas.innerHTML = "Tareas: " + tareas.length;
        contadorRealizadas.innerHTML = "Realizadas: " + tareas.filter((element) => element.isRealizaded == true).length
    }
    
        agregarTarea("Desayunar")
        agregarTarea("Ducharse")
        agregarTarea("Gimnasio")
        




    
