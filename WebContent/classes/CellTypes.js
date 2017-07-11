var AIR = {
	type: "empty",
	symbol: null,
	canStep: false,
	description: "Air."
}

var WOODEN_WALL = {
	type: "wall",
	symbol: "woodenWall",
	canStep: false,
	description: "Wooden wall. Looks really cool."
}

var START = {
	type: "start",
	symbol: "startPoint",
	canStep: true,
	description: "This is where you start. If you are here you are lazy."
}

var END = {
	type: "end",
	symbol: "endPoint",
	canStep: true,
	description: "Reach this and you'll go to the next level."
}

var PLAYER = {
	type: "player",
	symbol: "playerHuman",
	canStep: null
}

var ROCK_FLOOR = {
	type: "floor",
	symbol: "rockFloor",
	canStep: true,
	description: "Rock floor. It's hard to walk on it."
}

var AT = {
	type: "floor",
	symbol: "player",
	canStep: true,
	description: "Rock floor. It's hard to walk on it."
}