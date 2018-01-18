$(document).ready(function() {
    var bricks = 
    [
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,0,1,1,1,1,1],
        [1,0,1,1,0,1,1,0,1,1],
    ]
    var htmlString = ""

    for(var i = 0; i < bricks.length; i++) {
        htmlString += '<div class="row">'
        for( var j = 0; j < bricks[i].length; j++) {
            if (bricks[i][j] == 1) {
                htmlString += '<div class="brick"></div>'
            } else {
                htmlString += '<div class="empty"></div>'
            }
        }
        htmlString += '</div>'
    }
    htmlString += '<div id="ball"></div>'
    htmlString += '<div id="paddle"></div>'
    $('#gameboard').append(htmlString)

    $(document).keydown(event, function() {
        if (event.keyCode == 32) {
            // alert("spacebar pressed")
            $('#ball').css('bottom', '350px');
        } else if (event.keyCode == 39 ) {
            //move right
            var paddlePosition = $('#paddle').css('left');
            console.log(paddlePosition);
        } else if (event.keyCode == 37 ) {
            //move left
        }
    })

});