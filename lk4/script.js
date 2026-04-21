const form = document.getElementById('formPendaftaran');
const hasil = document.getElementById('hasilPendaftaran');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.getElementById("gender").value;
    const alamat = document.getElementById("alamat").value;

    // validasi form //
    if (nama === "" || email === "" || password === "" || gender === "-- Pilih --") {
        alert("Semua field wajib diisi!");
        return;
    }

    // validasi email sederhana //    
    if (!email.includes("@")) {
        alert("Email tidak valid!");
        return;
    }

    hasil.innerHTML = `
    <div style="margin-top: 20px; padding: 15px; background:#f1f5f9; border-radius:10px;">
        <h3>Terima Kasih Telah Mengisi!</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Alamat:</strong> ${alamat}</p>
    </div>
    `;

    alert("Pesan berhasil dikirim!");
    form.reset();
});
