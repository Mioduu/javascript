// function message(info) {
//     alert(info)
// }

// message("First info")
// message("Second info")

// function add(number1, number2) {
//     return(number1 + number2)
// }

// console.log("Suma 5+4 = " + add(5,4))


// function decrease(number1, number2) {
//     return(number1 - number2)
// }

// document.writeln("Wynik z odejmowania 5-4 = " + decrease(5,4))

// function test() {
//     console.log(arguments)
// }

// test()
// test(1,2,3,4)
// test("Ala", "ma", "kota")


// function sum() {
//     let result = 0
//     for(let i = 0; i < arguments.length; i++) {
//         result += arguments[i]
//     }
//     return result
// }

// document.writeln(sum(1,2,3,4))

function superSum(...r) {
    document.writeln(r)
}

superSum(1,4)
superSum(1,2,3,4)
