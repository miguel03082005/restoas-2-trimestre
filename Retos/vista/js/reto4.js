function classifyTriangle() {
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
    var side3 = parseFloat(document.getElementById("side3").value);

    var triangleType = getTriangleType(side1, side2, side3);

    alert("El triángulo es de tipo: " + triangleType);
}

function getTriangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        return "Equilátero";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}