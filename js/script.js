// Menangkap semua klik pada tombol booking
document.querySelectorAll('.booking-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Ambil nama layanan dari atribut data-service
        const serviceName = this.getAttribute('data-service') || 'Layanan Duo Dynamics';
        
        // Nomor WhatsApp tujuan (ganti dengan nomor bisnismu, awali dengan kode negara tanpa tanda +)
        const phoneNumber = '6281260502006'; 
        
        // Format pesan otomatis
        const message = `Halo Duo-Dynamics, saya ingin memesan layanan *${serviceName}*. Mohon infonya lebih lanjut ya!`;
        
        // Encode pesan agar aman dibaca URL WhatsApp
        const encodedMessage = encodeURIComponent(message);
        
        // Buka link WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    });
});
