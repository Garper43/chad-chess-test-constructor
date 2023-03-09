var draggedPiece = null;

//disable context menu
window.oncontextmenu = () => {
    return false;
}

canvas.addEventListener("mouseup", (ev) => {
    if(document.querySelector('input') == undefined) {
        return;
    }

    x = ~~(ev.offsetX/canvas.offsetWidth*8);
    y = ~~(ev.offsetY/canvas.offsetHeight*8);

    var val;

    //detect whether a piece is being moved or if a new one is created
    console.log(ev.button);
    if(draggedPiece != null) {
        val = draggedPiece;
        draggedPiece = null;
    } else if(ev.button == 2) {
        val = null;
    } else {
        val = document.querySelector('input[name="selected-piece"]:checked').value;
    }

    board.pieces[x][y] = val;

    update();
});

canvas.addEventListener("mousedown", (ev) => {
    if(ev.button == 2) {
        return;
    }

    x = ~~(ev.offsetX/canvas.offsetWidth*8);
    y = ~~(ev.offsetY/canvas.offsetHeight*8);

    draggedPiece = board.pieces[x][y];
    board.pieces[x][y] = null;

    update();
});

canvas.addEventListener("mousemove", (ev) => {
    if(draggedPiece == null) {
        return;
    }

    var x = ev.offsetX;
    var y = ev.offsetY;

    //half square size
    var hss = canvas.offsetHeight/16;

    update();
    ctx.drawImage(images.get(draggedPiece), x - hss, y - hss, hss*2, hss*2);
});