// function writeCards(names, event) {
//     const thankYouMsgs = new Array;
//     for (let i = 0; i < names.length; i++) {
//         thankYouMsgs.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
//     }
//     return thankYouMsgs;
// }

function writeCards(names, event) {
    const thankYouMsgs = new Array;
    let i = 0;
    while (i < names.length) {
        thankYouMsgs.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        i++;
    }
    return thankYouMsgs;
}

function countdown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}