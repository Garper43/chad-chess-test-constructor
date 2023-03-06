

canvas.addEventListener("click", (ev) => {
    if(document.querySelector('input') == undefined) {
        return;
    }

    x = ~~(ev.offsetX/canvas.offsetWidth*8);
    y = ~~(ev.offsetY/canvas.offsetHeight*8);
    var val = document.querySelector('input[name="selected-piece"]:checked').value;

    board.pieces[x][y] = val;
    update();
});