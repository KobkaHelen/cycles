
for (let i = 0; i < 3; i++) {
    console.log(i)

}

const integers = [3, 4, 7, 5, 2, 6, 10, 8]
function sum(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i]

    }
    return result
}
console.log(42, sum(integers))


function min(arr) {
    let result = arr[0]

    for (let i = 1; i < arr.length; i++) {
        //if (result >  arr[i]) {
        if (arr[i] < result) {
            result = arr[i]
        }
    }
    return result
}
console.log(2, min(integers))


const arr = [4, 5, 7]
function max(arr) {
    let result = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (result < arr[i]) {
            result = arr[i]
        }
    }
    return result
}
console.log(max(arr))

//сумма всех четных чисел
const arr1 = [18, 22, 16, 4, 7]
function sumEvens(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result = result + arr[i]
        }
    }
    return result
}
console.log(sumEvens(arr1))



