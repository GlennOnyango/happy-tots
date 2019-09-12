$(document).ready(function(){
   
    $('#home').click(function(){
        $('#fdp_a').addClass("hiddendiv");
        $('#acd_a').addClass('hiddendiv');
        $('#home_page').removeClass("hiddendiv");
        $('#cara').removeClass("hide");
    });

    $('#academics').click(function(){
        $('#acd_a').removeClass('hiddendiv');
        $('#fdp_a').addClass("hiddendiv");
        $('#home_page').addClass("hiddendiv");
        $('#cara').addClass("hide");
        
    });


    $('#FDP').click(function(){
        $('#fdp_a').removeClass("hiddendiv");
        $('#home_page').addClass("hiddendiv");
        $('#cara').addClass("hide");
        $('#acd_a').addClass('hiddendiv');
    });
    
   
    $('#donation-btn').click(function(){
        $('#donations-page').removeClass("hiddendiv");
        $('#fdp_a').addClass("hiddendiv");
        $('#home_page').addClass("hiddendiv");
        $('#cara').addClass("hide");
        $('#acd_a').addClass('hiddendiv'); 
       });

});