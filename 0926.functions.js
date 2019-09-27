const func1 = (a, b) => {
    return a % 2;
}
// 본문이 한 줄인 함수는 return 생략 가능

const func2 = (a, b) => (
    a % 2
)


// 위함수에서 a % 2 를 감싸는 '()' reduntant하므로 생략가능
const func3 = (a, b) => a % 2



const func4 = (a) => {
    return a * 2;
}

// input paramter가 하나인 함수는 input을 감싸는 '()' 생략 가능
const func5 = a => {
    return a * 2;
}

// 마찬가지로 {} 생략, return 생략 가능
const func6 = a => a * 2

