let cont = 0;


const valor = document.querySelector("#valor");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (regressar) {
        const contagem = regressar.currentTarget.classList;
        if (contagem.contains("diminuir")) {
            cont--;
            if (cont < 0) {
                valor.style.color = "red";
            }
        }
        valor.textContent = cont;
    })
})

btns.forEach(function (btn) {
    btn.addEventListener("click", function (zerar) {
        const contagem = zerar.currentTarget.classList;
        if (contagem.contains("resetar")) {
            cont = 0;
            valor.style.color = "white";
        }
        valor.textContent = cont;
    })
})

btns.forEach(function (btn) {
    btn.addEventListener("click", function (adicionar) {
        const contagem = adicionar.currentTarget.classList;
        if (contagem.contains("aumentar")) {
            cont++;
            if (cont > 0) {
                valor.style.color = "green";
            }
            
        }
        valor.textContent = cont;
    })
})