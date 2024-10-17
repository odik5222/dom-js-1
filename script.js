const buttons = document.querySelectorAll('.changeImageBtn');
const img = document.getElementById('1');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        img.src = button.getAttribute('data-img');
    });
});
