let audios = [
    {caminho:'Iframe Bruto de Raça - Antony & Gabriel, João Nelore & Texano part. Marco Brasil (Clipe Oficial) [pbE0Zxenmao] (2).mp3', legenda:'Matuto de verdade'},
    {caminho:'Iframe Caminhoneta Alta - Dan Lellis, Caju, Cintia Souza & Junim Dantes ft. Rincon 061 (Oficial Videoclipe) [qdJd5YrCdrw].mp3', legenda:'Arash'},
    {caminho:'Iframe Fazendinha Sessions #4_ Ryan SP, Mari Fernandez, Us Agroboy, Zé Felipe, LP, João Gomes, Mayck & Lyan [DFKiusBlu7c].mp3', legenda:'Paula Fernandes'},
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
