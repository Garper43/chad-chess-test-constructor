var isDragged = false;
var draggedPiece = null;

canvas.addEventListener("mouseup", (ev) => {
    if(document.querySelector('input') == undefined) {
        return;
    }

    x = ~~(ev.offsetX/canvas.offsetWidth*8);
    y = ~~(ev.offsetY/canvas.offsetHeight*8);
    var val;
    
    //detect whether a piece is being moved or if a new one is created
    if(isDragged == true && draggedPiece != null) {
        val = draggedPiece;
        isDragged = false;
    } else {
        val = document.querySelector('input[name="selected-piece"]:checked').value;
    }

    board.pieces[x][y] = val;

    update();
});

canvas.addEventListener("mousedown", (ev) => {
    x = ~~(ev.offsetX/canvas.offsetWidth*8);
    y = ~~(ev.offsetY/canvas.offsetHeight*8);

    isDragged = true;
    draggedPiece = board.pieces[x][y];
    board.pieces[x][y] = null;

    update();
});

canvas.addEventListener("mousemove", (ev) => {
    if(!isDragged) {
        return;
    }

    var x = ev.offsetX;
    var y = ev.offsetY;

    //half square size
    var hss = canvas.offsetHeight/16;

    update();
    ctx.drawImage(images.get(draggedPiece), x - hss, y - hss, hss*2, hss*2);
});