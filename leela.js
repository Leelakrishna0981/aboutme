function LengthConverter(valNum) {
  if (valNum >= 0) {
    document.getElementById("outputFeet").innerHTML = valNum * 3.28;
  }
  else{
    window.alert("length cannot be negative");
  }
}
console.log('get random quotes: AJAX fetch')
const url = "https://thesimpsonsquoteapi.glitch.me/quotes"
document.getElementById('submit').addEventListener('click', function() {
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