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
    var result = findPath(answers);
    console.log(result);
  });
});

//Business Logic
var findPath = function(answers){
  var tr1 = 0;
  var tr2 = 0;
  var tr3 = 0;
  var tr4 = 0;
  var tr5 = 0;
  var idk = 0;
  var answer1 = parseInt(answers[0]);
  var answer2 = parseInt(answers[1]);
  var answer3 = parseInt(answers[2]);
  var answer4 = parseInt(answers[3]);
  var answer5 = parseInt(answers[4]);
  var track;

  if(answer1 === 1){
    tr3++;
    tr4++;
  } else if (answer1 === 2){
    tr1++;
    tr3++;
    tr4++;
    tr5++;
  } else if (answer1 === 3){
    tr1++;
    tr2++;
    tr5++;
  } else if (answer1 === 4){
    idk++;
  }

  if(answer2 === 1){
    tr3++;
  } else if (answer2 === 2){
    tr1++;
    tr2++;
    tr4++;
    tr5++;
  } else if (answer2 === 3){
    tr1++;
    tr2++;
    tr3++;
    tr4++;
    tr5++;
  } else if (answer2 === 4){
    idk++;
  }

  if(answer3 === 1){
    tr1++;
    tr3++;
    tr4++;
  } else if (answer3 === 2){
    tr1++;
    tr5++;
  } else if (answer3 === 3){
    tr1++;
    tr2++;
    tr3++;
    tr4++;
    tr5++;
  } else if (answer3 === 4){
    idk++;
  }

  if(answer4 === 1){
    tr1++;
    tr3++;
  } else if (answer4 === 2){
    tr1++;
    tr3++;
    tr4++;
    tr5++;
  } else if (answer4 === 3){
    tr2++;
    tr3++;
    tr5++;
  } else if (answer4 === 4){
    idk++;
  }

  // for(i = 0; i < 5; i++){
  //   debugger;
  //   if("'tr' + '(i+1)' " > " 'tr' + '(i+2)' "){
  //     track = "tr" + i;
  //   }
  // }


  console.log(tr1);
  console.log(tr2);
  console.log(tr3);
  console.log(tr4);
  console.log(tr5);
  var result = tr1 + tr2;
  return result;
};
