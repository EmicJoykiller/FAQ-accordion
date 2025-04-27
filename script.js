const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const question = item.querySelector('.question');
    const icon = question.querySelector('img');
    const answer = item.querySelector('.answer');

    question.addEventListener('click', ()=>{
        item.classList.toggle('active');

        if (item.classList.contains('active')) {
            icon.src = 'assets/images/icon-minus.svg';
            answer.style.display = 'block';
        } else {
            icon.src = 'assets/images/icon-plus.svg';
            answer.style.display = 'none';
        }
    });
});