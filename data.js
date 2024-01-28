const nama = "zah zihan";
let usia = 1232424

let data = document.getElementById('data');
console.log(data);

function generateBiodata() {
    let generasi;

    if (usia <= 10 ) { 
        //INI ADALAH KONDISI PERTAMA
        generasi = "1stGen";
    } else if (usia > 10 && usia <= 17) {
        //INI ADALAH KONDISI KEDUA
        generasi = "2ndGen";
    } else if (usia > 18 && usia <= 60) {
        generasi = "3rdGen";
    } else if (usia > 61 && usia < 100){
        generasi = "4thGen";
    } else {
        generasi = "NextGen";
    }

    return data.innerHTML = generasi;

}
generateBiodata();
console.log(nama);
console.log(usia);
