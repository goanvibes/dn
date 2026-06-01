document.getElementById('whatsapp-booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Scrape data from form
    const name = document.getElementById('b-name').value;
    const date = document.getElementById('b-date').value;
    const event = document.getElementById('b-event').value;
    const guests = document.getElementById('b-guests').value;
    
    // Host's WhatsApp Number (Replace with Dove Nest's actual Goan business number)
    const phone = "919822182917"; 
    
    // Construct formatting string (Uses Markdown natively supported by WhatsApp)
    const text = `*New Booking Inquiry - Dove Nest Goa* 🕊️\n\n` +
                 `Hi there! I am interested in booking the venue.\n\n` +
                 `👤 *Name:* ${name}\n` +
                 `📅 *Date Requested:* ${date}\n` +
                 `🎉 *Event Type:* ${event}\n` +
                 `👥 *Guest Count:* ${guests}\n\n` +
                 `Please let me know if this date is available and share pricing details!`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`;
    
    // Open in a new tab securely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});
