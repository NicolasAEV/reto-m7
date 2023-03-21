// let ordenar = document.getElementById("ordenar");
// let pib = document.getElementById('pib')
// ordenar.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let pib2020 = pib.value;
//     console.log(pib2020)
//     fetch("/ordenar/by/" + pib2020, {
//         method: "get"
//     })
//         .then(response => response.json())
//         .then(data => {
//             if (data.code != 200) {
//                 alert("Algo ha pasado!: " + data.error)
//             } else {
//                 alert(data.paises)
//                 location.reload()
//             }
//         }).catch(error => {
//             alert("Algo ha fallado al realizar la consulta")
//         })
// })
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