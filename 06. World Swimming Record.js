function wordlSwimmingRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let secondsPerMeter = Number(input[2]);
    let delay = Math.floor(distance/15);
    let addedTime = delay*12.50;
    let ivanTime = distance*secondsPerMeter+addedTime;
    if (ivanTime < record) {    
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`);
    }
    else if (ivanTime >= record) {
        let difference = ivanTime-record
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
}
wordlSwimmingRecord(["10464", "1500", "20"]);