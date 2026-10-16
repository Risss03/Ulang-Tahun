// 1. Fungsi agar tombol "Enggak" kabur/menghindar saat di-hover/di-touch
function moveNoButton() {
  const btnNo = document.getElementById('btnNo');
  
  // Hitung area acak di sekitar kartu
  const x = Math.floor(Math.random() * 200) - 100; // Gerak ke kiri/kanan
  const y = Math.floor(Math.random() * 200) - 100; // Gerak ke atas/bawah

  btnNo.style.position = 'relative';
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
}

// Data kalimat pop-up jahil bertingkat
const prankMessages = [
  "Beneran pilih 'Iya'? Gak terpaksa kan? 😜",
  "Jawab yang jujur dari lubuk hati yang paling dalam... 😏",
  "Oke deh, dapat poin 100 buat kamu! Buka kejutan sekarang?"
];

let currentStep = 0;

// 2. Fungsi saat tombol "Iya" ditekan
function handleYes() {
  currentStep = 0;
  document.getElementById('modalText').innerText = prankMessages[currentStep];
  document.getElementById('modalOverlay').classList.remove('hidden');
}

// 3. Menjalankan dialog bertingkat
function nextPrankStep() {
  currentStep++;
  
  if (currentStep < prankMessages.length) {
    document.getElementById('modalText').innerText = prankMessages[currentStep];
  } else {
    // Sembunyikan modal & kuis, tampilkan hasil akhir
    document.getElementById('modalOverlay').classList.add('hidden');
    document.getElementById('quizCard').classList.add('hidden');
    document.getElementById('resultCard').classList.remove('hidden');

    // Ledakan Confetti Pesta
    triggerConfetti();
  }
}

// 4. Efek Kembang Api / Confetti
function triggerConfetti() {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 }
  });
}