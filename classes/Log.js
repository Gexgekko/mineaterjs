var Log = function(messages, actions) {
	this.messages = messages;
	this.actions = actions;
}

$.extend(Log.prototype, {
	printLastMessage: function(message) {
		this.messages.push(message);
		// Imprimir mensaje
	},
	printMessage: function(message) {
		$("#log span").css("color", "grey");
		$("#log").append("<span style='color: white;'>" + message + "</span><br/>");
	}
});