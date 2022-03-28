class Form {

  constructor() {
    this.input = createInput("Name");
    this.country = createInput("Country");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.rules = createElement('h3');
    this.start = createButton('Start Game');

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.start.hide();
    this.input.hide();
    this.country.hide();
    this.title.hide();
    this.rules.hide();
  }

  display(){
    background(formbg);
   // this.start.hide();
    this.title.html("Commando Ops");
    this.title.position(displayWidth/2 - 50, 0);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 160);
    this.country.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.country.hide();
      this.button.hide();
      this.title.hide();
      player.name = this.input.value();
      playerCount=1;
      player.index = playerCount;
      player.update();
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 50, 0);
      this.rules.html(" Rules of the Game: <br> <br>1. Its a Single player game.<br><br>"+
       "2. There are 3 levels in this game.<br><br>"+
       "3. The player has to escape from its enemies.<br><br>"+
       "4. Play nicely and have fun.")
      this.rules.position(displayWidth/2 - 250, displayHeight/4 - 90);
      this.start.position(displayWidth/2 - 150, displayHeight/4+160);


    });

    this.reset.mousePressed(()=>{
      //player.updateCount(0);
      game.update(0);
    });

    this.start.mousePressed(()=>{
      gameState  = 1;
      game.update(1);
    });
  }
}
