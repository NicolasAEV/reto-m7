let formularioAdd = document.getElementById("formulario");
let nombre = document.getElementById('nombre')
let pib_2019 = document.getElementById('pib_2019')
let pib_2020 = document.getElementById('pib_2020')

formularioAdd.addEventListener("submit", (e) => {
    e.preventDefault();
    let pais = {
        nombre: nombre.value,
        pib_2019: pib_2019.value,
        pib_2020: pib_2020.value
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("/paises", {
        method: "post",
        headers: myHeaders,
        body: JSON.stringify(pais)
    })
        .then(response => response.json())
        .then(data => {
            if (data.code != 200) {
                alert("Algo ha pasado!: " + data.error)
            } else {
                alert(data.message)
                location.reload()
            }
        }).catch(error => {
            alert("Algo ha fallado al realizar la consulta")
        })
})

//eliminar por nombre
let formEliminar = document.getElementById("eliminarPais");
let nombrePaisEliminar = document.getElementById('nombrePaisEliminar')
formEliminar.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombrePais = nombrePaisEliminar.value;
    fetch("/paises/" + nombrePais, {
        method: "delete"
    })
        .then(response => response.json())
        .then(data => {
            if (data.code != 200) {
                alert("Algo ha pasado!: " + data.error)
            } else {
                alert(data.message)
                location.reload()
            }
        }).catch(error => {
            alert("Algo ha fallado al realizar la consulta")
        })
})
//ordenar

