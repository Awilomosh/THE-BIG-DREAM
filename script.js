// Tailwind script already included via CDN

document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('span');
            
            const isOpen = !answer.classList.contains('hidden');
            
            // Close all others
            faqItems.forEach(other => {
                const otherAnswer = other.querySelector('.faq-answer');
                const otherIcon = other.querySelector('span');
                otherAnswer.classList.add('hidden');
                otherIcon.textContent = '+';
                other.classList.remove('active');
            });
            
            if (!isOpen) {
                answer.classList.remove('hidden');
                icon.textContent = '−';
                item.classList.add('active');
            }
        });
    });
});