const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            card.classList.add('show');
        }

    });

});

const form = document.getElementById('surveyForm');

form.addEventListener('submit', function(e){

    e.preventDefault();

    const name = document.getElementById('name').value;

    alert(
        `Thank you ${name}! Your opinion has been registered successfully.`
    );

    form.reset();

});