/**
 *  libreria json2.js del portal http://www.JSON.org/js.html
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('q l;3(!l){l={}}(5(){\'1q 1r\';5 f(n){7 n<10?\'0\'+n:n}3(6 V.o.w!==\'5\'){V.o.w=5(a){7 W(p.X())?p.1s()+\'-\'+f(p.1t()+1)+\'-\'+f(p.1u())+\'T\'+f(p.1v())+\':\'+f(p.1w())+\':\'+f(p.1x())+\'Z\':x};G.o.w=1y.o.w=1z.o.w=5(a){7 p.X()}}q e=/[\\1A\\Y\\11-\\12\\13\\14\\15\\17-\\18\\19-\\1a\\1b-\\1c\\1d\\1e-\\1f]/g,H=/[\\\\\\"\\1B-\\1C\\1D-\\1E\\Y\\11-\\12\\13\\14\\15\\17-\\18\\19-\\1a\\1b-\\1c\\1d\\1e-\\1f]/g,8,z,1g={\'\\b\':\'\\\\b\',\'\\t\':\'\\\\t\',\'\\n\':\'\\\\n\',\'\\f\':\'\\\\f\',\'\\r\':\'\\\\r\',\'"\':\'\\\\"\',\'\\\\\':\'\\\\\\\\\'},m;5 I(b){H.1h=0;7 H.M(b)?\'"\'+b.A(H,5(a){q c=1g[a];7 6 c===\'J\'?c:\'\\\\u\'+(\'1i\'+a.1j(0).N(16)).1k(-4)})+\'"\':\'"\'+b+\'"\'}5 B(a,b){q i,k,v,h,C=8,9,2=b[a];3(2&&6 2===\'y\'&&6 2.w===\'5\'){2=2.w(a)}3(6 m===\'5\'){2=m.K(b,a,2)}1F(6 2){D\'J\':7 I(2);D\'O\':7 W(2)?G(2):\'x\';D\'1G\':D\'x\':7 G(2);D\'y\':3(!2){7\'x\'}8+=z;9=[];3(P.o.N.1H(2)===\'[y 1I]\'){h=2.h;E(i=0;i<h;i+=1){9[i]=B(i,2)||\'x\'}v=9.h===0?\'[]\':8?\'[\\n\'+8+9.L(\',\\n\'+8)+\'\\n\'+C+\']\':\'[\'+9.L(\',\')+\']\';8=C;7 v}3(m&&6 m===\'y\'){h=m.h;E(i=0;i<h;i+=1){3(6 m[i]===\'J\'){k=m[i];v=B(k,2);3(v){9.1l(I(k)+(8?\': \':\':\')+v)}}}}Q{E(k 1m 2){3(P.o.1n.K(2,k)){v=B(k,2);3(v){9.1l(I(k)+(8?\': \':\':\')+v)}}}}v=9.h===0?\'{}\':8?\'{\\n\'+8+9.L(\',\\n\'+8)+\'\\n\'+C+\'}\':\'{\'+9.L(\',\')+\'}\';8=C;7 v}}3(6 l.R!==\'5\'){l.R=5(a,b,c){q i;8=\'\';z=\'\';3(6 c===\'O\'){E(i=0;i<c;i+=1){z+=\' \'}}Q 3(6 c===\'J\'){z=c}m=b;3(b&&6 b!==\'5\'&&(6 b!==\'y\'||6 b.h!==\'O\')){1o 1p 1J(\'l.R\');}7 B(\'\',{\'\':a})}}3(6 l.S!==\'5\'){l.S=5(c,d){q j;5 U(a,b){q k,v,2=a[b];3(2&&6 2===\'y\'){E(k 1m 2){3(P.o.1n.K(2,k)){v=U(2,k);3(v!==1K){2[k]=v}Q{1L 2[k]}}}}7 d.K(a,b,2)}c=G(c);e.1h=0;3(e.M(c)){c=c.A(e,5(a){7\'\\\\u\'+(\'1i\'+a.1j(0).N(16)).1k(-4)})}3(/^[\\],:{}\\s]*$/.M(c.A(/\\\\(?:["\\\\\\/1M]|u[0-1N-1O-F]{4})/g,\'@\').A(/"[^"\\\\\\n\\r]*"|1P|1Q|x|-?\\d+(?:\\.\\d*)?(?:[1R][+\\-]?\\d+)?/g,\']\').A(/(?:^|:|,)(?:\\s*\\[)+/g,\'\'))){j=1S(\'(\'+c+\')\');7 6 d===\'5\'?U({\'\':j},\'\'):j}1o 1p 1T(\'l.S\');}}}());',62,118,'||value|if||function|typeof|return|gap|partial||||||||length||||JSON|rep||prototype|this|var||||||toJSON|null|object|indent|replace|str|mind|case|for||String|escapable|quote|string|call|join|test|toString|number|Object|else|stringify|parse||walk|Date|isFinite|valueOf|u00ad|||u0600|u0604|u070f|u17b4|u17b5||u200c|u200f|u2028|u202f|u2060|u206f|ufeff|ufff0|uffff|meta|lastIndex|0000|charCodeAt|slice|push|in|hasOwnProperty|throw|new|use|strict|getUTCFullYear|getUTCMonth|getUTCDate|getUTCHours|getUTCMinutes|getUTCSeconds|Number|Boolean|u0000|x00|x1f|x7f|x9f|switch|boolean|apply|Array|Error|undefined|delete|bfnrt|9a|fA|true|false|eE|eval|SyntaxError'.split('|'),0,{}));
/**
 * Herramienta para manejar el almacenamiento de datos
 *  - no soporta los objetos Function, RegExp, undefined
 * @param  {[type]} J [description]
 * @return {[type]}   [description]
 */
