function lunchBreak(input) {
    let name = (input[0]);
    let episode = Number(input[1]);
    let breakTime = Number(input[2]);

    let timeLeft = breakTime * 5 / 8;

    if (timeLeft >= episode) {
        let freetime = timeLeft - episode;
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(freetime)} minutes free time.`);
    }
    else {
        let neededTime = episode - timeLeft;
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(neededTime)} more minutes.`);
    }
}
lunchBreak(["Teen Wolf", "48", "60"]);