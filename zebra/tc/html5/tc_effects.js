/*
 * TEST CASE for CSS Effects
 *
 * written by STB-Component Browser Part.
 *
 */

/* http://www.w3schools.com/css/css3_transitions.asp */
/* http://css-tricks.com/controlling-css-animations-transitions-javascript/ */
/* http://www.sitepoint.com/css3-animation-javascript-event-handlers/ */

// constants to control the timing of effects


// append container as root node of output area


var DELAY_TO_START	= 100;
var TIMEOUT_DELAY	= 10000;

// make a objet inherits from another
inherits = function(ctor, superCtor) {
	ctor.super_ = superCtor;
	ctor.prototype = Object.create(superCtor.prototype, {
		constructor: {
			value: ctor,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});
};

// public class EffectBase
function EffectBase(test_name, class_name) 
{
	var self = this;

	this.effect_node = document.getElementById('transition');

	this.getTestName = function() {
		return test_name;
	};

	// abstract methods (should be implemented by a subclass)
	this.onPrepare = function(timerid) { console.log("need to override!"); };
	this.onStart = function() { console.log("need to override!"); };
	this.onFinished = function(success, message) { console.log("need to override!"); };

	asyncTest(self.getTestName(), function() { 
		var timerid = setTimeout( function() {
			QUnit.start();
			self.onFinished(false, test_name + " fail! : timeout");
			}, TIMEOUT_DELAY);
		
		self.onPrepare(timerid);
		setTimeout( function() {
			self.onStart();
			}, DELAY_TO_START);
	});
}

// public class Transition extends EffectBase
function Transition(test_name, class_name) 
{
	var self = this;
	var _timerid = 0;
	// calls super constructor
	EffectBase.call(this, test_name, class_name);
	
	var event_listener = function(event) {
		clearTimeout(_timerid);
		effect_node.removeEventListener('webkitTransitionEnd', event_listener, false);
		QUnit.start();
		self.onFinished(true, test_name + " success");
	};

	this.onPrepare = function(timerid) {
		_timerid = timerid;
		effect_node.setAttribute("class", class_name);
		effect_node.addEventListener('webkitTransitionEnd', event_listener, false);
	};

	this.onStart = function() {
		effect_node.classList.add(class_name + '_change');
	};

	this.onFinished = function(success, message) {
		effect_node.setAttribute("class", '');
		ok (success, message);
	};
}

// public class Animations extends EffectBase
function Animations(test_name, class_name) 
{
	var self = this;
	var _timerid = 0;

	// calls super constructor
	EffectBase.call(this, test_name, class_name);
	
	var event_listener = function(event) {
		clearTimeout(_timerid);
		effect_node.removeEventListener('webkitAnimationEnd', event_listener, false);
		QUnit.start();
		self.onFinished(true, test_name + " success");
	};

	this.onPrepare = function(timerid) {
		_timerid = timerid;
		effect_node.setAttribute("class", class_name);
		effect_node.addEventListener('webkitAnimationEnd', event_listener, false);
	};

	this.onStart = function() {
		// no op
	};

	this.onFinished = function(success, message) {
		effect_node.setAttribute("class", '');
		ok (success, message);
	};
}

// make bonds between classes
inherits(Transition, EffectBase);
inherits(Animations, EffectBase);

// test registration functions
var tc_transition = function(test_name, class_name) {
	new Transition(test_name, class_name);
}
var tc_animations = function(test_name, class_name) {
	new Animations(test_name, class_name);
}

// declares test cases by registration functions
var tcCSSEffects = function() {

	module("Transition");
	tc_transition("transition", "tc_transition");
	tc_transition("transition-delay", "tc_transition_delay");
	tc_transition("transition-duration", "tc_transition_duration");
	tc_transition("transition-property", "tc_transition_property");
	tc_transition("transition-timing_function", "tc_transition_timing_function");

	module("Animations");
	tc_animations("keyframes (frome, to)", "tc_keyframes_from_to");
	tc_animations("keyframes (percentage)", "tc_keyframes_percentage");
	tc_animations("animation", "tc_animation");
	tc_animations("animation-delay", "tc_animation_delay");
	tc_animations("animation-direction", "tc_animation_direction");
	tc_animations("animation-duration", "tc_animation_duration");
	tc_animations("animation-fill-mode", "tc_animation_fill_mode");
	tc_animations("animation-iteration-count", "tc_animation_iteration_count");
	tc_animations("animation-name", "tc_animation_name");
	tc_animations("animation-play-state", "tc_animation_play_state");

	module("Timing Functions");
	tc_transition("linear", "tc_timing_function_linear");
	tc_transition("ease", "tc_timing_function_ease");
	tc_transition("ease_in", "tc_timing_function_ease_in");
	tc_transition("ease_out", "tc_timing_function_ease_out");
	tc_transition("ease_in_out", "tc_timing_function_ease_in_out");

}

var style = document.createElement('link');
style.setAttribute("rel", 'stylesheet')
style.setAttribute('type', 'text/css');
style.setAttribute("href", 'tc/module/html5/css/tc_effects.css');
document.head.appendChild(style);

var container = document.createElement("div");
container.style.setProperty("position", "absolute"); 
container.style.setProperty("top", "170px"); 
container.style.setProperty("left", "900px"); 
container.style.setProperty("width", "360px"); 
container.style.setProperty("height", "250px"); 
container.style.setProperty("border", "1px solid #999999"); 
document.body.appendChild(container);

// append canvas as a child of container for this
var effect_node = document.createElement("div");
effect_node.setAttribute("id", "effect_node");
container.appendChild(effect_node);

var effect_node = document.createElement("div");
effect_node.setAttribute("id", "effect_node");
container.appendChild(effect_node);
    
tcCSSEffects();
