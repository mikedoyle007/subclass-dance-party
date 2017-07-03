var MakeBabyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeBabyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBabyDancer.prototype.constructor = MakeBabyDancer;

MakeBabyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

MakeBabyDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  this.$node.html('<img src="src/dancingBaby.gif">');
  this.$node.css('border', "none");
};