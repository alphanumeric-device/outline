
var run = function(){
  setTimeout(function(){
  
  
  for(var i = 0; i < document.getElementsByClassName("top_nav-link").length; i++){
if(window.location.href.includes(document.getElementsByClassName("top_nav-link")[i])){
  // document.getElementsByClassName("top_nav-link")[i].style.borderWidth = "7px"
  // document.getElementsByClassName("top_nav-link")[i].style.borderColor = "#ffcd00"
  // document.getElementsByClassName("top_nav-link")[i].style.borderBottomStyle = "solid"
  document.getElementsByClassName("top_nav-link")[i].style.color = "white"
  //have text be highlighted

  console.log("set")
}
      }

     
     

var sNW = document.getElementById("side_nav");
  //sNW.style.width = "10px";
  
  
 
var sNB = document.getElementById("side_nav-button")
  //mainContent (the area where info appears for each page)
var mainContent = document.getElementsByClassName("mainSection")[0];
  mainContent.style.position = "relative";
mainContent.style.left = "20px";
mainContent.style.zIndex = 10000
 mainContent.style.marginRight = "80px";
  mainContent.style.top = "120px"
 

  
  sNB.onclick = function(){
      sNW.classList.toggle("active")
   //check toggle status of the side nav
if(sNW.classList.contains("active")){
//mainContent.style.opacity = 0;
  
  
  
} else {
 // mainContent.style.opacity = 1;
}
}
  
  var credit = document.getElementById("footerCredit");
  credit.style.position = "fixed"
  credit.style.bottom = "0px"
  
  
  
}, 1000)
           }
try {
  run()
 
} catch(err){
  console.log(err)
}