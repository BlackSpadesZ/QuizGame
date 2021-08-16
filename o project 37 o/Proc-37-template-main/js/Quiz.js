class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide
    background(background2);
    textSize(30);
    fill('purple');
    text('results', 500, 400);
    Contestant.getContestantInfo();

    if(allContestants !== undefined){
      fill('blue');
      textSize(20);
      text('--All correct contestants are highlighted in green--', 500, 300);
  
        for(var plr in allContestants){
          var display_answer = 230;
          var correctAns = "3";
            if(correctAns === allContestants[plr].display_answer)
              fill('green')
              else
                fill('red');
              
            display_answer +=30;
            testSize(15);
            text(allContestants[plr].name + ':' +allContestants[p].answer, 250, display_answer);

        }
    }

    
  }

}
