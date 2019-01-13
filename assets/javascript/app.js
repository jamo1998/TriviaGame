var score = 0;
var numOfQuestions = 4;
var number = 30;
var intervalId;

function init() {
    sessionStorage.setItem('a1','c');
    sessionStorage.setItem('a2','d');
    sessionStorage.setItem('a3','d');
    sessionStorage.setItem('a4','a');
};

$(document).ready(function () {
    $(".questionForm").hide()


    $("#start-div").on('click', function () {
        $("#start-div").hide();
        $("#q1").show();
        run();
    });


    $("#q1 #submit").on('click', function() {
        $(".questionForm").hide();
        stop();
        $('#q2').fadeIn(200);
        proccess('q1');
        run();
        return false;
    });

    $("#q2 #submit").on('click', function() {
        $(".questionForm").hide();
        stop();
        $('#q3').fadeIn(200);
        proccess('q2');
        run();
        return false;
    });

    $("#q3 #submit").on('click', function() {
        $(".questionForm").hide();
        stop();
        $('#q4').fadeIn(200);
        proccess('q3');
        run();
        return false;
    });

    $("#q4 #submit").on('click', function() {
        $(".questionForm").hide();
        proccess('q4');
        $("#results").fadeIn(200);
        stop();
        return false;
    });

    function run() {
        number = 30;
        $("#timer").show()
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    };

    function decrement() {

        number--;

        $("#timer").html("<h2>" + number + " seconds remaining</h2>");

        if (number === 0) {
            stop();

            alert("Time Up! Try Again");
            resetGame();
        }

    };


    function stop() {
        clearInterval(intervalId);
    };


    function resetGame() {
        score = 0;
        number = 30;
        $(".questionForm").hide();
        $("#start-div").show();
        $("#timer").hide()
    };
});

function proccess(q) {
    if(q == "q1") {
        var submitted = $('input[name=q1]:checked').val();
        if(submitted == sessionStorage.a1) {
            score++;
        }
    }
    if(q == "q2") {
        var submitted = $('input[name=q2]:checked').val();
        if(submitted == sessionStorage.a2) {
            score++;
        }
    }
    if(q == "q3") {
        var submitted = $('input[name=q3]:checked').val();
        if(submitted == sessionStorage.a3) {
            score++;
        }
    }
    if(q == "q4") {
        var submitted = $('input[name=q4]:checked').val();
        if(submitted == sessionStorage.a4) {
            score++;
        }
        $("#results").html('<h2>Your final score is: ' + score + '/4</h2><a href="index.html">Retake Quiz</a>');
    }
}


//Add event listener
window.addEventListener('load', init, false);

