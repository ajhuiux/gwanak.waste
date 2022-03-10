$(document).ready(function () {
    $(".depth2").hide();
    $(".depth1").mouseover(function () {
        $(this).find(".depth2").stop().slideDown(300);
    }).mouseout(function () {
        $(this).find(".depth2").stop().slideUp(300);
    });
});

$(document).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("header > .top").addClass("scroll");
    }
    else if (scroll < 99) {
      $("header > .top").removeClass("scroll");
    }
  });

  $(function(){
    $(".tab").first().addClass("on");
    $(".sectionBG").first().addClass("on");

    $(".tab").click(function () {
        $(this).addClass('on')
          .siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on')
          .siblings().removeClass('on');
        return false;
      });
});


function handleOnChange(e) {
    // 선택된 데이터 가져오기
    const value = e.value;
    const text = e.options[e.selectedIndex].text;
    
    // 데이터 출력
    document.getElementById('text').innerText
      = value;   
    document.getElementById('value').innerText
     = text;
  }