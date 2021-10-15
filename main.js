
document .getElementById("result").onclick = function(){
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  var o = document.getElementById("o").value;
  if( o == "+"){
    document.getElementById("out").innerHTML= (+x + +y);
  }else if ( o == "-") {
    document.getElementById("out").innerHTML= (+x - +y);
  }else if ( o == "*") {
    document.getElementById("out").innerHTML= (+x * +y);
  }else{
    document.getElementById("out").innerHTML= (+x / +y);
  }
}
