/**
 * Created by NguyenQuangSang on 26/04/2016.
 */
$(function(){
    $('.inputdatefrom').datepicker({
        format: 'mm-dd-yyyy'
    });
});
$(function(){
    $('.inputdateto').datepicker({
        format: 'mm-dd-yyyy'
    });
});


$(document).ready(function(){
   $(".inputfrom").on("focus", function(){

     $(".labeltextbox").css("color", "cornflowerblue");
       $(".from").fadeIn("slow", function(){

       }).css({borderBottomWidth:'3px',
       borderBottomStyle:'solid',
       borderBottomColor:'cornflowerblue'}, 2000);
   });
    $(".inputfrom").on("blur", function() {
        $(".labeltextbox").css("color", "black");
        $(".from").fadeIn("slow").css({borderBottomWidth:'0px',
            borderBottomStyle:'solid',
            borderBottomColor:'white'}, 2000);
    });

});
$(document).ready(function(){
    $(".inputto").on("focus", function(){

        $(".labeltextbox1").css("color", "cornflowerblue");
        $(".to").fadeIn("slow", function(){

        }).css({borderBottomWidth:'3px',
            borderBottomStyle:'solid',
            borderBottomColor:'cornflowerblue'}, 2000);
    });
    $(".inputto").on("blur", function() {
        $(".labeltextbox1").css("color", "black");
        $(".to").fadeIn("slow").css({borderBottomWidth:'0px',
            borderBottomStyle:'solid',
            borderBottomColor:'white'}, 2000);
    });

});
function check1()
{
    if(document.getElementById('TypeDate1').checked)
    {
        document.getElementById('inputdatetodisable').disabled=true;
		document.getElementById('inputdatetodisable').value='';
    }

}

function check2()
{
    if(document.getElementById('TypeDate2').checked)
    {
        document.getElementById('inputdatetodisable').disabled=false;
		
    }

}