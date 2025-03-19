let audios = [
    {caminho:'brutodeverdade.mp3', legenda:'brutodeverdade.mp3'},
    {caminho:'camionetealta.mp3', legenda:'camionetealta.mp3'},
    {caminho:'fazendinha.mp3', legenda:'fazendinha.mp3'},
    {caminho:'meuchapeu.mp3', legenda:'meuchapeu.mp3'},
    {caminho:'partiurodeio.mp3', legenda:'partiurodeio.mp3'},
    {caminho:'soyboiaderio.mp3', legenda:'soyboiadeiro.mp3'},
    {caminho:'tantão.mp3', legenda:'tantão.mp3'},
    {caminho:'sextou.mp3', legenda:'sextou.mp3'},
    {caminho:'vaqueiro.mp3', legenda:'vaqueiro.mp3'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});
