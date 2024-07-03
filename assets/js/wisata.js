document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('transaksiForm');
    const tempatWisata = document.getElementById('tempatWisata');
    const jumlahPengunjung = document.getElementById('jumlahPengunjung');
    const totalHarga = document.getElementById('totalHarga');

    // Daftar harga tiket per tempat wisata
    const hargaTiket = {
        'pantai-tanah-lot': 100000,   // Harga tiket Pantai Tanah Lot
        'gunung-bromo': 150000,       // Harga tiket Gunung Bromo
        'candi-borobudur': 75000      // Harga tiket Candi Borobudur
    };

    // Event listener untuk form submit
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form untuk melakukan submit default

        // Validasi form
        if (validateForm()) {
            // Hitung total harga
            const selectedWisata = tempatWisata.value;
            const pengunjung = parseInt(jumlahPengunjung.value);
            const hargaPerOrang = hargaTiket[selectedWisata];
            const total = pengunjung * hargaPerOrang;

            // Tampilkan total harga
            totalHarga.value = total;

            // Simulasi proses pemesanan, bisa diganti dengan AJAX request ke server
            setTimeout(function() {
                // Ambil nilai tanggal kunjungan dari input
                const tanggalKunjungan = document.getElementById('tanggalKunjungan').value.trim();
                // Ambil nama tempat wisata tanpa harga
                const namaTempatWisata = tempatWisata.options[tempatWisata.selectedIndex].text.split(' - ')[0];
                // Buat pesan alert dengan rincian pemesanan
                const alertMessage = `Pemesanan tiket untuk berkunjung di Wisata ${namaTempatWisata} berhasil!\n\n== RINCIAN PEMESANAN ==\nTempat Wisata: ${namaTempatWisata}\nTanggal Kunjungan: ${tanggalKunjungan}\nJumlah Pengunjung: ${pengunjung}\nTotal yang harus dibayar: Rp ${total.toLocaleString()}`;

                alert(alertMessage);
                form.reset();
                totalHarga.value = '';
            }, 1000); // Waktu simulasi pemesanan, di sini 1000ms (1 detik)
        }
    });

    // Fungsi untuk validasi form
    function validateForm() {
        const selectedWisata = tempatWisata.value;
        const tanggalKunjungan = document.getElementById('tanggalKunjungan').value.trim();
        const pengunjung = jumlahPengunjung.value.trim();

        if (selectedWisata === '') {
            alert('Silakan pilih tempat wisata terlebih dahulu');
            return false;
        }

        if (tanggalKunjungan === '') {
            alert('Silakan pilih tanggal kunjungan');
            return false;
        }

        if (pengunjung === '' || parseInt(pengunjung) <= 0) {
            alert('Silakan isi jumlah pengunjung dengan benar');
            return false;
        }

        return true;
    }
});
