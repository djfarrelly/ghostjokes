(function(window, $, undefined){

  function initPage(){
    console.log('GHOSTSSS');
    $('.show-punchline-button').on('click', showPunchline);
  }

  function showPunchline(e){
    e.preventDefault()
    $(this).siblings('.joke-hidden').addClass('show');
    
  }
    
  $(document).ready(initPage);


})(this, jQuery);