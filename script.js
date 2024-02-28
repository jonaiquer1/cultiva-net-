/* NAVIGATION MANUAL */
const navBtns = document.querySelectorAll('.nav-btn');
const firstSlide = document.querySelector('.first');
const margins = ['-0%','-20%','-40%','-60%','-80%','-100%']

navBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        firstSlide.style.marginLeft = `${margins[index]}`;
        navBtns.forEach(btn => {
            btn.style.opacity = '';
        });
        btn.style.opacity = '1';
        counter = index + 1;
    });
});

/* NAVIGATION AUTOMATIC */
var counter = 1;
navigate();
setInterval(navigate, 2500);
function navigate(){
    document.getElementById('nav-btn' + counter).click();
    counter++;
    if(counter > 5){
        counter = 1;
    }
}
































































const numVisitas = document.querySelector('.num-visitas');

if (localStorage.getItem("visitas")) {
    // Si existe, incrementamos el contador en 1
    var contador = parseInt(localStorage.getItem("visitas")) + 1;
  } else {
    // Si no existe, comenzamos el contador desde 1
    var contador = 87;
  }

  // Actualizamos el contador en el elemento HTML y en el almacenamiento local
  numVisitas.innerHTML = contador;
  localStorage.setItem("visitas", contador.toString());


  /* API */
  const apiKey = "5pdCPKgVzlVy+YrbFxuyaA==vFkiwl8wetWmf05M";
  const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
  };

  const apiURL = "https://api.api-ninjas.com/v1/counter?id=test_id&hit=true";