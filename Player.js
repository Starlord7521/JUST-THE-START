class Player{
    constructor(){

    }
    getCount(){
        var getCountRef = database.ref("playerCount");
        getCountRef.on("value", function(data){
            playerCount = data.val();
        })
    }
    update(name){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            name: name
        });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
         });
    }
}