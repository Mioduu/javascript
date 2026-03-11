// Utworzenie cookie z jednodniowym dniem ważności
let date = new Date()
let tommorow = new Date(date.getTime() + 24*60*60*1000)
date = tommorow.toUTCString()
document.cookie = `user=John;expires=${date}`

// Sposób 1
function getCookie(name) {
    if(document.cookie !== "") {
        const cookies = document.cookie.split(/; */)
        for(let cookie of cookies) {
            const [cookieName, cookieVal] = cookie.split("=")
            if(cookieName === decodeURIComponent(name)) {
                return decodeURIComponent(cookieVal)
            } 
        }
    }
    return undefined
}
console.log(getCookie("user"))

// Sposób 2
document.cookie = "test2=World; SameSite=None; Secure"

const allCookies = document.cookie.split("; ")
const cookieString = allCookies.find( (row) => row.startsWith("test2="))
if(cookieString) {
    var ciacho = cookieString.split("=")[1]
} else {
    var ciacho = undefined
}

console.log(cookieString)