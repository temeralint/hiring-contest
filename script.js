function countPairs(numbers, k) {
    let arr = []
    let unique = [...new Set(numbers)]
    for (let i = 0; i < unique.length; i++) {
        for (let j = i; j < unique.length; j++) {
            if (unique[i] + k == unique[j]) {
                arr.push([unique[i], unique[j]])
                break
            }
        }
    }
    return arr.length
}

console.log(countPairs([ 1, 2, 3, 4, 5, 6 ], 2))


function isPangram(arr) {
    const answerArr = []
    for (let i = 0; i < arr.length; i++) {
        const strSize = new Set(arr[i].toLowerCase().replace(/\s/g, '')).size
        answerArr.push(strSize === 26 ? 1 : 0)
    }
    return answerArr.join('')
}

console.log(isPangram(['Jock nymphs waqf drug vex blitz', 'ne pangrama tochno']))