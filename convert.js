// function inchToFeet(inch){
//     const feetFraction = inch / 12;
//     const feetNumber = parseInt(feetFraction);
//     const inchRemaining = inch % 12;
//     const result = feetNumber + ' ft '+ inchRemaining + ' inch';
//     return result;
// }

// const x = 13 ;

// const xheight = inchToFeet(x);

// console.log(xheight)

function feetToKilo(feet){
    const kiloFaction = feet / 3280.84;
    const kiloNumber = parseInt(kiloFaction);
    const feetRemaining = feet % 3280.84;
    const feetNumber = parseInt(feetRemaining)
    const result = kiloNumber + " kilo " + feetNumber + ' feet'
    return result;
}

const x = 3281;

const sroad = feetToKilo(x);

console.log(sroad)