var dataobj = [{
        // 1st row

        image: "https://www.jcrew.com/s7-img-facade/AK726_GR7919_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        name: "BEST SELLER",
        info: "4' stretch chino short ",
        price: "123456",
        actualprice: "INR 2,310",
        off: "(50%)",
        colors: "9 colors"
    }, {
        image: "https://www.jcrew.com/s7-img-facade/J1785_RD5753?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=420&hei=420",
        name: "ONLY A FEW LEFT",
        info: "New vintage cotton crewneck T-shirt",
        price: "INR 8,676",
        actualprice: "INR 4,307",
        off: "(50% Off)",
        colors: "9 colors"
    }, {
        image: "https://www.jcrew.com/s7-img-facade/AH247_BL7547?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=420&hei=420",
        name: "ONLY A FEW LEFT",
        info: "Magic Rinse crewneck sweatshirt",
        price: "INR 8,676",
        actualprice: "INR 4,307",
        off: "(50% Off)",
        colors: "9 colors"
    }, {
        image: "https://www.jcrew.com/s7-img-facade/AC467_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        name: "NEW COLOR",
        info: "Pull-on slip skirt",
        price: "",
        actualprice: "INR 2,310",
        off: "",
        colors: "7 colors"
    },  {
        image: "https://www.jcrew.com/s7-img-facade/BF457_NA7095?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        name: "",
        info: "Sherpa-lined puffer jacket with PrimaLoft*",
        price: "INR 30,861",
        actualprice: "INR 21,804",
        off: "(30% off)",
        colors: "2 colors"
    }, {
        image: "https://www.jcrew.com/s7-img-facade/AY442_PP1827?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=420&hei=420",
        name: "ONLY A FEW LEFT",
        info: "Magic Rinse crewneck sweatshirt",
        price: "INR 8,676",
        actualprice: "INR 4,307",
        off: "(50% Off)",
        colors: "9 colors"
    }, {
        image: "https://www.jcrew.com/s7-img-facade/J5488_GR6913?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        name: "",
        info: "Sherpa-lined puffer jacket with PrimaLoft*",
        price: "INR 30,861",
        actualprice: "INR 21,804",
        off: "(30% off)",
        colors: "2 colors"
    }, {
        image: "https://www.jcrew.com/s7-img-facade/BD162_BL6691?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
         name: "",
        info: "Sherpa-lined puffer jacket with PrimaLoft*",
        price: "INR 30,861",
        actualprice: "INR 5,790",
        off: "(24% Off)",
        colors: ""
    },  {
        image: "https://www.jcrew.com/s7-img-facade/AW209_DM5226?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        name: "TOP RATED",
        info: "Classic-fit chambrat shirt",
        price: "",
        actualprice: "INR 11,173",
        off: "classic,Pitite,Tall",
        colors: ""
    }, {
        image: "https://www.jcrew.com/s7-img-facade/AW206_DM5229?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        name: "TOP-RATED",
        info: "Slim-fit chambray shirt",
        price: "",
        actualprice: "INR 11,173",
        off: "Classic,Pitite,Tall",
        colors: ""
    }, {
        image: "https://www.jcrew.com/s7-img-facade/AW239_WA9148?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        name: "",
        info: "slim-fut stretch cotton poplin shirt in stripe",
        price: "",
        actualprice: "INR 9,924",
        off: "Classic,Petite,Tall",
        colors: "4 colors"
    }, {
        image: "https://www.jcrew.com/s7-img-facade/BA361_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        name: "BEST SELLER",
        info: "Polartec fleece half-zip pillover",
        price: "INR 17,227",
        actualprice: "INR 8,302",
        off: "(52% Off)",
        colors: "2 colors"
    },
    {
        image: "https://www.jcrew.com/s7-img-facade/BC108_BL8133?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        name: "BEST SELLER",
        info: "Ruched-shouldet-one-shoulder one-piece",
        price: "",
        actualprice: "INR 14,730",
        off: "Classic,Long torso",
        colors: "4 colors"
    }
];

