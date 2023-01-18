function godzillaVsKingkong(input) {
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let clothing = Number(input[2]);
    let clothes = people * clothing;
    let decor = budget * 0.10;
    if (people >= 150) {
        clothes = clothes * 0.90;
    }
    let expenses = decor + clothes;
    if (expenses <= budget) {
        let difference = budget - expenses;
        console.log("Action!");
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
    }
    else if (expenses > budget) {
        let difference = expenses - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
    }
}
godzillaVsKingkong(["15437.62", "186", "57.99"]);