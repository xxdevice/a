
var wepons = "";
$(function() {
  
  $.getJSON("weapons.json" , function(data) {
    var
      ulObj = $("#demo"),
      len = data.length;
      wepons = data;
    console.log(len);
    for(var i = 0; i < len; i++) {
      $("#demo").append($("<li>").attr({"id":data[i].id}).text(data[i].weapon));
      data[i].type.forEach(function(element,index){
        $("#demo").append($("<li>").attr({"id":data[i].id}).text(element.series));
      });
    }
  });
});