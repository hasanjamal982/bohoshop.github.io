$(function(){
                $("#minSlider").slider({
                    min: 120,
                    max: 9999,
                    step: 1,
                    values: [120,2899],
                    slide: function(event,ui){
                        $("#minprice").val('$' + 
                            ui.values[1] );
                    }
                });
                $("#maxSlider").slider({
                    min: 120,
                    max: 9999,
                    step: 1,
                    values: [120,7999],
                    slide: function(event,ui){
                        $("#maxprice").val('$' + 
                            ui.values[1] );
                    }
                });
                
                $(".carousel").carousel({
                    interval : 6000
                });
                
                $(".iconprev").click(function(){
                    $("#myCarousel1").carousel("prev");
                    $("#myCarousel2").carousel("prev");
                    $("#myCarousel3").carousel("prev");
                    $("#myCarousel4").carousel("prev");
                    $("#myCarousel5").carousel("prev");
                });
                
                $(".iconnxt").click(function(){
                    $("#myCarousel1").carousel("next");
                    $("#myCarousel2").carousel("next");
                    $("#myCarousel3").carousel("next");
                    $("#myCarousel4").carousel("next");
                    $("#myCarousel5").carousel("next");
                });
                
                $(".chairiconprev").click(function(){
                    $("#chairCarousel1").carousel("prev");
                    $("#chairCarousel2").carousel("prev");
                    $("#chairCarousel3").carousel("prev");
                    $("#chairCarousel4").carousel("prev");
                    $("#chairCarousel5").carousel("prev");
                });
                
                $(".chairiconnxt").click(function(){
                    $("#chairCarousel1").carousel("next");
                    $("#chairCarousel2").carousel("next");
                    $("#chairCarousel3").carousel("next");
                    $("#chairCarousel4").carousel("next");
                    $("#chairCarousel5").carousel("next");
                });
                
                $("#show1").mouseover(function(){
                    $("#showcard1").show('fade');
                    $(this).html('<img src="images/bagiconhover.png">');
                    $(this).css('background-color','#a07d58');
                });
                $("#show1").mouseleave(function(){
                    $("#showcard1").hide('fade');
                    $(this).html('<img src="images/bagicon.png">');
                    $(this).css('background-color','#ebebeb');
                });
                
                $("#show2").mouseover(function(){
                    $("#showcard2").show('fade');
                    $(this).html('<img src="images/bagiconhover.png">');
                    $(this).css('background-color','#a07d58');
                });
                $("#show2").mouseleave(function(){
                    $("#showcard2").hide('fade');
                    $(this).html('<img src="images/bagicon.png">');
                    $(this).css('background-color','#ebebeb');
                })
                
                $("#show3").mouseover(function(){
                    $("#showcard3").show('fade');
                    $(this).html('<img src="images/bagiconhover.png">');
                    $(this).css('background-color','#a07d58');
                });
                $("#show3").mouseleave(function(){
                    $("#showcard3").hide('fade');
                    $(this).html('<img src="images/bagicon.png">');
                    $(this).css('background-color','#ebebeb');
                })
                
                $("#show4").mouseover(function(){
                    $("#showcard4").show('fade');
                    $(this).html('<img src="images/bagiconhover.png">');
                    $(this).css('background-color','#a07d58');
                });
                $("#show4").mouseleave(function(){
                    $("#showcard4").hide('fade');
                    $(this).html('<img src="images/bagicon.png">');
                    $(this).css('background-color','#ebebeb');
                })
                
                $("#show5").mouseover(function(){
                    $("#showcard5").show('fade');
                    $(this).html('<img src="images/bagiconhover.png">');
                    $(this).css('background-color','#a07d58');
                });
                $("#show5").mouseleave(function(){
                    $("#showcard5").hide('fade');
                    $(this).html('<img src="images/bagicon.png">');
                    $(this).css('background-color','#ebebeb');
                })
                
                $("#show6").mouseover(function(){
                    $("#showcard6").show('fade');
                    $(this).html('<img src="images/bagiconhover.png">');
                    $(this).css('background-color','#a07d58');
                });
                $("#show6").mouseleave(function(){
                    $("#showcard6").hide('fade');
                    $(this).html('<img src="images/bagicon.png">');
                    $(this).css('background-color','#ebebeb');
                })
                
                $("#show7").mouseover(function(){
                    $("#showcard7").show('fade');
                    $(this).html('<img src="images/bagiconhover.png">');
                    $(this).css('background-color','#a07d58');
                });
                $("#show7").mouseleave(function(){
                    $("#showcard7").hide('fade');
                    $(this).html('<img src="images/bagicon.png">');
                    $(this).css('background-color','#ebebeb');
                })
                
                $("#show8").mouseover(function(){
                    $("#showcard8").show('fade');
                    $(this).html('<img src="images/bagiconhover.png">');
                    $(this).css('background-color','#a07d58');
                });
                $("#show8").mouseleave(function(){
                    $("#showcard8").hide('fade');
                    $(this).html('<img src="images/bagicon.png">');
                    $(this).css('background-color','#ebebeb');
                })
                
                $("#show9").mouseover(function(){
                    $("#showcard9").show('fade');
                    $(this).html('<img src="images/bagiconhover.png">');
                    $(this).css('background-color','#a07d58');
                });
                $("#show9").mouseleave(function(){
                    $("#showcard9").hide('fade');
                    $(this).html('<img src="images/bagicon.png">');
                    $(this).css('background-color','#ebebeb');
                })
                
                var x = 0;
                $(".productbtn2").click(function(){
                    x++;
                    $("#bagValue").html(x);
                });
    
            });