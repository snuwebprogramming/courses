
// practice 1

const func1 = (n) => {
    let sum = 0;
    while(n > 0) {
        sum += n;
        n--;
    }

    return sum;
}

const func11 = n => n * (n + 1) / 2


// practice2

const func2 = (n) => {
    let results = [];
    while(n > 0) {
        let nextNumber;
        if(results.length <= 1) nextNumber = 1;
        else nextNumber = results[results.length - 1] + results[results.length - 2];
        results.push(nextNumber);
        n--;
    }

    return results;
    
}

// practice3

const func3 = (arr) => {
    const results = [];
    arr.forEach(e => {
        if(e % 2 === 0) results.push(e * 2 + 1);
        else results.push(Math.pow(e, 2));
    });
    
    return results;
}

const func31 = (arr) => arr.map(e => e % 2 === 0 ? e * 2 + 1 : Math.pow(e, 2));
