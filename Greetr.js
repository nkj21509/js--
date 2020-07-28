;(function (window, $) {
	
	// new an object
	var Greetr = function (firstname, lastname, language) {
		return new Greetr.init(firstname, lastname, language);
	};  
  
	// hidden within scope of the IIEF and never directly accessible
	var supportedLangs = ['en', 'es'];
  
	// inform greetings
	var greetings = {
		en: 'Hello',
		es: 'Hola'
	};
  
	// form grettings
	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};
  
	// longer mesages
	var logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion'
	};
  
	Greetr.prototype= {
		fullname: function () {
			return this.firstname + ' ' + this.lastname;
		},
		validate: function () {
			if(supportedLangs.indexOf(this.language) === -1) {
				throw "Invalid Language";
			}
		},
		greeting: function () {
			return greetings[this.language] + ' ' + this.firstname + '!';
		},
		formGretting: function () {
			return formalGreetings[this.language] + ', ' + this.fullname();
		},
		greet: function (formal) {
			var msg;
			if(formal) {
				msg = this.formGretting();
			} else {
				msg = this.greeting();
			}
		  
			if(console) {
				console.log(msg);
			}
			return this;
		},
		log: function () {
			if(console) {
				console.log(logMessages[this.language] + ': ' + this.fullname())
			}
			return this;
		},
		setLang: function (lang) {
			this.language = lang;
			this.validate();
			return this;
		},
		HTMLgreeting: function (selector, formal) {
			if(!$) {
				throw 'jQuery not loaded!';
			}
			if(!selector) {
				throw 'missing selector!';
			}
			
			var msg;
			if(formal) {
				msg = this.formGretting();
			} else {
				msg = this.greeting();
			}
			$(selector).html(msg);;
			
			return this;
		}
	};
  
	Greetr.init = function (firstname, lastname, language) {
		var self = this;
		self.firstname = firstname || '';
		self.lastname = lastname || '';
		self.language = language || 'en';
	}
  
	Greetr.init.prototype = Greetr.prototype;
    
	window.Greetr = window.G$ = Greetr;
    
}(window, jQuery));