$(document).ready(function(){

    $("#button").click(function(event){
            event.preventDefault();
            var $principal = parseInt($("#principal").val());
            var $years = parseInt($("#years").val());
            var $cycles = parseInt($("#cycles").val());
            var $intrate = parseFloat(($("#int-rate").val())/100);
            var $ansfinal = parseFloat($principal * (Math.pow((1 + $intrate/$cycles), ($cycles) * ($years)))).toFixed(2);
            $("<div>").append($ansfinal).appendTo('#append');
        }); 
    
    $("#clear").click(function(event){
            event.preventDefault();
            $("#append").empty();
    });
    
    });
    