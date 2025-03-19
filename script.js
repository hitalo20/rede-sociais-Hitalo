let audios = [
    {caminho:'brutodeverdade.mp3', legenda:'brutodeverdade.mp3'},
    {caminho:'camionetealta.mp3', legenda:'camionetealta.mp3'},
    {caminho:'fazendinha.mp3', legenda:'fazendinha.mp3'},
    {caminho:'Hayit.mp3', legenda:'Hayit'},
    {caminho:'Helena.mp3', legenda:'Helena'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'titanic.mp3', legenda:'Titanic'},
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
