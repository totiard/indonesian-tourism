document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(this);
    var hotelData = formData.get("hotel").split("|");
    var hotelName = hotelData[0];
    var price = parseFloat(hotelData[1]);
    var checkInDate = new Date(formData.get("checkInDate"));
    var checkOutDate = new Date(formData.get("checkOutDate"));
    var roomCount = parseInt(formData.get("roomCount"));
    var name = formData.get("name");
    var phone = formData.get("phone");
    var email = formData.get("email");

    // Validasi tanggal check-out tidak lebih kecil dari check-in
    if (checkOutDate <= checkInDate) {
      alert("Tanggal Check-out harus lebih besar dari Tanggal Check-in");
      return;
    }

    // Hitung selisih hari
    var timeDifference = checkOutDate.getTime() - checkInDate.getTime();
    var nights = Math.ceil(timeDifference / (1000 * 3600 * 24));

    // Hitung total biaya
    var totalPrice = price * nights * roomCount;

    var bookingSummary = `
                <h2>Detail Pemesanan</h2>
                <p><strong>Hotel:</strong> ${hotelName}</p>
                <p><strong>Tanggal Check-in:</strong> ${checkInDate.toLocaleDateString(
                  "id-ID"
                )}</p>
                <p><strong>Tanggal Check-out:</strong> ${checkOutDate.toLocaleDateString(
                  "id-ID"
                )}</p>
                <p><strong>Jumlah Kamar:</strong> ${roomCount}</p>
                <p><strong>Total Biaya:</strong> Rp ${totalPrice.toLocaleString(
                  "id-ID"
                )}</p>
                <p><strong>Nama:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>No Telepon:</strong> ${phone}</p>
            `;

    document.getElementById("booking-details").innerHTML = bookingSummary;
    document.getElementById("booking-details").style.display = "block";

    // Menampilkan QRIS
    var qrisImage = document.getElementById("qrisImage");
    qrisImage.src = "assets/img/qris.jpg"; // Ganti dengan sumber gambar QRIS sesuai kebutuhan
    document.querySelector(".qris").style.display = "block";
  });
