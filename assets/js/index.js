//function to smooth scroll page within #ids

$(document).ready(function(){
    $('a').click(function(event){
        console.log(this, this.hash)

      if(this.hash !== ""){
        event.preventDefault();
        var hash = this.hash;
        $('html,body').animate({
          scrollTop: $(hash).offset().top
        },800,function(){
          window.location.hash = hash
        })
      }
    })
  })

//function to go up conveniently with a little span positioned to the bottom-right   

  $(document).ready(function(){

    $('.go-up').click(function(){
      $('body, html').animate({
        scrollTop: '0px'
      }, 300);
    });
  
    $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
        $('.go-up').slideDown(300);
      } else {
        $('.go-up').slideUp(300);
      }
    });
  
  });