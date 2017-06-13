var initialCats = [
	{
		clickCount: 0,
		name: 'Kate01',
		imgSrc: 'img/Kate01.jpg',
		nicknames: ['Panda', 'Teapot', 'Pie', 'cute']
	},
	{
		clickCount: 0,
		name: 'Kate02',
		imgSrc: 'img/Kate02.jpg',
		nicknames: ['Panda', 'Teapot', 'Pie', 'cute']
	},
	{
		clickCount: 0,
		name: 'Kate03',
		imgSrc: 'img/Kate03.jpg',
		nicknames: ['Panda', 'Teapot', 'Pie', 'cute']
	},
	{
		clickCount: 0,
		name: 'Kate04',
		imgSrc: 'img/Kate04.jpg',
		nicknames: ['Panda', 'Teapot', 'Pie', 'cute']
	},
	{
		clickCount: 0,
		name: 'Kate05',
		imgSrc: 'img/Kate05.jpg',
		nicknames: ['Panda', 'Teapot', 'Pie', 'cute']
	}

];
var Cat= function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);
	this.level = ko.computed(function(){
		var level;
		var clicks = this.clickCount();
		if(this.clickCount() < 5) {
			level = 'Newborn';
		}else if(this.clickCount() < 10) {
			level = 'Infant';
		}else if(this.clickCount() < 15) {
			level = 'Teenager';
		}else if(this.clickCount() < 20) {
			level = 'Adult';
		}else if(this.clickCount() < 39){
			level = 'Elder';
		}else {
			level = 'God';
		}
		return level;

	}, this);

	
};


var ViewModel = function() {
	var self = this;
	self.catList = ko.observableArray([]);
	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	})
	self.currentCat = ko.observable(self.catList()[0]);
	self.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
	self.setCat = function(clickedCat){
		self.currentCat(clickedCat);
	}

};

ko.applyBindings(new ViewModel());