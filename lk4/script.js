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
    if (nama === "" || email === "" || password === "" || gender === "" || gender === "-- Pilih --") {
        alert("Semua field wajib diisi!");
        return;
    }

    // validasi email sederhana //    
    if (!email.includes("@")) {
        alert("Email tidak valid!");
        return;
    }

    hasil.innerHTML = `
    <div style="margin-top: 20px; padding: 20px; background:#f4f7fb; border-left: 5px solid var(--primary-color, #6082B6); border-radius:8px; color: #2b3a4a; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);">
        <h3 style="color: var(--primary-color, #6082B6); margin-bottom: 15px;"><i class="fa-solid fa-circle-check"></i> Pendaftaran Berhasil!</h3>
        <p style="margin-bottom: 5px;"><strong style="display:inline-block; width: 110px;">Nama:</strong> ${nama}</p>
        <p style="margin-bottom: 5px;"><strong style="display:inline-block; width: 110px;">Email:</strong> ${email}</p>
        <p style="margin-bottom: 5px;"><strong style="display:inline-block; width: 110px;">Jenis Kelamin:</strong> ${gender === 'laki' ? 'Laki-laki' : 'Perempuan'}</p>
        <p style="margin-bottom: 5px;"><strong style="display:inline-block; width: 110px;">Alamat:</strong> ${alamat}</p>
    </div>
    `;

    alert("Pesan berhasil dikirim!");
    form.reset();
});
