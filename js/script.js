// Ini JavaScript
function replaceName() {
let name = prompt("siapakah nama anda?", "");
document.getElementById("name").innerHTML = name
}

replaceName(); 

document.getElementById("tombol").addEventListener("click", function() {
    replaceName()
})

var slideIndex = 1
showDivs(slideIndex)

function plusDivs(n) {
    showDivs((slideIndex += n))
}

function showDivs(n) {
    var i
    var imgList = document.getElementsByClassName("img-slide")
    if (n > imgList.length) slideIndex = 1
    else if (n < 1) slideIndex = imgList.length

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = 'none'
    }

    imgList[slideIndex - 1].style.display = "block"
}

 setInterval(()=> {
    plusDivs(1)
 }, 5000)

 document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dari reload halaman

    // Mengambil nilai dari input form
    var nama = document.getElementById("nama").value;
    var tanggal = document.getElementById("tanggal_lahir").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var pesan = document.getElementById("pesan").value;

    // Fungsi validasi form
    if (nama === "" || tanggal === "" || !gender || pesan === "") {
        alert("All fields must be filled!");
        return; // Jika ada field kosong, menghentikan eksekusi selanjutnya
    }

    // Jika validasi lolos, menampilkan nilai di dalam div
    document.getElementById("displayNama").innerText = nama;
    document.getElementById("displayTanggal").innerText = tanggal;
    document.getElementById("displayGender").innerText = gender.value;
    document.getElementById("displayPesan").innerText = pesan;
});
