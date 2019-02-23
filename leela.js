function LengthConverter(val) {
    localStorage.setItem("val",parseFloat(document.getElementById("inputMeters").value));
  if (localStorage.getItem("val") >= 0) {
    document.getElementById("outputFeet").innerHTML = localStorage.getItem("val") * 3.28;
  }
}
console.log('get random quotes: AJAX fetch')
const url = "https://thesimpsonsquoteapi.glitch.me/quotes"
document.getElementById('submit').addEventListener('mouseover', function() {
    $("#image").show();
    fetch(url)
    .then((res) => { return res.json() }) 
    .then((data) => {          
        data.forEach((item) => {
            const { image } = item
           
            document.getElementById('image').src = image;
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error)); 
    })
})
$(document).ready(function(){
    $(".t2").mouseleave(function () {
           $("#image").hide();
    });
});