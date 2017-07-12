var Log = function(messages, actions) {
	this.messages = messages;
	this.actions = actions;
}

$.extend(Log.prototype, {
	printLastMessage: function(message) {
		this.messages.push(message);
		// Imprimir mensaje
	},
	printMessage: function(message, color) {
		if($("#log span").length > 10) {
			$("#log").children().remove();
		}
		
		if($("#log span").length > 0) {
			var colorLine = $("#log span:last").css("color").substring(4, $("#log span:last").css("color").length - 1);
			colorLine = colorLine.split(", ");
			console.log(colorLine);
			var hex = rgbToHex(colorLine[0], colorLine[1], colorLine[2]);
			$("#log span:last").css("color", lightenDarkenColor(hex.toString(), -20));
		}
		//$("#log span").css("color", "grey");
		$("#log").append("<span style='color: " + color + "'>" + message + "</span><br/>");
	}
});