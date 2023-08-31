$(document).ready(function(){
  const sideBarWidth = $(".sideBar").outerWidth();

  $(".OpenSide").click(function () {
    if ($(".sideBar").css("left") == "0px") {
      $(".sideBar").animate({ left: -sideBarWidth }, 1000);
      $(this).hide(10000);
    } else {
      $(".sideBar").animate({ left: 0 }, 1000);

      $(this).hide(1000);
    }
  });

  $(".closeSide").click(function () {
    $(".sideBar").animate({ left: -sideBarWidth }, 1000);

    $(".OpenSide").fadeToggle(1000);
  });

  // m4 Radiah tetzbt m3aya enha tkon with just one function

  $("#Home").click(function () {
    const offsetOfLandingSection = $(".landingPage").offset().top;

    $("html , body").animate({ scrollTop: offsetOfLandingSection }, 1000);
  });

  $("#singers").click(function () {
    const offsetOfSingersSection = $(".singersOfParty").offset().top;

    $("html , body").animate({ scrollTop: offsetOfSingersSection }, 1000);
  });

  $("#Duration").click(function () {
    const offsetOfDurationSection = $(".countDown").offset().top;

    $("html , body").animate({ scrollTop: offsetOfDurationSection }, 1000);
  });

  $("#Contact").click(function () {
    const offsetOfContactSection = $(".contact").offset().top;

    $("html , body").animate({ scrollTop: offsetOfContactSection }, 1000);
  });

  // textarea logic

  $("textarea").keyup(function () {
    let myLength = $(this).val().length;

    if (100 - myLength <= 0) {
      $("#Num").text("You must write maximum 100 charachter");
    } else if (100 - myLength > 0) {
      $("#Num").text(100 - myLength);
    }
  });

  var clock = $(".clock").FlipClock({
    clockFace: "DailyCounter",
    animationRate: 1000,
    autoStart: false,

    callbacks: {
      stop: function () {
        $(".message").html("The clock has stopped!");
      },
    },
  });

  clock.setTime(220880);
  clock.setCountdown(true);
  clock.start();





$(".singerInfoDown ").click(function(){


  
  $(this).next().slideToggle(1000)

  $(this).children().eq(1).fadeToggle(500)




})




})

