function sifreKontrol() {
  const girilen = document.getElementById("sifreInput").value;
  const sonuc = document.getElementById("sifreSonuc");

  if (girilen === "222266777788") {
    sonuc.textContent = "Erişim sağlandı. 2. bölüme geçiliyor...";
    sonuc.style.color = "green";
    document.getElementById("bolum2").style.display = "block";
  } else {
    sonuc.textContent = "Şifre hatalı. Lütfen tekrar deneyin.";
    sonuc.style.color = "red";
  }
}

function isimKaydet() {
  const isim = document.getElementById("dedektifIsim").value;
  localStorage.setItem("dedektif", isim);
  window.location.href = "ifade1.html"; // örnek geçiş
}

window.onload = function() {
  const isim = localStorage.getItem("dedektif");
  if (isim) {
    document.getElementById("isimKutusu").textContent = "Dedektif " + isim;
  }
};


window.onload = function() {
  const isim = localStorage.getItem("dedektifIsmi") || "Henüz belirtilmedi";
  document.getElementById("dedektifParagrafIsim").textContent = isim;
};

window.onload = function() {
  const isim = localStorage.getItem("dedektifIsmi") || "Henüz belirtilmedi";
  const hedef = document.getElementById("dedektifParagrafIsim");
  if (hedef) {
    hedef.textContent = isim;
  }
};


window.onload = function() {
  const isim = localStorage.getItem("dedektifIsmi") || "Henüz belirtilmedi";
  const hedef = document.getElementById("dedektifParagrafIsim");
  if (hedef) {
    hedef.textContent = isim;
  }
};

window.onload = function() {
  const isim = localStorage.getItem("dedektifIsmi") || "Henüz belirtilmedi";
  const hedef = document.getElementById("dedektifParagrafIsim");
  if (hedef) {
    hedef.textContent = isim;
  }
};


function isimKaydet() {
  const isim = document.getElementById("detectiveName").value;
  localStorage.setItem("dedektifIsmi", isim);
  window.location.href = "ifade1.html";
}