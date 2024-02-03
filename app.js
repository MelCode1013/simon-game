$('button').on('click', () => {
    console.log(gamePattern)
})

let gamePattern = []

const buttonColors = ["red", "blue", "green", "yellow"]

const nextSequence = () => {
    const randomNum = Math.trunc(Math.random() * 3) + 1
    const randomChosenColor = buttonColors[randomNum]
    console.log(randomChosenColor)
    return gamePattern.push(randomChosenColor)
}



