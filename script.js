console.log('hi');

$(document).ready(function(){
  $(".divbtn").click(function(){
      $(".d1").toggleClass("emphasize");
      $(".d2").toggleClass("emphasize1");
      $(".d3").toggleClass("emphasize2");
  });
});

$(document).ready(function(){
  $(".pbtn").click(function(){
      $(".p1").toggleClass("emphasize");
      $(".p2").toggleClass("emphasize1");
      $(".p3").toggleClass("emphasize2");
  });
});

$(document).ready(function(){
  $(".spanbtn").click(function(){
      $(".s1").toggleClass("emphasize");
      $(".s2").toggleClass("emphasize1");
      $(".s3").toggleClass("emphasize2");
  });
});

$(document).ready(function(){
  $(".h1btn").click(function(){
    $("h1").slideToggle();
  });
});
