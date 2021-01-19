var wepons = "";
$(function() {
  
  $.getJSON("weapons.json" , function(data) {
    var
      ulObj = $("#demo"),
      len = data.length;
      wepons = data;

    for(var i = 0; i < len; i++) {
      ulObj.append($("<li>").attr({"id":data[i].id}).text(data[i].weapon));
      $("#weapons").append($("<option>").attr({"valude":i}).text(data[i].weapon));
      data[i].type.forEach(element => {
        ulObj.append($("<li>").attr({"id":data[i].id}).text(element.series));
      });
    }
  });
});