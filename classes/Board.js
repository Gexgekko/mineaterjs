var Board = function(cells) {
	this.cells = cells;
}

$.extend(Board.prototype, {
	printBoard: function() {
		var msg = "<table style='text-align: center;'>";
		var x = 0;
		var y = 0;
		$.each(this.cells, function(index, cellRow){
			msg += "<tr>";
			$.each(cellRow, function(index, cell){
				msg += "<td id='" + x + "-" + y + "'>" + cell.printCell() + "</td>";
				y++;
			});
			msg += "</tr>";
			x++;
			y = 0;

		});
		msg += "</table>";
		return msg;
	},
	printCell: function(position, cell) {
		this.cells[position[0]][position[1]] = cell;
		$("#" + position[0] + "-" + position[1]).html(cell.printCell());
	},
	printPlayer: function(player) {
		$("#" + player.position[0] + "-" + player.position[1]).html(player.printPlayer());
	},
	getCell: function(position) {
		return this.cells[position[0]][position[1]];
	},
	createPath: function(start, end) {
		if(start[1] <= end[1]) {
			var point = [start[0], end[1]];
			this.printCell(point, new Cell(AT, true, point));
			for(var i = start[1] + 1; i <= end[1]; i++) {
				this.printCell([start[0], i], new Cell(ROCK_FLOOR, true, [start[0], i]));
				console.log("If1 Printing " + start[0] + "," + i);
			}

		} else {
			var point = [end[0], start[1]];
			this.printCell(point, new Cell(AT, true, point));
			for(var i = end[1] + 1; i <= start[1]; i++) {
				this.printCell([end[0], i], new Cell(ROCK_FLOOR, true, [end[0], i]));
				console.log("Else1 Printing " + end[0] + "," + i);
			}
		}

		if(start[0] <= end[0]) {
			for(var i = point[0] + 1; i < end[0]; i++) {
				this.printCell([i, point[1]], new Cell(ROCK_FLOOR, true, [i, point[1]]));
				console.log("If2 Printing " + i + "," + point[1]);
			}
		} else {
			for(var i = end[0] + 1; i < point[0]; i++) {
				this.printCell([i, end[1]], new Cell(ROCK_FLOOR, true, [i, end[1]]));
				console.log("Else2 Printing " + i + "," + end[1]);
			}
		}
		
		//this.printCell(point, new Cell(AT, true, points[i]));
		
	}
});