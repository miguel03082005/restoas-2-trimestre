function checkSelection() {
    var selectedName = document.getElementById("name").value;
    var selectedLastName = document.getElementById("lastName").value;
    var selectedActivity = document.getElementById("activity").value;

    if (selectedName === "Jennifer" && selectedLastName === "Fajardo" && selectedActivity === "JAVASCRIPT") {
        window.alert("La respueste es correcta")
    } else if (selectedName === "Margarita" && selectedLastName === "Guarin" && selectedActivity === "PROTOTIPADO") {
        window.alert("La respueste es correcta")
    } else if (selectedName === "Erick" && selectedLastName === "Granados" && selectedActivity === "JAVA") {
        window.alert("La respueste es correcta")
    } else if (selectedName === "Cristian" && selectedLastName === "Buitrago" && selectedActivity === "DISEÑO_DE_PROYECTO") {
        window.alert("La respueste es correcta")
    } else if (selectedName === "Sandra" && selectedLastName === "Rueda" && selectedActivity === "CONSULTAS_SQL") {
        window.alert("La respueste es correcta")
    } else if (selectedName === "Julio" && selectedLastName === "Buitrago" && selectedActivity === "DERECHOS_DE_TRABAJO") {
        window.alert("La respueste es correcta")
    } else if (selectedName === "Maniel" && selectedLastName === "Garabito" && selectedActivity === "PYTHON") {
        window.alert("La respueste es correcta")
    } else {
        window.alert("La respiesta es incorecta")
    }
}