// How to write an IIFE (Immediately Invoked Function Expression) 
(function (global, $) {

	var Greetr = function(fn, ln, lang) {
		return new Greetr.constructor(fn, ln, lang);
	}

	var supportedLangs = ['en', 'es'];

	var greetings = {
		en: 'Hello',
		es: 'Hola'
	};

	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};

	var logMessages = {
		en: 'Logged In',
		es: 'Inico sesion'
	};

	Greetr.prototype = {
		fullname: function() {
			return this.fn + ' ' + this.ln;
		},

		valiadateLang: function() {
			// if indexOf returns a -1 (not found), throw error message
			if(supportedLangs.indexOf(this.lang) === -1) {
				throw "Unsupported Language";
			}
		},

		greeting: function() {
			return greetings[this.lang] + ' ' + this.fn + '!';
		}, 

		formalGreeting: function() {
			return formalGreetings[this.lang] + ', ' + this.fullname();
		},

		greet: function(formal) {
			var msg;
			// if undefined or null it will be coerced to 'false'
			formal ? msg = this.formalGreeting() : msg = this.greeting();

			if (console) {
				console.log(msg);
			}

			// 'this' refers to the calling object at execution time
			// makes the method chainable
			return this;
		},

		log: function() {
			if (console) {
				console.log(logMessages[this.lang] + ': ' + this.fullName());
			}

			// 'this' refers to the calling object at execution time
			// makes the method chainable
			return this;
		},

		setLang: function(lang) {
			this.lang = lang;

			this.valiadateLang();

			return this;
		}
	};

	Greetr.constructor = function(fn, ln, lang){
		var that = this;
		that.fn = fn || '';
		that.ln = ln || '';
		that.lang = lang || 'en'; 
	}

	// Setting the prototype by setting it equal to line 8
	Greetr.constructor.prototype = Greetr.prototype;

	global.Greetr = global.G$ = Greetr;

})(window, jQuery);