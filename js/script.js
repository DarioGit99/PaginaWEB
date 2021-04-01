document.addEventListener('DOMContentLoaded', ()=> {
    "use strict";

});

$(document).ready(function() { // Ejecuta el codigo jquery despues que el documento este listo
    $(window).on("load",function(){
        window.setTimeout(()=>{
            console.log("Console.log");
            $("#precarga").css({"display":"none"});
            $("#load").css({"opacity": "1"});
            $("body").css({"overflow-y": "scroll"})
        }, 2500);
    });
});
