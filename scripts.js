/*$(function(){
    $("#includedContent").load("pricing.html"); 
  });*/

  document.getElementById('introImage').addEventListener('mousemove', function(e) {
   // this.style.backgroundPositionX = -e.offsetX + 'px';
    this.style.backgroundPositionY = -e.offsetY + 'px';
});