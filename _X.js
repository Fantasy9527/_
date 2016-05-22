(function() {
	var $ = function(Element) {
		return new $.fn(Element)

	}
	window.$ = window._X = $;
	$.fn = function(Element, conText) {
		return this.getElement(conText, Element)

	}

	$.fn.prototype = {
		constructor : $.fn,
		getElement : function(conText, Element) {
			var context = document || context;

			this.element = context.querySelectorAll(Element);
			this.length = this.element.length;
			for (var i = 0; i < this.element.length; i++) {
				this[i] = this.element[i]
			}
			return this
		},
		each : function(Fn) {

			for (var i = 0; i < this.length; i++) {

				Fn.call(this[i])

			}
			return this
		},
		css : function(oStyle, oValue) {

			if (arguments.length == 1) {



			} else if (arguments.length == 2) {

				this.each(function() {

					this.style[oStyle] = oValue

				})
			}
			return this

		},
		hide : function() {
			this.css("display","none")
			return this
		},
		click : function(fn) {
			this.each(function() {
				this.onclick = fn

			})
			return this
		},
		hover:function(over,out){

			this.each(function() {
				this.onmouseout = out;
				this.onmouseover = over;


			})

		},
		mousedown:function(fn){
			this.each(function(){
				this.onmousedown=fn;

			})


		},
		mouseup:function(fn){
			this.each(function(){

			this.onmouseup=fn
			})


		}

	}

})()