dataobj.map(function(elem) {
    var mainDiv = document.createElement("div");

    var img = document.createElement("img");
    img.setAttribute("src", elem.image);
    img.style.height = "350px";
    img.style.width = "400px";


    var h4 = document.createElement("h4");
    h4.textContent = elem.name;

    var p = document.createElement("p");
    p.textContent = elem.info;

    var INR = document.createElement("INR");
    INR.textContent = elem.price;

    var Actprice = document.createElement("Actprice");
    Actprice.textContent = elem.actualprice;

    var offer = document.createElement("offer");
    offer.textContent = elem.off;

    var color = document.createElement("color");
    color.textContent = elem.colors;


    mainDiv.append(img, h4, p, INR, Actprice, offer, color);
    document.getElementById("rightside").append(mainDiv);


});
//on click function

//         add.addEventListener("click", function() {
//             displaycart(elem)
//             displayPrice(cartArr)
//         })
//         divadd.append(pglu, pcal, add)
//         div1.append(image, h5, p1, divadd)
//         document.querySelector("#womendata").append(div1)
//     })
// }

// function sortProducts() {
//     var sort = document.querySelector("#sort").value
//     if (sort == "low") {
//         dataObj.sort(function(a, b) {
//             return a.price - b.price
//         })
//     }
//     if (sort == "high") {
//         dataObj.sort(function(a, b) {
//             return b.price - a.price
//         })
//     }
//     displayProduct(dataObj)
// }

// function displaycart(elem) {
//     var cartObj = {
//         image: elem.image,
//         title: elem.name,
//         price: elem.price
//     }
//     cartArr.push(cartObj)
//     localStorage.setItem("cartPage", JSON.stringify(cartArr))
//     displayCartpage(cartArr)
// }

// function displayCartpage(cartArr) {
//     document.querySelector("#cartbox").textContent = ""
//     cartArr.map(function(el, index) {


// //add item
// function addItem(index) {
//     cartArr.push(cartArr[index])
//     localStorage.setItem("cartPage", JSON.stringify(cartArr))
//     displayCartpage(cartArr)
//     displayPrice(cartArr)
// }

// function removeItem(index) {
//     cartArr.splice(index, 1)
//     localStorage.setItem("cartPage", JSON.stringify(cartArr))
//     displayCartpage(cartArr)
//     displayPrice(cartArr)
// }

// //price

// var price1 = JSON.parse(localStorage.getItem("pricePage")) || 0
// displayPrice(cartArr)

// document.querySelector("#clear").addEventListener("click", clearItems)

// function clearItems() {
//     localStorage.clear()
//     cartArr = []
//     localStorage.setItem("cartPage", JSON.stringify(cartArr))
//     localStorage.setItem("pricePage", JSON.stringify(price1))
//     displayCartpage(cartArr)
//     displayPrice(cartArr)
//     document.querySelector("#cartbox").textContent = ""
//     document.querySelector("#subcart2").textContent = ""
// }


// on click function

document.querySelector("#logo").addEventListener("click", function() {
    window.location.pathname = "C:/Users/anki/Desktop/JCREW/LandingPage/landing.html"
});

document.querySelector("#Women").addEventListener("click", function() {
    window.location.pathname = "C:/Users/anki/Desktop/JCREW/header/women/women.html"
});

document.querySelector("#Men").addEventListener("click", function() {
    window.location.pathname = "C:/Users/anki/Desktop/JCREW/header/men/men.html"
});

document.querySelector("#Kids").addEventListener("click", function() {
    window.location.pathname = "C:/Users/anki/Desktop/JCREW/header/kids/kids.html"
});

document.querySelector("#Lounge").addEventListener("click", function() {
    window.location.pathname = "C:/Users/anki/Desktop/JCREW/header/lounge/lounge.html"
});

document.querySelector("#Cashmere").addEventListener("click", function() {
    window.location.pathname = "C:/Users/anki/Desktop/JCREW/header/cashmere/cashmere.html"
});

document.querySelector("#Coats").addEventListener("click", function() {
    window.location.pathname = "C:/Users/anki/Desktop/JCREW/header/coats/coats.html"
});

document.querySelector("#Sale").addEventListener("click", function() {
    window.location.pathname = "C:/Users/anki/Desktop/JCREW/header/sale/sale.html"
});

document.querySelector("#Signin").addEventListener("click", function() {
    alert("Alredy sign in");
});