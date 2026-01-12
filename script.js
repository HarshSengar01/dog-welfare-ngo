// ================= QR SCANNER USING CAMERA =================

const video = document.getElementById("video");
const resultText = document.getElementById("qr-result");

// Access device camera
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        resultText.textContent = "Camera access denied.";
    });

// NOTE:
// Actual QR decoding requires a library like jsQR.
// This placeholder shows camera access only.
// You can integrate jsQR later for real scanning.
