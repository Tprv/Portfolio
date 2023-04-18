const txtAnim = document.querySelector("h1");

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed:40
})
.changeDelay(40)
.typeString('Moi c\'est <span style="color: #4169E1"> Tom !</span><br>')
.pauseFor(300)
.typeString('<strong> <br>Developpeur WEB,</strong>')
.pauseFor(1000)
.typeString('<span style="color: #4169E1"> HTML</span> !')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color: #4169E1"> CSS</span> !')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color: #4169E1"> <strong>Débutant</span> !</strong>')
.pauseFor(400)
.deleteChars(10)
.pauseFor(1000)
.start()