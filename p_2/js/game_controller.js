var item = {
	color: '',
	shape: '',
	clicks: 0,
	do_click: function (){
		if (this.done) return;
		this.clicks = this.clicks + 1;
		if (current){
			if (this.color === current.color &&
			this.shape === current.shape){
				this.done = true;
				var c = has_finished();
				if (c) {
					alert("You win! Score: " 
						+ (100 + items.length - c));
					loadpage("../");
				}
			}
			else {
				current.done = this.done = false;
			}
			current = null;
		}
		else {
			current = this;
			current.done = true;
		}
	}
};

var has_finished = function(){
	var ret = true;
	var clicks = 0;
	items.forEach(function(element){
		ret = ret && element.done;
		clicks = clicks + element.clicks;
	});
	return ret && clicks;
}
var current = null;
var items = [];
items.push(createItem('blue','sphere'));
items.push(createItem('blue','triangle'));
items.push(createItem('blue','triangle'));
items.push(createItem('blue','sphere'));

function createItem(color, shape){
	var it = Object.create(item);
	it.color = color;
	it.shape = shape;
	return it;
}
