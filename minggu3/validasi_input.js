// Ambil form dan semua input berdasarkan id
const form = document.getElementById("formRegister");

const username = document.getElementById("username");
const password = document.getElementById("password");
const nama = document.getElementById("nama");
const tanggalLahir = document.getElementById("tanggalLahir");
const alamat = document.getElementById("alamat");
const telpon = document.getElementById("telpon");

// Fungsi bantu: tampilkan pesan error di bawah input
function tampilkanError(idError, pesan) {
  document.getElementById(idError).textContent = pesan;
}

// Fungsi validasi per input. Return true jika valid, false jika tidak.

function validasiUsername() {
  const nilai = username.value.trim();
  if (nilai === "") {
    tampilkanError("errorUsername", "Username tidak boleh kosong.");
    return false;
  }
  if (nilai.length < 3) {
    tampilkanError("errorUsername", "Username minimal 3 karakter.");
    return false;
  }
  tampilkanError("errorUsername", "");
  return true;
}

function validasiPassword() {
  const nilai = password.value;
  if (nilai === "") {
    tampilkanError("errorPassword", "Password tidak boleh kosong.");
    return false;
  }
  if (nilai.length < 8) {
    tampilkanError("errorPassword", "Password minimal 8 karakter.");
    return false;
  }
  tampilkanError("errorPassword", "");
  return true;
}

function validasiNama() {
  if (nama.value.trim() === "") {
    tampilkanError("errorNama", "Nama tidak boleh kosong.");
    return false;
  }
  tampilkanError("errorNama", "");
  return true;
}

function validasiTanggalLahir() {
  if (tanggalLahir.value === "") {
    tampilkanError("errorTanggalLahir", "Tanggal lahir tidak boleh kosong.");
    return false;
  }

  // Bandingkan tanggal yang dipilih dengan hari ini
  const dipilih = new Date(tanggalLahir.value);
  const hariIni = new Date();
  hariIni.setHours(0, 0, 0, 0); // abaikan jam, hanya bandingkan tanggal

  if (dipilih > hariIni) {
    tampilkanError("errorTanggalLahir", "Tanggal lahir tidak boleh di masa depan.");
    return false;
  }
  tampilkanError("errorTanggalLahir", "");
  return true;
}

function validasiAlamat() {
  if (alamat.value.trim() === "") {
    tampilkanError("errorAlamat", "Alamat tidak boleh kosong.");
    return false;
  }
  tampilkanError("errorAlamat", "");
  return true;
}

function validasiTelpon() {
  const nilai = telpon.value.trim();
  if (nilai === "") {
    tampilkanError("errorTelpon", "Nomor telpon tidak boleh kosong.");
    return false;
  }
  if (!nilai.startsWith("62")) {
    tampilkanError("errorTelpon", "Nomor telpon harus diawali 62.");
    return false;
  }
  tampilkanError("errorTelpon", "");
  return true;
}

// EVENT HANDLING

// 1) Saat form di-submit: cek semua input
form.addEventListener("submit", function (event) {
  // Jalankan semua validasi (disimpan dulu agar semua pesan error muncul sekaligus)
  const hasil = [
    validasiUsername(),
    validasiPassword(),
    validasiNama(),
    validasiTanggalLahir(),
    validasiAlamat(),
    validasiTelpon(),
  ];

  // Jika ada yang tidak valid, batalkan pengiriman form
  if (hasil.includes(false)) {
    event.preventDefault();
  }
  // Jika semua valid, form lanjut ke dashboard.html
});

// 2) Saat user mengetik/mengubah input: validasi langsung (real-time)
username.addEventListener("input", validasiUsername);
password.addEventListener("input", validasiPassword);
nama.addEventListener("input", validasiNama);
tanggalLahir.addEventListener("change", validasiTanggalLahir);
alamat.addEventListener("input", validasiAlamat);
telpon.addEventListener("input", validasiTelpon);
