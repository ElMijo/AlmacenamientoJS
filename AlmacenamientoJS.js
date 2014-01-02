/**
 *  libreria json2.js del portal http://www.JSON.org/js.html
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('q l;3(!l){l={}}(5(){\'1q 1r\';5 f(n){7 n<10?\'0\'+n:n}3(6 V.o.w!==\'5\'){V.o.w=5(a){7 W(p.X())?p.1s()+\'-\'+f(p.1t()+1)+\'-\'+f(p.1u())+\'T\'+f(p.1v())+\':\'+f(p.1w())+\':\'+f(p.1x())+\'Z\':x};G.o.w=1y.o.w=1z.o.w=5(a){7 p.X()}}q e=/[\\1A\\Y\\11-\\12\\13\\14\\15\\17-\\18\\19-\\1a\\1b-\\1c\\1d\\1e-\\1f]/g,H=/[\\\\\\"\\1B-\\1C\\1D-\\1E\\Y\\11-\\12\\13\\14\\15\\17-\\18\\19-\\1a\\1b-\\1c\\1d\\1e-\\1f]/g,8,z,1g={\'\\b\':\'\\\\b\',\'\\t\':\'\\\\t\',\'\\n\':\'\\\\n\',\'\\f\':\'\\\\f\',\'\\r\':\'\\\\r\',\'"\':\'\\\\"\',\'\\\\\':\'\\\\\\\\\'},m;5 I(b){H.1h=0;7 H.M(b)?\'"\'+b.A(H,5(a){q c=1g[a];7 6 c===\'J\'?c:\'\\\\u\'+(\'1i\'+a.1j(0).N(16)).1k(-4)})+\'"\':\'"\'+b+\'"\'}5 B(a,b){q i,k,v,h,C=8,9,2=b[a];3(2&&6 2===\'y\'&&6 2.w===\'5\'){2=2.w(a)}3(6 m===\'5\'){2=m.K(b,a,2)}1F(6 2){D\'J\':7 I(2);D\'O\':7 W(2)?G(2):\'x\';D\'1G\':D\'x\':7 G(2);D\'y\':3(!2){7\'x\'}8+=z;9=[];3(P.o.N.1H(2)===\'[y 1I]\'){h=2.h;E(i=0;i<h;i+=1){9[i]=B(i,2)||\'x\'}v=9.h===0?\'[]\':8?\'[\\n\'+8+9.L(\',\\n\'+8)+\'\\n\'+C+\']\':\'[\'+9.L(\',\')+\']\';8=C;7 v}3(m&&6 m===\'y\'){h=m.h;E(i=0;i<h;i+=1){3(6 m[i]===\'J\'){k=m[i];v=B(k,2);3(v){9.1l(I(k)+(8?\': \':\':\')+v)}}}}Q{E(k 1m 2){3(P.o.1n.K(2,k)){v=B(k,2);3(v){9.1l(I(k)+(8?\': \':\':\')+v)}}}}v=9.h===0?\'{}\':8?\'{\\n\'+8+9.L(\',\\n\'+8)+\'\\n\'+C+\'}\':\'{\'+9.L(\',\')+\'}\';8=C;7 v}}3(6 l.R!==\'5\'){l.R=5(a,b,c){q i;8=\'\';z=\'\';3(6 c===\'O\'){E(i=0;i<c;i+=1){z+=\' \'}}Q 3(6 c===\'J\'){z=c}m=b;3(b&&6 b!==\'5\'&&(6 b!==\'y\'||6 b.h!==\'O\')){1o 1p 1J(\'l.R\');}7 B(\'\',{\'\':a})}}3(6 l.S!==\'5\'){l.S=5(c,d){q j;5 U(a,b){q k,v,2=a[b];3(2&&6 2===\'y\'){E(k 1m 2){3(P.o.1n.K(2,k)){v=U(2,k);3(v!==1K){2[k]=v}Q{1L 2[k]}}}}7 d.K(a,b,2)}c=G(c);e.1h=0;3(e.M(c)){c=c.A(e,5(a){7\'\\\\u\'+(\'1i\'+a.1j(0).N(16)).1k(-4)})}3(/^[\\],:{}\\s]*$/.M(c.A(/\\\\(?:["\\\\\\/1M]|u[0-1N-1O-F]{4})/g,\'@\').A(/"[^"\\\\\\n\\r]*"|1P|1Q|x|-?\\d+(?:\\.\\d*)?(?:[1R][+\\-]?\\d+)?/g,\']\').A(/(?:^|:|,)(?:\\s*\\[)+/g,\'\'))){j=1S(\'(\'+c+\')\');7 6 d===\'5\'?U({\'\':j},\'\'):j}1o 1p 1T(\'l.S\');}}}());',62,118,'||value|if||function|typeof|return|gap|partial||||||||length||||JSON|rep||prototype|this|var||||||toJSON|null|object|indent|replace|str|mind|case|for||String|escapable|quote|string|call|join|test|toString|number|Object|else|stringify|parse||walk|Date|isFinite|valueOf|u00ad|||u0600|u0604|u070f|u17b4|u17b5||u200c|u200f|u2028|u202f|u2060|u206f|ufeff|ufff0|uffff|meta|lastIndex|0000|charCodeAt|slice|push|in|hasOwnProperty|throw|new|use|strict|getUTCFullYear|getUTCMonth|getUTCDate|getUTCHours|getUTCMinutes|getUTCSeconds|Number|Boolean|u0000|x00|x1f|x7f|x9f|switch|boolean|apply|Array|Error|undefined|delete|bfnrt|9a|fA|true|false|eE|eval|SyntaxError'.split('|'),0,{}));
/**
 * Herramienta para manejar el almacenamiento de datos del lado del cliente
 *  - no soporta los objetos Function, RegExp, undefined
 */
