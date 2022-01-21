document.querySelector("#text3").addEventListener('click', store);

var data = JSON.parse(localStorage.getItem("userdata")) || [];

function store() {
    // console.log("helo")
    //  call values
    var email = document.querySelector('#text1').value;
    var number = document.querySelector('#text2').value;

    // console.log(email,number)

    // Object creation.................
    var bag = {
        email: email,
        number: number
    };

    //  console.log(bag);

    data.push(bag); //store obj into arr...........
    console.log(data);

    localStorage.setItem("userdata", JSON.stringify(data)); // set all to localStorage
    alert("successfull Entered");
    window.location.pathname = "C:/Users/anki/Desktop/JCREW/LandingPage/landing.html"
}