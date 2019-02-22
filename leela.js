function LengthConverter(valNum) {
  if (valNum >= 0) {
    document.getElementById("outputFeet").value = valNum * 3.2808;
  }
  else{
    window.alert("length cannot be negative");
  }
}