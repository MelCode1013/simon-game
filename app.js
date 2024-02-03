
let gamePattern = []

const buttonColors = ["red", "blue", "green", "yellow"]


const randomChosenColorF = () => {
    const randomNum = Math.trunc(Math.random() * 4)
    console.log(randomNum)
    const randomChosenColor = buttonColors[randomNum]
    return randomChosenColor
}


const nextSequence = () => {
    let colorToPush = randomChosenColorF()
    return gamePattern.push(colorToPush)
}

randomChosenColorF()


$(`.red`).on('click', () => {
    if (randomChosenColorF() == buttonColors[0]) {
        $('.red').fadeOut().fadeIn()
        let audio = new Audio(`./sounds/red.mp3`)
        audio.play()
    }
    console.log($(`button.red`))
})

$(`.blue`).on('click', () => {
    if (randomChosenColorF() == buttonColors[1]) {
        $('.blue').fadeOut().fadeIn()
        let audio = new Audio(`./sounds/blue.mp3`)
        audio.play()
    }
    console.log($(`button.blue`))
})

$(`.green`).on('click', () => {
    if (randomChosenColorF() == buttonColors[2]) {
        $('.green').fadeOut().fadeIn()
        let audio = new Audio(`./sounds/green.mp3`)
        audio.play()
    }
    console.log($(`button.green`))
})

$(`.yellow`).on('click', () => {
    if (randomChosenColorF() == buttonColors[3]) {
        $('.yellow').fadeOut().fadeIn()
        let audio = new Audio(`./sounds/yellow.mp3`)
        audio.play()
    }
    console.log($(`button.yellow`))
})


