const randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(randomNumber(6, 2)) 