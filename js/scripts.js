//UI Logic
$(document).ready(function (){
  $("form#pathfinder").submit(function(event){
    event.preventDefault();

    var question1Answer = $("input:radio[name=question1]:checked").val();
    var question2Answer = $("input:radio[name=question2]:checked").val();
    var question3Answer = $("input:radio[name=question3]:checked").val();
    var question4Answer = $("input:radio[name=question4]:checked").val();
    var question5Answer = $("input:radio[name=question5]:checked").val();
    var answers = [question1Answer, question2Answer, question3Answer, question4Answer, question5Answer];
    console.log(question1Answer);
    console.log(question2Answer);
    console.log(question3Answer);
    console.log(question4Answer);
    console.log(question5Answer);
    console.log(answers[0]);
    console.log(answers[1]);
    console.log(answers[2]);
    console.log(answers[3]);
    console.log(answers[4]);
    // var result = findPath(question1Answer, question2Answer, question3Answer, question4Answer, question5Answer);
    var track = findPath(answers);
    console.log(track);
  });
});

//Business Logic
var findPath = function(answers){
  // var tracks[0] = 0;
  // var tracks[1] = 0;
  // var tracks[2] = 0;
  // var tracks[3] = 0;
  // var tracks[4] = 0;
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
        track = 1;
      } else if (answer5 === 2){
        track = 2;
      } else if (answer5 === 3){
        track =3;
      } else if (answer5 === 4){
        track =4;
      } else if (answer5 === 5){
        track =5;
      }
    }
  }


  console.log(tracks[0]);
  console.log(tracks[1]);
  console.log(tracks[2]);
  console.log(tracks[3]);
  console.log(tracks[4]);

  return track;
};
