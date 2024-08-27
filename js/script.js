const ingresoTexto = document.getElementById("ingresoTexto");

const botonEncriptar = document.getElementById("botonEncriptar");

const botonDesencriptar = document.getElementById("botonDesencriptar");

const botonCopiar = document.getElementById("botonCopiar");

const mensajeFinal = document.getElementById("mensajeFinal");

const muneco = document.getElementById("muneco");

const derechaInfo = document.getElementById("derechaInfo");

const derecha = document.getElementById("derecha");

let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]
    
const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;

    muneco.style.display = "none";

    ingresoTexto.value = "";

    derechaInfo.style.display = "none";

    botonCopiar.style.display = "block";

    derecha.classList.add("ajustar");

    mensajeFinal.classList.add("ajustar");
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase()
    function encriptar(newText) {
        for (let i = 0; i < reemplazar.length; i++){
            if (newText.includes(reemplazar[i][0])){
                newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            };
        };
        return newText
    }
    //const textoEncriptado = encriptar(texto);

    remplace(encriptar(texto));
     
})

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase()
    function desencriptar(newText) {
        for (let i = 0; i < reemplazar.length; i++){
            if (newText.includes(reemplazar[i][1])) {
                newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            };
        };
        return newText
    }
    remplace(desencriptar(texto));
})

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand('copy')
    alert("El texto fue copiado");

    mensajeFinal.innerHTML = "";
    muneco.style.display = "block";
    derechaInfo.style.display = "block";
    botonCopiar.style.display - none;

    derecha.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();

})