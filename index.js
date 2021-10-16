i = document.body.style.backgroundColor;

$('.switch-dl').on('click',function(){

switch (i) {
  case 'black':
    $('body').css('backgroundColor','white');
    $('h1').css('color','black');
    $('p').css('color','black');
    $('').css('color','black');
    i = 'white';
    break;
  case 'white':
    $('body').css('backgroundColor','black');
    $('h1').css('color','white');
    $('p').css('color','white');
    $('a').css('color','white');
    i = 'black';
    break;
  default:

}

});
$('.ptitle').css('border-radius','none');
