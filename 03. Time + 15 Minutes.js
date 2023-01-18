function timePlus (input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    minutes += hours*60;
    minutes+=15
    hours = Math.floor(minutes/60);
    minutes=minutes%60;
   
    if(hours == 24)
    {
        hours = 0;
    }
    if(minutes <10)
    {
        console.log(`${hours}:0${minutes}`);
    }
    else
    {
        console.log(`${hours}:${minutes}`);
    }
    
}
timePlus (["1", "46"]);