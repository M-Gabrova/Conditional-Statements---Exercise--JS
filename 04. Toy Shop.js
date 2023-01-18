function toyShop(input) {
    let trip = Number(input[0]);
    let toy1 = Number(input[1]);
    let toy2 = Number(input[2]);
    let toy3 = Number(input[3]);
    let toy4 = Number(input[4]);
    let toy5 = Number(input[5]);
    sum = toy1 + toy2 + toy3 + toy4 + toy5;
    sumPrice = toy1 * 2.6 + toy2 * 3 + toy3 * 4.1 + toy4 * 8.2 + toy5 * 2;
    if (sum >= 50) {
        sumPrice = sumPrice - (sumPrice * 0.25);
    }
    income = sumPrice * 0.90;

    if (income >= trip) {
        let moneyLeft = income - trip;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    }
    else {
        let moneyNeeded = trip - income;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);