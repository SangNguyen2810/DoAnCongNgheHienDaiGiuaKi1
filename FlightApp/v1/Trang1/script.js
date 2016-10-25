/**
 * Created by NguyenQuangSang on 26/04/2016.
 */
$(function(){
    $('.inputdatefrom').datepicker({
        format: 'yyyy-dd-mm'
    });
});
$(function(){
    $('.inputdateto').datepicker({
        format: 'yyyy-dd-mm'
    });
});


$(document).ready(function(){
   $(".inputfrom").on("focus", function(){

     $(".labeltextbox").css("color", "#FF7F50");
       
   });
    $(".inputfrom").on("blur", function() {
        $(".labeltextbox").css("color", "black");
     
    });

});
$(document).ready(function(){
    $(".inputto").on("focus", function(){

        $(".labeltextbox1").css("color", "#FF7F50");
       
    });
    $(".inputto").on("blur", function() {
        $(".labeltextbox1").css("color", "black");
       
    });

});
$(document).ready(function(){
   $(".inputdatefrom").on("focus", function(){

     $(".labeltextbox2").css("color", "#FF7F50");
       
   });
    $(".inputdatefrom").on("blur", function() {
        $(".labeltextbox2").css("color", "black");
     
    });

});
$(document).ready(function(){
    $(".inputdateto").on("focus", function(){

        $(".labeltextbox3").css("color", "#FF7F50");
       
    });
    $(".inputdateto").on("blur", function() {
        $(".labeltextbox3").css("color", "black");
       
    });

});
$(document).ready(function(){
    $(".inputnumber").on("focus", function(){

        $(".labelnumber").css("color", "#FF7F50");
       
    });
    $(".inputnumber").on("blur", function() {
        $(".labelnumber").css("color", "black");
       
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

 $(document).ready(function() {
            
            //after button is clicked we download the data
            $(".inputfrom").on('focus', function(){
                $("#listchuyenbay").html('');   
                //start ajax request
                $.ajax({
                    type: 'GET',
                    url: 'http://localhost/FlightApp/v1/allflights',
                    
                    dataType: 'json',
                   
                    success: function(data) {
                        $.each(data.assignments, function(i){
                        $("#listchuyenbay").append("<option value=" + data.assignments[i].NoiDi + ">"+data.assignments[i].TenNoiDi+"<\/option>");
                        });
                        
                    },
                    error: function(data)
                    {   
                        alert("Haven't Flight!!!");
                    }
                });
            });
             $(".inputto").on('focus', function(){
                 $("#listchuyenbayden").html('');  
                //start ajax request
                $.ajax({
                    type: 'GET',
                    url: 'http://localhost/FlightApp/v1/allflights/' + $("#SBF").val(),
                    
                    dataType: 'json',
                   
                    success: function(data) {
                        $.each(data.assignments, function(i){
                             $("#listchuyenbayden").append("<option value=" + data.assignments[i].NoiDen + ">" + data.assignments[i].TenNoiDen +"<\/option>");
                        });
                        
                    },
                    error: function(data)
                    {   
                        alert("From???");
                    }
                });
            });
          });
