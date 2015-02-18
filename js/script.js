var circles = ' ';
var red;
var green;
var blue;
var rgbColor;
var $button = $('#submitButton');
var $input = $('#userInput');
var $remove = $('#removeButton');
var i;
var circleNum;

$($remove).on('click', function (evt) {
  $('.circles').remove();
})

$($button).on('click', function (evt) {

  evt.preventDefault();
  circleNum = $input.val();

  for ( i = 1; i <= circleNum; i++) {
    red = Math.floor(Math.random() * 256 );
    green = Math.floor(Math.random() * 256 );
    blue = Math.floor(Math.random() * 256 );
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    circles += '<div class="circles" style="background-color:' + rgbColor + '"></div>';

  }
  $('.circles').remove();
  $('p').append(circles);
})

