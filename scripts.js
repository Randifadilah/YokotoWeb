function buyProduct(productName) {
    const phoneNumber = "+6283194671693"; // Ganti dengan nomor WhatsApp yang Anda inginkan
    const message = `Aku mau Beli ${productName} ya kak`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^+\d]/g, '')}?text=${encodeURIComponent(message)}`;
    
    // Redirect ke WhatsApp
    window.location.href = whatsappUrl;
}