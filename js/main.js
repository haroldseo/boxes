function sayHello(name) {
    return "Hi " + (name || "anonymous person")
}


function setH1(string) {
    var h1 = document.querySelector('h1')
    h1.innerText = string
}


function showGreeting() {
    setH1(sayHello("Hello"))
}

var button = document.querySelector('button')
button.addEventListener('click', showGreeting)