(function(){
	/**
	 * convierte un valor en un JSON String
	 */
	var toJSON         = function (val) {try { return JSON.stringify(val);} catch (e) {return val;}};
	/**
	 * Convierte un JSON String en un Object
	 * @param  JSON String   
	 * @return Object
	 */
	var toObject       = function (val) {try { return JSON.parse(val);} catch (e) {return val;}};
	/**
	 * Determina la instancia donde se almacenaran los datos
	 * @param boolean 
	 * @return String
	 */
	var Instancia      = function(tp){return !!tp?'local':'session'};
	/**
	 * Objeto base 
	 */
	var Storage                = function(){};
	/**
	 * Permite obtener un valor en espesifico
	 * @param  String Clave que se desea obtener 
	 * @param  String Instancia de donde se desea obtener
	 * @return String|NULL
	 */
	Storage.prototype.obtener  = 
		Storage.prototype.get  =
		function(ky,tp) {
			var storage = window[tp+"Storage"];
			var val = toObject(storage.getItem(ky)); 
			return !!val?val.data||null:null;
	};
	/**
	 * Permite definir un almacenamiento
	 * @param  String Clave que se desea definnir
	 * @param  String Valor que se desea almacenar
	 * @param  String Instancia de donde se desea obtener
	 * @return Storage
	 */
	Storage.prototype.definir  = 
		Storage.prototype.set  =
		function(ky,vl,tp) {
			var storage = window[tp+"Storage"];
			try{
				storage.setItem(ky,toJSON({data:vl}));
			}
			catch(err){
				console.log("No se Pudo Almacenar los Datos")
			}
			return this;
	};
	/**
	 * Permite eliminar un almacenamiento
	 * @param  String Clave que se desea eliminar
	 * @param  String Instancia de donde se desea obtener
	 * @return Storage
	 */
	Storage.prototype.eliminar = 
		Storage.prototype.remo =
		function(ky,tp) {
			var storage = window[tp+"Storage"];
			storage.removeItem(ky);return this;
	};
	/**
	 * Permite obtener todo el almacenamiento
	 * @param  String Instancia de donde se desea obtener
	 * @return Object
	 */
	Storage.prototype.todo     = 
		Storage.prototype.all  =
		function(tp) {
			var storage = window[tp+"Storage"];
			var todo = {};
			for(var inx in storage){
				todo[inx]=toObject(storage[inx]).data||storage[storage];
			}
			return todo;
	};
	/**
	 * Permite buscar un almacenamiento
	 * @param  String Clave que se desea buscar
	 * @param  String Instancia de donde se desea buscar
	 * @return Object
	 */
	Storage.prototype.buscar     = 
		Storage.prototype.search =
		function(val,tp) {
			var parseRegExp = function(a){
				if(!(a instanceof RegExp)){
					var b = a.charAt(0)==="*"?"$":'';
					var c = a.charAt(b.length-1)==="*"?"^":'';
					var a = a.replace(/\*/g,"");
					return new RegExp((!!b&&!!c)?a:c+a+b)
				}
				return a;
			};
			var storage = window[tp+"Storage"];
			var regexp  = parseRegExp(val);
			var todo    = {};console.log(regexp)
			for(var inx in storage){
				if(regexp.test(inx)){
					todo[inx]=toObject(storage[inx]).data||storage[storage];	
				}
			}
			return todo;
	};
	/**
	 * Inicializacion del Objevto Storage
	 * @type {Storage}
	 */
	var storage = new Storage();
	/**
	 * Valores de configuracion por defecto
	 * @type {Object}
	 */
	var porDefecto     = {
		depuracion : false,
		prefijo    : ''

	};
	/**
	 * Objeto donde se almacenaran las configuraciones del usuario
	 * @type {Object}
	 */
	var configuracion  = {};
	/**
	 * Funcion con la que se manipula el Objeto Storage
	 */
	var Almacenamiento = function(){return this;};
	Almacenamiento.prototype.definir =
		Almacenamiento.prototype.set =
		function(ky,vl,tp){console.log(Instancia(tp))
			storage.set(ky,vl, Instancia(tp));
			return this;
	};
	Almacenamiento.prototype.obtener = 
		Almacenamiento.prototype.get = 
		function(ky,tp) {
			return storage.get(ky, Instancia(tp));
	};
	Almacenamiento.prototype.eliminar = 
		Almacenamiento.prototype.remo =
		function(ky,tp) {
			storage.remo(ky, Instancia(tp));
			return this;
	};


	Almacenamiento.prototype.dimencion  = 
		Almacenamiento.prototype.length =
		function(tp) {
			switch((String(tp)||"all").toLowerCase()){
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
		function(tp) {
			switch((String(tp)||"all").toLowerCase()){
				case 'local'    : localStorage.limpiar();   break;
				case 'session'  : sessionStorage.limpiar(); break;
				case 'todo'     :
				case 'all'      :
				default         : 
					localStorage.limpiar();
					sessionStorage.limpiar();
				break;
			}
	};

	Almacenamiento.prototype.todo     = 
		Almacenamiento.prototype.all  =
		function(tp) {
			switch((String(tp)||"all").toLowerCase()){
				case 'local'    : 
				case 'session'  : 
					return storage.todo(tp);
				case 'todo'     :
				case 'all'      :
				default         : 
					return {
						local   : storage.todo('local'),
						session : storage.todo('session')
					};
			}
	};
	Almacenamiento.prototype.buscar     = 
		Almacenamiento.prototype.search =
		function(val,tp) {
			switch((String(tp)||"all").toLowerCase()){
				case 'local'    : 
				case 'session'  : 
					return storage.buscar(val,tp);
				case 'todo'     :
				case 'all'      :
				default         : 
					return {
						local   : storage.buscar(val,'local'),
						session : storage.buscar(val,'session')
					};
			}
	};
	Almacenamiento.prototype.configuracion = 
		Almacenamiento.prototype.settings  =
		function(obj) {
			$.extend(configuracion,porDefecto,obj);
			return this;
	};

	window.Almacenamiento = new Almacenamiento();
	window._db            = new Almacenamiento();
})();
