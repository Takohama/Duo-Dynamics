// Menangkap semua klik pada tombol booking
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Fitur Smooth Scrolling untuk Menu Navigasi & Tombol Beranda
    document.querySelectorAll('nav a, .hero-buttons a, a[href="#price"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetHref = this.getAttribute('href');
            
            // Jika link mengarah ke id internal (diawali #)
            if (targetHref && targetHref.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetHref);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

});

// 2. Fungsi Global untuk Tombol WhatsApp Otomatis (Dipanggil saat kartu harga diklik)
function bookingWhatsApp(serviceName) {
    const phoneNumber = '6281260502006'; // Nomor WhatsApp Duo Dynamics
    const message = `Halo Duo-Dynamics, saya ingin memesan layanan *${serviceName}* dari website. Mohon infonya ya!`;
    const encodedMessage = encodeURIComponent(message);
    
    // Membuka tab WhatsApp baru dengan pesan otomatis
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}
