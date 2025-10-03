const text = "Ala ma kota"

if (text.indexOf("psa") !== -1) {
    console.log("Ala ma psa")
} else {
    console.log("Ala ma kota")
}

const text2 = text.slice(0,3)
console.log(`Text2: ${text2}`)

const text3 = text.slice(4)
console.log(`Text3: ${text3}`)

const text4 = text.slice(-4)
console.log(`Text4: ${text4}`)

const str = "The quick brown fox jumps over the lazy dog."

const words = str.split(' ')
console.log(`Words[3] = ${words[3]}`)
// Expected output "fox"

const chars = str.split('')
console.log(`Chars[8] = ${chars[8]}`)
// Expected output "k"

console.log(text.replace("kota", "psa"))
// Replace zamienia pierwsze wystąpienie a replaceAll wszystkie

// UNICODE

console.log("\u00BC")
console.log("\u{BC}")
console.log("\xBC")