//UI Logic
$(document).ready(function (){
  $("form#pathfinder").submit(function(event){
    event.preventDefault();

    var question1Answer = $("input:radio[name=question1]:checked").val();
    var question2Answer = $("input:radio[name=question2]:checked").val();
    var question3Answer = $("input:radio[name=question3]:checked").val();
    var question4Answer = $("input:radio[name=question4]:checked").val();
    var question5Answer = $("input:radio[name=question5]:checked").val();
    var name = $("#name").val();
    var answers = [question1Answer, question2Answer, question3Answer, question4Answer, question5Answer];
    var track = findPath(answers);

    $(".name").text(name);
    $("#resultsHeader").show();
    $("#pathfinderIntro").hide();
    $("#pathfinder").slideUp();

    if(track === 0){
      $("#track1").slideDown();
    } else if(track === 1){
      $("#track2").slideDown();
    } else if(track === 2){
      $("#track3").slideDown();
    } else if(track === 3){
      $("#track4").slideDown();
    } else if(track === 4){
      $("#track5").slideDown();
    } else if(track === 5){
      $("#track6").slideDown();
    }

    if(question5Answer === "1") {
      $("#superman").show();
    } else if(question5Answer === "2") {
      $("#batman").show();
    } else if(question5Answer === "3") {
      $("#theflash").show();
    } else if(question5Answer === "4") {
      $("#greenlantern").show();
    } else if(question5Answer === "5") {
      $("#harleyquinn").show();
    }
  });
});

//Business Logic
var findPath = function(answers){

  var idk = 0;
  var tracks = [0, 0, 0, 0, 0];
  var answer1 = parseInt(answers[0]);
  var answer2 = parseInt(answers[1]);
  var answer3 = parseInt(answers[2]);
  var answer4 = parseInt(answers[3]);
  var answer5 = parseInt(answers[4]);
  var track = 0;

  if(answer1 === 1){
    tracks[2]++;
    tracks[3]++;
  } else if (answer1 === 2){
    tracks[0]++;
    tracks[2]++;
    tracks[3]++;
    tracks[4]++;
  } else if (answer1 === 3){
    tracks[0]++;
    tracks[1]++;
    tracks[4]++;
  } else if (answer1 === 4){
    idk++;
  }

  if(answer2 === 1){
    tracks[2]++;
  } else if (answer2 === 2){
    tracks[0]++;
    tracks[1]++;
    tracks[3]++;
    tracks[4]++;
  } else if (answer2 === 3){
    tracks[0]++;
    tracks[1]++;
    tracks[2]++;
    tracks[3]++;
    tracks[4]++;
  } else if (answer2 === 4){
    idk++;
  }

  if(answer3 === 1){
    tracks[0]++;
    tracks[2]++;
    tracks[3]++;
  } else if (answer3 === 2){
    tracks[0]++;
    tracks[4]++;
  } else if (answer3 === 3){
    tracks[0]++;
    tracks[1]++;
    tracks[2]++;
    tracks[3]++;
    tracks[4]++;
  } else if (answer3 === 4){
    idk++;
  }

  if(answer4 === 1){
    tracks[0]++;
    tracks[2]++;
  } else if (answer4 === 2){
    tracks[0]++;
    tracks[2]++;
    tracks[3]++;
    tracks[4]++;
  } else if (answer4 === 3){
    tracks[1]++;
    tracks[2]++;
    tracks[4]++;
  } else if (answer4 === 4){
    idk++;
  }

  for(i = 0; i < 5; i++){
    if(tracks[i] > tracks[i+1]){
      track = i;
    } else if(tracks[i] === tracks[i+1]) {
      if(answer5 === 1){
        track = 0;
      } else if (answer5 === 2){
        track = 1;
      } else if (answer5 === 3){
        track =2;
      } else if (answer5 === 4){
        track =3;
      } else if (answer5 === 5){
        track =4;
      }
    }
  }

  if(idk >= 3){
    track = 5;
  }

  console.log(tracks[0]);
  console.log(tracks[1]);
  console.log(tracks[2]);
  console.log(tracks[3]);
  console.log(tracks[4]);

  return track;
};
