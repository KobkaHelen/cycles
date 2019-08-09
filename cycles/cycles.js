let i = 0
while (i < 3) {
    console.log(i)
    i++
}

const integers = [3, 4, 7, 5, 2, 6, 10, 8]
function sum(arr) {
    let result = 0
    let i = 0
    while (i < arr.length) {
        result = result + arr[i]
        i++
    }
    return result
}
console.log(42, sum(integers))


function min(arr) {
    let result = arr[0]
    let i = 1
    while (i < arr.length) {
        //if (result >  arr[i]) {
        if (arr[i] < result) {
            result = arr[i]

        }
        i++
    }
    return result
}
console.log(2, min(integers))


const arr = [4, 5, 7]
function max(arr) {
    let result = arr[0]
    let i = 1
    while (i < arr.length) {
        //if (result >  arr[i]) {
        if (result < arr[i]) {
            result = arr[i]

        }
        i++
    }
    return result
}
console.log(max(arr))


