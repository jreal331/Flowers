onload = () =>{
        document.body.classList.remove("container");
};

// Ambil elemen popup dan tombol close
// Ambil elemen popup, tombol close, dan konten baru
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('close-popup');
const newContent = document.getElementById('new-content');

// Tampilkan popup saat halaman dimuat
window.onload = function() {
    popup.style.display = 'flex';  // Tampilkan popup
}

// Tutup popup ketika tombol close ditekan
closePopupBtn.onclick = function() {
    popup.style.display = 'none';  // Sembunyikan popup
    newContent.style.display = 'block';  // Tampilkan konten baru setelah popup ditutup
}

// Tutup popup jika area di luar popup diklik
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';  // Sembunyikan popup jika klik di luar area popup
        newContent.style.display = 'block';  // Tampilkan konten baru setelah popup ditutup
    }
}



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



//audio
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

