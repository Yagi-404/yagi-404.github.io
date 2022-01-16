const githubBtn = document.querySelector('#github');
const discordBtn = document.querySelector('#discord');

githubBtn.addEventListener('click', () => {
    window.location.replace('https://github.com/Yagi-404');
});

discordBtn.addEventListener('click', () => {
    window.location.replace('https://discord.gg/SRbUfZ2v6m');
});

const txtAnimate = document.querySelector('h1');

new Typewriter(txtAnimate, {
    // deleteSpeed: 20
})
.typeString('Hello,')
.pauseFor(300)
.typeString(' I\'m Yagi-404')
.start();

const whoAmIAnim = document.querySelector('.who-am-i');

new Typewriter(whoAmIAnim, {
    deleteSpeed: 20
})
.pauseFor(3500)
.typeString('Who am i!')
.pauseFor(150)
.deleteChars(3)
.typeString(' I ?')
.start();

const btn = document.querySelector('input');

btn.addEventListener('click', () => {
    const whatILearned = document.querySelector('.what-i-learned');

    window.scrollTo();
    
    new Typewriter(whatILearned, {
        deleteSpeed: 20
    })
    .pauseFor(150)
    .typeString('Wich languages I laerned ?')
    .deleteChars(9)
    .typeString('learned ?')
    .start();
});