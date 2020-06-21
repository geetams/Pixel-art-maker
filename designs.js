// Select color input
// Select size input
const $height = $('#inputHeight');
const $width = $('#inputWidth');
const $colr = $('#colorPicker');
const $tbEle = $('#pixelCanvas');


$('#sizePicker').submit(function makeGrid(table) {      //Grid height and width are taken from user
    var rows = $height.val();
    var colms = $width.val();
    $tbEle.html('');
     for (var i = 1; i <= rows; i++) {                  // grid creation
     $('table').append("<tr></tr>");
     for (var j = 1; j <= colms; j++) {
      $('tr:last').append("<td></td>");
      $('td').attr("class", 'cells');
     }
    }
    table.preventDefault();                             // To keep the table after submitting
    $('.cells').click(function (event) {                // function to apply color on selected cell
        var color = $colr.val();
        if($(this).attr('style'))
        {
            $(this).removeAttr('style');                // if colored cell remove the applied color
        }
        else
        {
            $(this).attr('style','background-color:' + color); // apply color
            //$(event.target).css('background-color', color);
        }
        
      });
      
  });


