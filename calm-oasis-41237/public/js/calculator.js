
//onclick()
//getElementsByTagName()
//getElementsByName()

var meanButton = document.getElementById("rbutton1");
var weightButton = document.getElementById("rbutton2");

if(meanButton){
  meanButton.addEventListener("click", getMean);
}
if(weightButton){
  weightButton.addEventListener("click", getWeight);
}

var wbox = document.getElementsByName("wbox");
var mbox1 = document.getElementsByName("mbox1");
var mbox2 = document.getElementsByName("mbox2");

function errAlert() {
    alert("You left some box(es) empty. Try filling them in correctly next time (Or put a very large number in the numerator of the grade column and see what happens. ;) )");
}

// calculate percentage
function percent(){
  var x, y, z = 0;
  var percent = "%";
  var str;

  if(mbox1[0].value != "" && mbox2[0].value != ""){
    x = parseInt(mbox1[0].value);
    y = parseInt(mbox2[0].value);

    if( (x/y)/100 > 9000){
        document.getElementById("perc1").innerHTML = "IT'S OVER 9000!!!!!!!!!!!!";
    }
    else{
      z = (x/y)*100;
      str = z.toFixed(2);
      str = str.concat(percent);
      document.getElementById("perc1").innerHTML = str;
    }
  }

  if(mbox1[1].value != "" && mbox2[1].value != ""){
    x = parseInt(mbox1[1].value);
    y = parseInt(mbox2[1].value);

    if( (x/y)/100 > 9000){
        document.getElementById("perc2").innerHTML = "IT'S OVER 9000!!!!!!!!!!!!";
    }
    else{
      z = (x/y)*100;
      str = z.toFixed(2);
      str = str.concat(percent);
      document.getElementById("perc2").innerHTML = str;
    }
  }

  if(mbox1[2].value != "" && mbox2[2].value != ""){
    x = parseInt(mbox1[2].value);
    y = parseInt(mbox2[2].value);
    if( (x/y)/100 > 9000){
        document.getElementById("perc3").innerHTML = "IT'S OVER 9000!!!!!!!!!!!!";
    }
    else{
      z = (x/y)*100;
      str = z.toFixed(2);
      str = str.concat(percent);
      document.getElementById("perc3").innerHTML = str;
    }
  }

  if(mbox1[3].value != "" && mbox2[3].value != ""){
    x = parseInt(mbox1[3].value);
    y = parseInt(mbox2[3].value);
    if( (x/y)/100 > 9000){
        document.getElementById("perc4").innerHTML = "IT'S OVER 9000!!!!!!!!!!!!";
    }
    else{
      z = (x/y)*100;
      str = z.toFixed(2);
      str = str.concat(percent);
      document.getElementById("perc4").innerHTML = str;
    }
  }

}

// weighted button (rbutton2)
function getWeight()
{

  var i;
  var x, y, z;
  var sum = 0;
  var sumw = 0;
  var total = 0;
  var percent = "%";
  var str;
  var stupidcount = 0;

  // collect data from weight boxes
  for (i = 0; i < wbox.length; i++) {

    if(mbox1[i].value == "" && mbox2[i].value == ""){
      stupidcount++;
    }
    else if(mbox1[i].value == "" && mbox2[i].value != ""){
        errAlert();
    }
    else if (mbox2[i].value == "" && mbox1[i].value != ""){
        errAlert();
    }
    else if (wbox[i].value == "" && mbox1[i].value != "" && mbox2[i].value != ""){
        errAlert();
    }
    else if(wbox[i].value != "" && mbox1[i].value != "" && mbox2[i].value != ""){
      x = parseInt(wbox[i].value);
      y = parseInt(mbox1[i].value);
      z = parseInt(mbox2[i].value);
      sumw = sumw + x;
      sum = x *(y/z);
      total = total + sum;
    }
}

    total = total / sumw;
    total = total * 100;

    if(stupidcount == 4){
      alert("Try filling some boxes in before you press that button.");
    }
    else{
      str = total.toFixed(2);
      str = str.concat(percent);
      document.getElementById("dispRes").innerHTML = str;
    }

  }


// mean button (rbutton1)
function getMean()
{
    var i;
    var x, y;
    var sum = 0;
    var gradeCount = 0;
    var total = 0;
    var percent = "%";
    var str;
    var stupidCount = 0;

    // collect data from weight boxes
    for (i = 0; i < mbox1.length; i++) {

      if(mbox1[i].value == "" && mbox2[i].value == ""){
          stupidCount++;
      }
      else if(mbox1[i].value == "" && mbox2[i].value != ""){
          errAlert();
      }
      else if (mbox2[i].value == "" && mbox1[i].value != ""){
          errAlert();
      }
      else if(mbox1[i].value != "" && mbox2[i].value != ""){
        x = parseInt(mbox1[i].value);
        y = parseInt(mbox2[i].value);
          gradeCount++;
          sum = x / y;
          total = total + sum;
      }
}

      total = (total / gradeCount)*100;

      if(stupidCount == 4){
        alert("Try filling some boxes in before you press that button.");
      }
      else{
        str = total.toFixed(2);
        str = str.concat(percent);
        document.getElementById("dispRes").innerHTML = str;
      }

}

// reset button (rbutton3)
function erase(){

  for (i = 0; i < wbox.length; i++) {

      wbox[i].value = "";
      mbox1[i].value = "";
      mbox2[i].value = "";
}

document.getElementById("perc1").innerHTML = "";
document.getElementById("perc2").innerHTML = "";
document.getElementById("perc3").innerHTML = "";
document.getElementById("perc4").innerHTML = "";
document.getElementById("dispRes").innerHTML = "";

}

// random button (rbutton4)
function randumb(){

  var x, y, z = 0;

  for (i = 0; i < wbox.length; i++) {

    x = Math.random() * 10;
    z = (Math.random() * 100)+1;
    y = Math.random() * z;

    wbox[i].value = x.toFixed();
    mbox1[i].value = y.toFixed();
    mbox2[i].value = z.toFixed();

    percent();
  }

}
