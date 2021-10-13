document.addEventListener("keyup", resultat);
document.addEventListener("keyup", funcCompt);
document.addEventListener("keyup", progres);

function resultat() {
  document.getElementById("edited").innerHTML = document.getElementById("editeur").value;
}

function funcCompt() {
  let cc = document.getElementById("editeur").value.length;
    document.getElementById("compte").innerHTML = "Caractères restant: " + (240 - cc)
}

const limage = document.getElementById("giff");

document.getElementById("editeur").onfocus = function tadam() {
  limage.style.visibility = "visible";
  }

document.getElementById("editeur").onblur = function tadoum() {
  limage.style.visibility = "hidden";
  }

document.getElementById("boldbt").onclick = function insertbold() {
  document.getElementById("editeur").value += "<b></b>"
}

document.getElementById("itbt").onclick = function insertit() {
  document.getElementById("editeur").value += "<i></i>"
}

document.getElementById("udbt").onclick = function insertud() {
  document.getElementById("editeur").value += "<u></u>"
}

function progres () {
  let val = document.getElementById("editeur").value.length;
  let max = document.getElementById("editeur").maxLength;

  console.log(val);
  console.log(max);
  
  document.getElementById("prog").style.width = val*100 / max + "%" ;

  let result = document.getElementById("prog").style.width = val*100 / max;
  
  if (result <= 40) {
    document.getElementById("prog").style.backgroundColor = "violet";
  }
  else {
    if (result >= 41 && result < 60) {
      document.getElementById("prog").style.backgroundColor = "green"
       } 
        else {
        if (result >= 61 && result < 80) {
        document.getElementById("prog").style.backgroundColor = "orange";
        } 
          else {
          if (result >= 81 && result < 100) {
          document.getElementById("prog").style.backgroundColor = "red";
          } else {
            if (result == 100) {
              document.getElementById("prog").style.backgroundColor = "black";
            }
          }
        }
      } 
    }
  }

function dlm (){
  if (document.getElementById("dark").checked){
    document.getElementsByTagName("body")[0].style.color = ("white");
    document.getElementsByTagName("body")[0].style.backgroundColor = "#3f3f3f";
  } else {
    document.getElementsByTagName("body")[0].style.color = ("black");
    document.getElementsByTagName("body")[0].style.backgroundColor = "burlywood";
  }
}
