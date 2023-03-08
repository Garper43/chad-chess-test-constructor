var htmlMenu = {
    random: document.getElementById("random-btn"),
    save: document.getElementById("save-btn"),
    load: document.getElementById("load-btn")
};

htmlMenu.random.addEventListener("click", (ev) => {
    randomizeBoard();
});

function randomizeBoard() {
    //create array of possible pieces
    var keysIterator = images.keys();
    var keyArr = [];

    for( key of keysIterator ) {
        keyArr.push(key);
    }

    //place random pieces on board
    for(x = 0; x < board.pieces.length; x++ ) {
        for(y = 0; y < board.pieces[x].length; y++ ) {
            var isEmpty = Math.floor(Math.random()*2) == 0;

            if(isEmpty) {
                board.pieces[x][y] = null;
            } else {
                var index = Math.floor(Math.random()*keyArr.length);

                board.pieces[x][y] = keyArr[index];
            }

        }
    }

    update();
}