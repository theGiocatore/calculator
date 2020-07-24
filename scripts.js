
function calcLogic() {

    document.querySelectorAll('.vrednost').forEach(item => {
        item.addEventListener('click', myFunction => {
            var unos = item.innerHTML;
            var broj = document.getElementById("ekran").innerHTML;

            if (Number(unos) >= 0 || item.innerHTML == "+" || item.innerHTML == "-" || item.innerHTML == "/" || item.innerHTML == "*") {
                var broj = document.getElementById("ekran").innerHTML = (String(broj) + String(unos));
            }
            else if (unos == "RESET") {
                (document.getElementById("ekran")).innerHTML = null
            }
            else if (item.innerHTML == "C") {
                var broj2 = document.getElementById("ekran").innerHTML;
                var noviBroj = broj2.slice(0, -1);
                document.getElementById("ekran").innerHTML = noviBroj;
                var broj = noviBroj;
            }
            else if (item.innerHTML == "=") {
                var broj0 = document.getElementById("ekran").innerHTML;
                var noviBroj0 = eval(broj0);
                document.getElementById("ekran").innerHTML = noviBroj0
            }
        });
    })

}
