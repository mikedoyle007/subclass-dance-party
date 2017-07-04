var MakeHipThruster = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeHipThruster.prototype = Object.create(MakeDancer.prototype);
MakeHipThruster.prototype.constructor = MakeHipThruster;

MakeHipThruster.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

MakeHipThruster.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  this.$node.addClass('otherGuy');
  this.$node.html('<img src="src/hipthrust.gif">');
  this.$node.css('border', "none");
};