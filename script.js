
//cod de la chatGBT
// Obține tabelul original

function createTable(){
var tabelOriginal = document.getElementById("tabel_1");

// Creează un nou tabel
var tabelNou = document.createElement("table");

// Parcurge fiecare rând din tabelul original
for (var i = 0; i < tabelOriginal.rows.length; i++) {

  // Obține checkbox-ul din celulă
  var checkbox = tabelOriginal.rows[i].cells[0].querySelector("input[type=checkbox]");

  // Verifică dacă checkbox-ul este bifat
  if (checkbox.checked) {

    // Creează un nou rând pentru tabelul nou
    var randNou = document.createElement("tr");

    // Copiază celulele din rândul original în noul rând
    for (var j = 0; j < tabelOriginal.rows[i].cells.length; j++) {
      var celulaNoua = document.createElement("td");
      celulaNoua.innerHTML = tabelOriginal.rows[i].cells[j].innerHTML;
      randNou.appendChild(celulaNoua);
    }

    // Adaugă rândul nou la tabelul nou
    tabelNou.appendChild(randNou);
  }
}

// Adaugă tabelul nou la document
document.body.appendChild(tabelNou);

// Adaugă tabelul nou în div-ul cu ID-ul "noulTabel"
var divTabel = document.getElementById("noulTabel");
divTabel.innerHTML = "";
divTabel.appendChild(tabelNou);
}

// șterge tabelul nou creat: -->
function deleteTable() {
  // Obține div-ul care conține tabelul nou
  var divTabel = document.getElementById("noulTabel");

  // Verifică dacă div-ul există și conține un tabel
  if (divTabel && divTabel.querySelector("table")) {

    // Șterge tabelul din div
    divTabel.removeChild(divTabel.firstChild);
  }
}

// script pentru a deselecta toate rândurile din tabel:
function uncheckRows() {
  // Obține tabelul original
  var tabel = document.getElementById("tabel_1");

  // Găsește toate casetele de selectare din tabel
  var checkboxuri = tabel.querySelectorAll('input[type="checkbox"]');

  // Parcurge toate casetele de selectare și setează checked pe false
  for (var i = 0; i < checkboxuri.length; i++) {
    checkboxuri[i].checked = false;
  }
}