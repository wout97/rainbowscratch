
var i = 0;
document.get
document.onmousemove = handleMouseMove;
document.ontouchmove = handleMouseMove;
let root = document.documentElement;
var manualControl = false;
var currentX = 200;
var currentY = 200;
var globalI = 0
var length = 150;
var speed = 10;



function handleMouseMove(event) {
    if (manualControl){
      i = globalI
      //console.log("moved")
    var target = event.target;
    var ignore = document.getElementById("settings")

    if (target === ignore || ignore.contains(target)) {
        return;
    }
      var dot, eventDoc, doc, body, pageX, pageY;
      
      event = event || window.event; // IE-ism
      
      if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;
        event.pageX = event.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
          (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
          (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
          (doc && doc.clientTop  || body && body.clientTop  || 0 );
      }
      if (event.pageX == undefined){
        var touch = event.touches[0] ||event.changedTouches[0];
         event.pageX = touch.clientX
         event.pageY = touch.clientY
      }

      // Add a dot to follow the cursor
      dot = document.createElement('div');
      dot.className = "dot";
      dot.style.left = event.pageX + "px";
      dot.style.top = event.pageY + "px";
      dot.id="id" + i
      currentX = event.pageX
      currentY = event.pageY
      //dot.style.backgroundColor = 'green'
      
      document.body.appendChild(dot);
      if(i>=length){
      var el = document.getElementById("id"+(i - length));
      el.parentNode.removeChild(el);
      
      }
      i = i + 1;
      globalI = i
    }
    }
function rainbow(){
var colorp = document.getElementById("colorP")
if (document.getElementById('color').checked) 
  {
    root.style.setProperty('--x', " rainbow-text");
    colorp.style.display = "none"
    
 
  } else {
  
   root.style.setProperty('--x', "white");
       colorp.style.display = ""

  }


}
var colorPicker = document.getElementById("colorPi")
colorPicker.addEventListener('change', watchColorPicker, false);

var colorPickerB = document.getElementById("colorB")
colorPickerB.addEventListener('change', watchColorPickerB, false);

var vol = document.getElementById("vol")
vol.addEventListener('change', sizeControl, false);

var speed = document.getElementById("speed")
speed.addEventListener('change', speedControl, false);

function speedControl(event){


  changeSpeed(10  * (10 - event.target.value) + 1)
}


function watchColorPicker(event) {
   root.style.setProperty('--y',  event.target.value );

}

function watchColorPickerB(event) {
  document.body.style.backgroundColor = event.target.value;


}
function sizeControl(event) {
   root.style.setProperty('--z',  event.target.value + "px" );

}
manual();
var t;
function manual(){
if (document.getElementById('man').checked) 
  {
   manualControl = true;
   clearInterval(t)
  } else {
  
      manualControl = false;
   t=setInterval(runFunction,speed);


  }


}
  var x1 = Math.floor(Math.random() * screen.width); 
  var y1 = Math.floor(Math.random() * screen.height); 

  var x2 = Math.floor(Math.random() * window.innerWidth); 
  var y2 = Math.floor(Math.random() * window.innerHeight);

 
  var dim = document.getElementById('settings').getBoundingClientRect()
  var xS = dim.width + 8
  var yS = dim.height + 8
function changeSpeed(newSpeed){
   clearInterval(t)
    manualControl = false;
    speed = newSpeed
   t=setInterval(runFunction,newSpeed);



}
function runFunction(){
   // Add a dot to follow the cursor
      dot = document.createElement('div');
      dot.className = "dot";
      dot.style.left = currentX + "px";
      dot.style.top = currentY + "px";
      dot.id="id" + globalI
      currentX = Math.floor(currentX)
      currentY = Math.floor(currentY)

      if(currentX > x2){
        currentX = currentX -2
      }
      if(currentY > y2){
        currentY = currentY -2
      }
      if(currentX < x2){
        currentX = currentX +2
      }
      if(currentY < y2){
        currentY = currentY +2
      }
    
       if((currentX == x2 || currentX == (x2 - 1) || currentX == (x2 + 1) || currentX == (x2 - 3)) && (currentY == y2 || currentY == (y2 - 1) ||currentY == (y2 + 1) || currentY == (y2 - 3))){
           x2 = Math.floor(Math.random() * window.innerWidth); 
   y2 = Math.floor(Math.random() * window.innerHeight);

          if(x2<xS && y2<yS){
            rng = Math.random(); 
            if (rng < 0.5){
              x2 = x2
              y2 = Math.floor(yS)
            }else{
              x2=Math.floor(xS)
              y2=y2
            }

          }
      
       }


    
  
      
      document.body.appendChild(dot);
      if(globalI>=length){
      var el = document.getElementById("id"+(globalI - length));
      el.parentNode.removeChild(el);
      }
      globalI ++;



}
