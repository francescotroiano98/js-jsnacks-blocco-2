const player = {
    playerId : '',
    firstName : 'Librona',
    lastName: 'Giovanna',
    age: 21,
    appm : 0,
    pct3 : 0,
    blk:0,
    shots: 0,
 }
 
 player.appm = getRandomInt(0, 50);
 player.pct3 = getRandomInt(0, 100);
 player.blk = getRandomInt(0, 30);
 player.shots = getRandomInt(20, 100);
 
 player.playerId = generateRandomString(3, 'QWERTYUIOPASDFGHJKLZXCVBNM') + getRandomInt(0,9) + getRandomInt(0,9) + getRandomInt(0,9) ;
 
 console.log(player);
 
 function getRandomInt(minumNumber, maximumNumber){
    const randomNumber = Math.floor( Math.random() * ( maximumNumber - minumNumber +1) + minumNumber);
 
    return randomNumber;
 }
 
 function generateRandomString(length, allowedChars ) {
    let result = '';
    let counter = 0;
 
    while (counter < length) {
       result += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
       counter++;
    }
 
    return result;
 }
    