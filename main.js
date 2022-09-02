var title = document.getElementById('title');

var typewriter = new Typewriter(title, {
    loop: false
});

typewriter.typeString('Alchimia.')
    // .pauseFor(2500)
    // .deleteAll()
    // .typeString('Strings can be removed')
    // .pauseFor(2500)
    // .deleteChars(7)
    // .typeString('<strong>altered!</strong>')
    // .pauseFor(2500)
    .start();