var Cell = function(cellType, isFixed, position) {
	this.type = cellType.type;
	this.symbol = cellType.symbol;
	this.canStep = cellType.canStep;
	this.description = cellType.description
	this.isFixed = isFixed;
	this.position = position;
	this.color = cellType.color;
}

$.extend(Cell.prototype, {
	printCell: function() {
		if(this.type != "empty"){
			return "<img src='sprites/" + this.symbol + ".png'></img";
		} else {
			return "";
		}
	},
	getCurrentPosition: function() {
		return this.position;
	}
});