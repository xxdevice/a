$("#demo").append($("<li>").text("inin"));
var wepons = "";
$(function() {
  
  $.getJSON("weapons.json" , function(data) {
    var
      ulObj = $("#demo"),
      len = data.length;
      wepons = data;

    
    for(var i = 0; i < len; i++) {
      $("#demo").append($("<li>").attr({"id":data[i].id}).text(data[i].weapon));
      data[i].type.forEach(element => {
        $("#demo").append($("<li>").attr({"id":data[i].id}).text(element.series));
      });
    }
  });
});