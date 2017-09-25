function game() {
    $("<div/>").attr("id", "content").appendTo("body");
    $("<div/>").attr("id", "game").appendTo("#content");
    $("<div/>").attr("id", "ball").appendTo("#game");
    $("<div/>").attr("id", "t1").appendTo("#game");
    $("<div/>").attr("id", "t2").appendTo("#game");

    var ball = {
        speed: 3,
        x: 290,
        y: 140,
        directionX: 1,
        directionY: 1
    }

    var t1 = {
        x: $("#t1").width() + $("#t1").position().left,
        y1: $("#t1").position().top,
        y2: $("#t1").position().top + $("#t1").height()
    }

    var t2 = {
        x: 290,
        y: 140
    }

    console.log(ball)
    $(document).ready(function () {
        // Set main loop to be called on the desired frame rate
        setInterval(gameLoop, 1000 / 60);
    });

    // Main loop of the game
    function gameLoop() {
        moveBall();

    }


    // Control movement of the ball doing collision checking
    function moveBall() {
        var gameWidth = parseInt($("#game").width());
        var gameHeight = parseInt($("#game").height());

        // Check collision to the bottom border and change the moving orientation on Y axis
        if (ball.y + ball.speed * ball.directionY > (gameHeight - parseInt($("#ball").height()))) {
            ball.directionY = -1
        }

        // Check collision to the top border and change the moving orientation on Y axis
        if (ball.y + ball.speed * ball.directionY < 0) {
            ball.directionY = 1
        }

        // Check collision to the right border and change the moving orientation on X axis
        if (ball.x + ball.speed * ball.directionX > (gameWidth - parseInt($("#ball").width()))) {
            ball.directionX = -1
        }

        // Check collision to the left border and change the moving orientation on X axis
        if (ball.x + ball.speed * ball.directionX < 0) {
            ball.directionX = 1
        }


        if (t1.y1 < ball.y && ball.y < t1.y2) {
            if (ball.x + ball.speed * ball.directionX < $("#t1").position().left + $("#t1").width()) {
                ball.directionX = 1

            }
        }


        if (ball.x + ball.speed * ball.directionX + $("#ball").width() > $("#t2").position().left) {
            ball.directionX = -1
        }

        // Update ball position on X and Y axes based on speed and orientation
        ball.x += ball.speed * ball.directionX;
        ball.y += ball.speed * ball.directionY;

        // Render the updated ball position
        $("#ball").css({ "left": ball.x, "top": ball.y });
    }

}
