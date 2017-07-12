var X_LENGTH = 20;
var Y_LENGTH = 30;

var player = new Player();
var board = new Board();
var log = new Log();



$(document).ready(function() {
	
	var board = new Board();
	var cells = [];
	for(var i = 0; i < X_LENGTH; i++) {
		cells[i] = [];
		for(var j = 0; j < Y_LENGTH; j++) {
			cells[i][j] = Math.random() < 0.5 ? new Cell(WOODEN_WALL, false, [i,j]) : new Cell(ROCK_FLOOR, false, [i,j]);
		}
	}

	var tmpPoint = [Math.floor((Math.random() * X_LENGTH) + 0), Math.floor((Math.random() * Y_LENGTH) + 0)];
	var start = new Cell(START, true, tmpPoint);
	var startPoint = tmpPoint;
	cells[startPoint[0]][startPoint[1]] = start;

	do {
		tmpPoint2 = [Math.floor((Math.random() * X_LENGTH) + 0), Math.floor((Math.random() * Y_LENGTH) + 0)];
	} while(tmpPoint[0] == tmpPoint2[0] && tmpPoint[1] == tmpPoint2[1]);
	var end = new Cell(END, true, tmpPoint2);
	var endPoint = tmpPoint2;
	cells[endPoint[0]][endPoint[1]] = end;

	board.cells = cells;
	player.setPosition(startPoint);
	board.createPath(startPoint, endPoint);
	

	$("#gameBoard").html(board.printBoard());
	board.printPlayer(player);
	
	$(document).keypress(function(e) {
		// q = 113
		// e = 101
		// w = 119
		// a = 97
		// s = 115
		// d = 100
		// z = 122
		// x = 120
		// c = 99
		if(e.which == 114) {
			log.printMessage(board.getCell(player.getCurrentPosition()).description);
		} else if(e.which == 119 || e.which == 100 || e.which == 97 || e.which == 115) {
			player.move(e.which, board);
		}
		
	});

	$("#gameBoard td").on("click", function(){
		var cell = board.getCell(this.id.split("-"));
		log.printMessage(cell.description + " ---- " + cell.position[0] + "-" + cell.position[1], cell.color);
	})
});