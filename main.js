$data = "";

$(function() {
  $.getJSON("weapons.json" , function(data) {
    var
      ulObj = $("#demo"),
      len = data.length;
      $data = data;

    for(var i = 0; i < len; i++) {
      ulObj.append($("<li>").attr({"id":data[i].id}).text(data[i].weapon));
    }
  });
});