(function(J){
	var toJSON    = function ($STR) {try { return JSON.stringify($STR);} catch (e) {return $STR;}};
	var toObject  = function ($STR) {try { return JSON.parse($STR);} catch (e) {return $STR;}};


	var Local=function(){};
	Local.prototype.obtener  = 
		Local.prototype.get  =
		function($KY) {
			var $VAL = toObject(localStorage.getItem($KY)); 
			return !!$VAL?$VAL.data||null:null;
	};

	Local.prototype.definir  = 
		Local.prototype.set  =
		function($KY,$VL) {
			try{
				localStorage.setItem($KY,toJSON({data:$VL}));
			}
			catch(err){
				console.log("No se Pudo Almacenar los Datos")
			}
			return this;
	};

	Local.prototype.eliminar = 
		Local.prototype.remo =
		function($KY) {
		localStorage.removeItem($KY);return this;
	};

	Local.prototype.limpiar  = 
		Local.prototype.clr  =
		function($KY) {
			localStorage.clear(); return this;
	};

	Local.prototype.todo     = 
		Local.prototype.all  =
		function($KY) {
			var todo = {};
			for(var storage in localStorage){
				todo[storage]=toObject(localStorage[storage]).data||localStorage[storage];
			}
			return todo;
	};



	var Session=function(){};
	Session.prototype.obtener  = 
		Session.prototype.get  =
		function($KY) {
			var $VAL = toObject(sessionStorage.getItem($KY)); 
			return !!$VAL?$VAL.data||null:null;
	};

	Session.prototype.definir  = 
		Session.prototype.set  =
		function($KY,$VL) {
			try{
				sessionStorage.setItem($KY,toJSON({data:$VL}));
			}
			catch(err){
				console.log("No se Pudo Almacenar los Datos")
			}
			return this;
	};

	Session.prototype.eliminar = 
		Session.prototype.remo =
		function($KY) {
		sessionStorage.removeItem($KY);return this;
	};

	Session.prototype.limpiar  = 
		Session.prototype.clr  =
		function($KY) {
			sessionStorage.clear(); return this;
	};

	Session.prototype.todo     = 
		Session.prototype.all  =
		function($KY) {
			var todo = {};
			for(var storage in sessionStorage){
				todo[storage]=toObject(sessionStorage[storage]).data||sessionStorage[storage];
			}
			return todo;
	};




	var local   = new Local();
	var session = new Session();







	var Storage=function(){};
	Storage.prototype.obtener  = 
		Storage.prototype.get  =
		function($KY,$TP) {
			var storage = window[$TP+"Storage"];
			var $VAL = toObject(storage.getItem($KY)); 
			return !!$VAL?$VAL.data||null:null;
	};

	Storage.prototype.definir  = 
		Storage.prototype.set  =
		function($KY,$VL,$TP) {
			var storage = window[$TP+"Storage"];
			try{
				storage.setItem($KY,toJSON({data:$VL}));
			}
			catch(err){
				console.log("No se Pudo Almacenar los Datos")
			}
			return this;
	};

	Storage.prototype.eliminar = 
		Storage.prototype.remo =
		function($KY,$TP) {
			var storage = window[$TP+"Storage"];
			storage.removeItem($KY);return this;
	};

	Storage.prototype.todo     = 
		Storage.prototype.all  =
		function($TP) {
			var storage = window[$TP+"Storage"];
			var todo = {};
			for(var inx in storage){
				todo[inx]=toObject(storage[inx]).data||storage[storage];
			}
			return todo;
	};







	var storage = new Storage();




	var porDefecto     = {
		depuracion : false

	};

	var Instancia      = function($TP){return !!$TP?'local':'session'}

	var Almacenamiento = function(){return this;};

	Almacenamiento.prototype.definir =
		Almacenamiento.prototype.set =
		function($KY,$VL,$TP){console.log(Instancia($TP))
			storage.set($KY,$VL, Instancia($TP));
			return this;
	};
	Almacenamiento.prototype.obtener = 
		Almacenamiento.prototype.get = 
		function($KY,$TP) {
			return storage.get($KY, Instancia($TP));
	};
	Almacenamiento.prototype.eliminar = 
		Almacenamiento.prototype.remo =
		function($KY,$TP) {
			storage.remo($KY, Instancia($TP));
			return this;
	};


	Almacenamiento.prototype.dimencion  = 
		Almacenamiento.prototype.length =
		function($TP) {
			switch((String($TP)||"all").toLowerCase()){
				case 'local'    : return localStorage.length;
				case 'session'  : return sessionStorage.length;
				case 'all'      :
				case 'todo'     :
				default         : 
					return {
						local   : localStorage.length,
						session : sessionStorage.length
					};
			}
	};

	Almacenamiento.prototype.limpiar  = 
		Almacenamiento.prototype.clr  =
		function($TP) {
			switch((String($TP)||"all").toLowerCase()){
				case 'local'    : localStorage.clear();   break;
				case 'session'  : sessionStorage.clear(); break;
				case 'todo'     :
				case 'all'      :
				default         : 
					localStorage.clear();
					sessionStorage.clear();
				break;
			}
	};

	Almacenamiento.prototype.todo     = 
		Almacenamiento.prototype.all  =
		function($TP) {
			switch((String($TP)||"all").toLowerCase()){
				case 'local'    : 
				case 'session'  : 
					return storage.all($TP);
				case 'todo'     :
				case 'all'      :
				default         : 
					return {
						local   : storage.all('local'),
						session : storage.all('session')
					};
			}
	};


	window.Almacenamiento = new Almacenamiento();
})(JSON)
