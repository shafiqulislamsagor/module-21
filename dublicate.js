const biriyaniName = ['abul','babul','cabul','abul','sabul','babul','dabul','babul','cabul','sabul'];


function dublicate(list){
    let check = [];
    for(let i of list){
        if(check.includes(i) === false){
            check.push(i)
        }
    }
    return check
}

let single = dublicate(biriyaniName);
console.log(single)
