document.addEventListener('DOMContentLoaded'), function() {
    const heroSec = document.querySelector('.hero');
    const altHero = heroSec.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < altHero) {
            console.log("exibe")
        }
    })

    function ocultacaoHeader() {
        const header = document.querySelector('header');
        header.classList.add('--is-hidden')
    }
}