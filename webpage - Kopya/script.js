function sayfaGecis(id) {

    document.getElementById('sayfa1').style.display = 'none';
    document.getElementById('sayfa2').style.display = 'none';
    document.getElementById('sayfa3').style.display = 'none';

    document.getElementById(id).style.display = 'block';
}

function donusumYap() {

    var x = document.getElementById('inp_x').value;
    var y = document.getElementById('inp_y').value;
    var aci = document.getElementById('inp_aci').value;

    console.log("degerler alindi: " + x + " " + y);

    if(x == "" || y == "" || aci == "") {
        alert("Lütfen tüm sayıları girin!");
        return;
    }

    x = Number(x);
    y = Number(y);
    aci = Number(aci);

    var radyan = aci * (Math.PI / 180);

    var yeniX = (x * Math.cos(radyan)) - (y * Math.sin(radyan));
    var yeniY = (x * Math.sin(radyan)) + (y * Math.cos(radyan));

    document.getElementById('res_x').innerHTML = yeniX.toFixed(3);
    document.getElementById('res_y').innerHTML = yeniY.toFixed(3);
    document.getElementById('sonuc_kutu_1').style.display = "block";
}

function matrisHesapla() {
    var a11 = Number(document.getElementById('a_11').value);
    var a12 = Number(document.getElementById('a_12').value);
    var a21 = Number(document.getElementById('a_21').value);
    var a22 = Number(document.getElementById('a_22').value);

    var b11 = Number(document.getElementById('b_11').value);
    var b12 = Number(document.getElementById('b_12').value);
    var b21 = Number(document.getElementById('b_21').value);
    var b22 = Number(document.getElementById('b_22').value);

    var c11 = (a11 * b11) + (a12 * b21);
    var c12 = (a11 * b12) + (a12 * b22);
    
    var c21 = (a21 * b11) + (a22 * b21);
    var c22 = (a21 * b12) + (a22 * b22);

    console.log("matris sonucu: " + c11);

    document.getElementById('c_11').innerText = c11;
    document.getElementById('c_12').innerText = c12;
    document.getElementById('c_21').innerText = c21;
    document.getElementById('c_22').innerText = c22;

    document.getElementById('sonuc_kutu_2').style.display = "block";
}