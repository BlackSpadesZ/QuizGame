class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Name");
    this.input2 = createInput("Answer");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');

    this.message = createElement('h1')
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(790, 150);

    this.question.html("Question: Which sea creature has three hearts?" );
    this.question.position(700, 200);
    this.option1.html("1: Squid " );
    this.option1.position(700, 280);
    this.option2.html("2: Turtle" );
    this.option2.position(700, 310);
    this.option3.html("3: Octopus " );
    this.option3.position(700, 340);
    this.option4.html("4: Shark" );
    this.option4.position(700, 370);

    this.input1.position(590, 450);
    this.input2.position(800, 450);
    this.button.position(750, 490);

    this.button.mousePressed(()=>{

      this.message.html('Thanks for answering :)')
      this.message.position(500, 600)

    });
  }
}
