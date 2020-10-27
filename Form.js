class Form{
    constructor(){

    }
    display(){
        var title = createElement('H2');
        title.html("Forza Horizon NoteBook");
        title.position(130, 12);
        var inpu = createInput("Your name please");
        inpu.position(130, 30);
        var button = createButton("inpu");
        var greeting = createElement('H3');
        greeting.position(130, 32);
        button.mousePressed(function(){
            inpu.hide();
            button.hide();
            var inputt = inpu.value();
            playerCount = playerCount + 1;
            player.update(inputt);
            player.updateCount(playerCount);
            greeting.html("Hello" + inputt);
            greeting.position(50, 32);
        });
    }
}