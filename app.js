// http://127.0.0.1:5500/

const githubBtn = document.querySelector('#github');
const discordBtn = document.querySelector('#discord');

githubBtn.addEventListener('click', () => {
    window.location.replace('https://github.com/Yagi-404');
});

discordBtn.addEventListener('click', () => {
    window.location.replace('https://discord.gg/SRbUfZ2v6m');
})