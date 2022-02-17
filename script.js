let products = [
    {
        name: "Cupcake",
        price: parseInt(50),
        image: "https://cdn.discordapp.com/attachments/860051691888836648/943911677471121508/image-removebg-preview.png"
    },
    {
        name: "Chocolate",
        price: parseInt(1000),
        image: "https://images-ext-1.discordapp.net/external/VTwYnw_aRziccBfKNtCtJafTWOrWPst5EVSL91IHt1g/https/o.remove.bg/downloads/99ce2ee2-dc3a-4dd9-a723-b71df284efc2/image-removebg-preview.png"
    }
]

let image = document.getElementById('imgxD')

let i = 0;

let bal = 1000;

function next() {
    i = i + 1
    image.src = `${products[i].image}`

    document.getElementById('price').innerText = `Price: ${products[i].price}$`
    document.getElementById('name').innerText = `${products[i].name}`
}
function prev() {
    i = i - 1
    image.src = `${products[i].image}`

    document.getElementById('price').innerText = `Price: ${products[i].price}$`
    document.getElementById('name').innerText = `${products[i].name}`
}

image.src = `${products[i].image}`

document.getElementById('price').innerText = `Price: ${products[i].price}$`
document.getElementById('name').innerText = `${products[i].name}`

function func() {
    if (bal < products[i].price) {
        return alert(`You dont have such money my little poor. Bal-> ${bal}`)
    }
    else
    {
        bal = bal - products[i].price
        return alert(`you bought ${products[i].name}! currBal-> ${bal}`)
    }
}