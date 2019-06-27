$(document).ready(function() {
    $(".titleB").on("mouseenter" ,function() {//making photo show
        $(".describe").hide();
        $(".highway").show();
    });
    $(".defB").on("mouseenter" ,function() {//making photo show
        $(".describe").hide();
        $(".sunclear").show();
    });
    $(".playB").on("mouseenter" ,function() {//making photo show
        $(".describe").hide();
        $(".circuit").show();
    });
    $(".challengeB").on("mouseenter" ,function() {//making photo show
        $(".describe").hide();
        $(".forest").show();
    });
    $(".qnaB").on("mouseenter" ,function() {//making photo show
        $(".describe").hide();
        $(".house").show();
    });
    $(".refB").on("mouseenter" ,function() {//making photo show
        $(".describe").hide();
        $(".mine").show();
    });
    
    $(".highway").on("click", function() {//linking click to move page
        location.href= "./highwayInstruction/HWI_index.html";
    })
    $(".defB, .sunclear ").on("click", function() {//linking click to move page
        location.href= "./SunclearDefVillage/SDV_index.html";
    })
    $(".playB, .circuit ").on("click", function() {//linking click to move page
        location.href= "./hardGroundPlayCircuit/HGPC_index.html";
    })
    $(".challengeB, .forest ").on("click", function() {//linking click to move page
        location.href= "./buggyForestChallenge/BFC_index.html";
    })
    $(".qnaB, .house ").on("click", function() {//linking click to move page
        location.href= "./wonderfulQnAHouse/WQH_index.html";
    })
    $(".refB, .mine ").on("click", function() {//linking click to move page
        location.href= "./goldenReferenceMine/GRM_index.html";
    })
})
