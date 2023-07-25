const form = document.getElementById("paymentForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const fullName = document.getElementById("fullName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;
  const paymentDate = document.getElementById("paymentDate").value;
  const proofOfPayment = document.getElementById("proofOfPayment").value;

  // You can now do something with the form values, like sending them to the server for processing
  console.log("Nama Lengkap:", fullName);
  console.log("Nomor HP:", phoneNumber);
  console.log("Email:", email);
  console.log("Tanggal Transfer:", paymentDate);
  console.log("Bukti Transfer/Foto:", proofOfPayment);

  // Reset the form after submission (optional)
  form.reset();
});
