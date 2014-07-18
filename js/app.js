wildstar = Ember.Application.create();

wildstar.Router.map(function(){
	this.resource('home', {path: '/'});
});

wildstar.HomeController = Ember.Controller.extend({
	armor: 0,
	physicalResist: 0,
	techResist: 0,
	magicResist: 0,
	level: 50,
	pResist: function(){
		var armor = parseFloat(this.get('armor'));
		var physicalResist = parseFloat(this.get('physicalResist'));
		var level = parseFloat(this.get('level'));
		return ((armor + physicalResist) / ((armor + physicalResist) + ((250*level)+200))).toFixed(4);
	}.property('armor','physicalResist'),
	tResist: function(){
		var armor = parseFloat(this.get('armor'));
		var techResist = parseFloat(this.get('techResist'));
		var level = parseFloat(this.get('level'));
		return ((armor + techResist) / ((armor + techResist) + ((250*level)+200))).toFixed(4);
	}.property('armor','techResist'),
	mResist: function(){
		var armor = parseFloat(this.get('armor'));
		var magicResist = parseFloat(this.get('magicResist'));
		var level = parseFloat(this.get('level'));
		return ((armor + magicResist) / ((armor + magicResist) + ((250*level)+200))).toFixed(4);
	}.property('armor','magicResist')
});