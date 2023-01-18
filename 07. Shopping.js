function shopping(input) {
    let budget = Number(input[0]);
    let videoCard = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let sumVideoCards = videoCard * 250;
    let priceProcessors = sumVideoCards * 0.35 * processors;
    let priceRam = sumVideoCards * 0.10 * ram;

    let sum = sumVideoCards + priceProcessors + priceRam;
    if (videoCard > processors) {
        sum -= sum * 0.15;
    }
    if (sum <= budget) {
        let difference = budget - sum;
        console.log(`You have ${difference.toFixed(2)} leva left!`);
    }
    else {
        let difference = sum - budget;
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`);
    }
}
shopping(["900", "2", "1", "3"]);