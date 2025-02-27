// break keywork
// continue keywork


//if i want to find only 4
for(let i = 1; i <= 10; i++){
    if(i === 4){
        console.log(`i find ${i}`)
        break;   
    }
    console.log(i)
}
 


// continue;
// if i don't want to print 4
for (let j = 1; j <= 10; j++){
    if (j === 4){
        continue;
    }
    console.log(j);
}