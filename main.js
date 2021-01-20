function search(weap,aff){
  wept = weap.weapon;
  if ( wept === "knife" || wept === "long" || wept === "dual" || wept === "javelin" || wept === "photon" ) {
    wept = 0;
  } else if ( wept === "shield" ){
    wept = 1;
  } else {
    wept = 2;
  }
  return wept;
}
var weapons = "";
var $ffix = "";
$(function() {
  $.getJSON("affix.json" , function(affix) {
    $.getJSON("weapons.json" , function(data) {
      var
        len = data.length;
        weapons = data;
        $affix = affix;
      for(var i = 0; i < len; i++) {
        wept = search(data[i],affix);
        data[i].type.forEach(function(element){
          switch(element.maker) {
            case 'サクラバ重工':index = 0;break;
            case 'グラナダ・GG':index = 1;break;
            case 'メレデス＆コー':index = 2;break;
            case '偽りなき真心堂':index = 3;break;
            case 'ノポン商会':index = 4;break;
            case 'オルフェ・パルフェ':index = 5;break;
            case 'ファクトリー1.21':index = 6;break;
            case '六連星':index = 7;break;
          }
          aff = affix[wept].type[index];
          $("#sheat .page").append($('<div class="affix">').append("<table><caption>"+element.series+" "+ element.attribute + "属性 (" +element.power+")<br>ショップ:"+ element.shop+"</table></caption>").append($('<td>').append(aff.affix.map(function(el,idx){
            return '<label><input type="checkbox"><span>'+ el +'</span></label>';
          }))));
          console.log("----------");
        });
        
      }
    });
  });
});