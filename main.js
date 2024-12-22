onload = () =>{
        document.body.classList.remove("container");
};


// Ambil elemen-elemen penting
const showPopupBtn = document.getElementById('show-popup');
const popup = document.getElementById('popup');
const continueBtn = document.getElementById('popup-continue');

// Tampilkan popup ketika tombol "klik ini yaa" ditekan
showPopupBtn.addEventListener('click', () => {
    popup.style.display = 'flex'; // Tampilkan popup
});

// Beralih ke halaman berikutnya setelah tombol "Lanjut" ditekan
continueBtn.addEventListener('click', () => {
    popup.style.display = 'none'; // Sembunyikan popup
    window.location.href = 'flower.html'; // Pindah ke halaman kedua
});


// // pop up
// Fungsi untuk membuka popup
function openPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex'; // Tampilkan popup
}

// Fungsi untuk menutup popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Sembunyikan popup
}



audio
const audio = document.getElementById('background-music');

// Mengambil posisi audio terakhir dari localStorage
window.addEventListener('beforeunload', () => {
    localStorage.setItem('audioTime', audio.currentTime); // Simpan waktu terakhir audio diputar
});

// Ketika halaman dimuat, atur audio untuk melanjutkan dari posisi terakhir
window.addEventListener('load', () => {
    const savedTime = localStorage.getItem('audioTime');
    
    if (savedTime) {
        audio.currentTime = savedTime;  // Set posisi audio ke waktu yang disimpan
    }

    audio.play();  // Pastikan audio diputar
});


// const audio = new Audio('img/alexandria.mp3');
// window.addEventListener('beforeunload', () => {
//     localStorage.setItem('audioTime', audio.currentTime);
// });

// window.addEventListener('load', () => {
//     const savedTime = localStorage.getItem('audioTime'); 
//     if (savedTime) {
//         audio.currentTime = savedTime;
//     }
//     audio.play();
// });   

