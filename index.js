const getcolor = () => {
    const randomnum = Math.floor(Math.random() * 16777215);
    const randomcolor = "#" + randomnum.toString(16)
    document.body.style.backgroundColor = randomcolor;
    document.getElementById("color-code").innerHTML = randomcolor;
    
    navigator.clipboard.writeText(randomcolor)
}

document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

getcolor();