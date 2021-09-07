const setLocalStorage = (value) => {
    localStorage.setItem("name", value);
}


document.getElementById("user").innerHTML = localStorage.getItem("name");



const getData = () => {
    setLocalStorage("Nitin Dutta");
    fetch('http://hp-api.herokuapp.com/api/characters')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            data.map((obj)=>document.getElementById("result-div").innerHTML+="<p>"+obj.name+"</p>")
        })
        .catch(function (err) {
            console.log("Something went wring", err);
    })
}


document.getElementsByClassName('fetch-btn')[0].addEventListener("click", getData);



