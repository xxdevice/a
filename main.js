$("#demo").append($("<li>").text("element.series"));
var wepons = "";
$(function() {
  
  $.getJSON("weapons.json" , function(data) {
    var
      ulObj = $("#demo"),
      len = data.length;
      wepons = data;
    for(var i = 0; i < len; i++) {
      $("#demo").append($("<li>").attr({"id":data[i].id}).text(data[i].weapon));
      data[i].type.forEach(function(element,i){
        $("#demo").append($("<li>").attr({"id":data[i].id}).text(element.series));
      });
    }
  });
});