document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const certificationCards = document.querySelectorAll('.certification-card');

    certificationCards.forEach(card => {
        const pdfPreview = document.createElement('div');
        pdfPreview.className = 'pdf-preview';
        const iframe = document.createElement('iframe');
        iframe.src = card.getAttribute('data-pdf');
        pdfPreview.appendChild(iframe);
        card.appendChild(pdfPreview);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const certificationCards = document.querySelectorAll('.certification-card');

    certificationCards.forEach(card => {
        const pdfPreview = document.createElement('div');
        pdfPreview.className = 'pdf-preview';
        const iframe = document.createElement('iframe');
        iframe.src = card.getAttribute('data-pdf');
        pdfPreview.appendChild(iframe);
        card.appendChild(pdfPreview);

        const pngPreview = document.createElement('div');
        pngPreview.className = 'png-preview';
        const img = document.createElement('img');
        img.src = card.getAttribute('data-image');
        pngPreview.appendChild(img);
        card.appendChild(pngPreview);
    });
});
