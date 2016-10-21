//UI Logic
$(document).ready(function (){
  $("form#pathfinder").submit(function(event){
    event.preventDefault();

    var question1Answer = $("input:radio[name=question1]:checked").val();
    var question2Answer = $("input:radio[name=question2]:checked").val();
    var question3Answer = $("input:radio[name=question3]:checked").val();
    var question4Answer = $("input:radio[name=question4]:checked").val();
    var question5Answer = $("input:radio[name=question5]:checked").val();
    console.log(question1Answer);
    console.log(question2Answer);
    console.log(question3Answer);
    console.log(question4Answer);
    console.log(question5Answer);
    var result = findPath(question1Answer, question2Answer, question3Answer, question4Answer, question5Answer);
    console.log(result);
  });
});

//Business Logic
var findPath = function(ans1, ans2, ans3, ans4, ans5){
  var tr1 = 0;
  var tr2 = 0;
  var tr3 = 0;
  var tr4 = 0;
  var tr5 = 0;
  var idk = 0;
  var answer1 = parseInt(ans1);
  var answer2 = parseInt(ans2);
  var answer3 = parseInt(ans3);
  var answer4 = parseInt(ans4);
  var answer5 = parseInt(ans5);
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
  console.log(tr1);
  console.log(tr2);
  console.log(tr3);
  console.log(tr4);
  console.log(tr5);
  var result = tr1 + tr2;
  return result;
};
