$(document).ready(function() {
    $(".titleB").on("mouseenter" ,function() {//making photo show
        $(".describe").hide();
        $(".highway").show();
    });
    $(".defB").on("mouseenter" ,function() {
        $(".describe").hide();
        $(".sunclear").show();
    });
    $(".playB").on("mouseenter" ,function() {
        $(".describe").hide();
        $(".circuit").show();
    });
    $(".challengeB").on("mouseenter" ,function() {
        $(".describe").hide();
        $(".forest").show();
    });
    $(".qnaB").on("mouseenter" ,function() {
        $(".describe").hide();
        $(".house").show();
    });
    $(".refB").on("mouseenter" ,function() {
        $(".describe").hide();
        $(".mine").show();
    });
    
    $(".highway").on("click", function() {//linking click to move page
        location.href= "https://yoonseongkyeong.github.io/coding-highway-site/highwayInstruction./HWI_index.html";
    })
})
