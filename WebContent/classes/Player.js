var Player = function(name, position) {
	this.name = name;
	this.position = position;
}

$.extend(Player.prototype, {
	printPlayer: function() {
		return "<img src='sprites/playerHuman.png'></img>";
	},
	getCurrentPosition: function() {
		return this.position;
	},
	setPosition: function(position){
		this.position = position;
	},
	move: function(direction, board) {
		var current = this.getCurrentPosition();
		var newPos;
		switch(direction) {
			case 119:
				newPos = [current[0] - 1, current[1]];
				break;
			case 115:
				newPos = [current[0] + 1, current[1]];
				break;
			case 97:
				newPos = [current[0], current[1] - 1];
				break;
			case 100:
				newPos = [current[0], current[1] + 1];
				break;
		}

		if(board.cells[newPos[0]] == undefined || board.cells[newPos[0]][newPos[1]] == undefined) {
			log.printMessage("Map limit");
		} else if(!board.cells[newPos[0]][newPos[1]].canStep) {
			log.printMessage("You can't walk there");
		} else {
			board.printCell(current, board.cells[current[0]][current[1]]);
			this.setPosition([newPos[0],newPos[1]]);

			board.printPlayer(this);
		}
	}
});