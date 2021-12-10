// All of the solutions to multiple pointers in trying to find 
// a match in an array
let arr = [-4, -4, -4, -2, -1, 0, 0, 0, 1, 2, 3, 3, 5]


function sumZero() {
    console.log(arr.length)
    for (let i in arr) {
        for (let x = 1; x < arr.length; x++){
            console.log(arr[i], arr[x])
            if (arr[i] - arr[x] === 0) {
                return [arr[i], arr[x]]
            }
        }
    }
}

function sumZeroRef() {
    let left = 0
    let right = arr.length -1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}

function countUniqueValues() {
    let left = 0
    let right = 1
    let outArr = []
    while(right < arr.length+1) {
        if (arr[left] !== arr[right]) {
            outArr.push(arr[left])
            left = right;
            // console.log(outArr)
        } else {
            right++;
        }
    }   
    return outArr.length
}

export {sumZero, sumZeroRef, countUniqueValues};