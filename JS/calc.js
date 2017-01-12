
var weightDisSliderID = "WeightDisValue";
var weightDisIDValue = "WeightDisText";

var rollBarIDFront = "AntiRollFront";
var rollBarIDRear = "AntiRollRear";
var rollBarValues = [1, 65];

var springIDFront = "SpringFront";
var springIDRear = "SpringRear";
var springValues = [274,1371];

var reboundIDFront = "ReboundStiffnessFront";
var reboundIDRear = "ReboundStiffnessRear";
var reboundValues = [3,20];

var BumpStiffness = "BumpStiffnessText";
var BumpStiffnessSliderID = "BumpStiffnessValue";

var bumpIDFront = "BumpFront";
var bumpIDRear = "BumpRear";

function showValue(id, newValue, extrabits)
{
	document.getElementById(id).innerHTML=newValue + extrabits;
}

function calcRange(min,max,weightDis)
{
	return (max-min)*(weightDis/100.0) + min;
}

function UpdateValues()
{
	var weightDis = document.getElementById(weightDisSliderID).value;
	var bump = document.getElementById(BumpStiffnessSliderID).value;
	
	// Show the WeightDistrubution
	showValue(weightDisIDValue,weightDis, "%");
	
	// Show the Anti-Roll Bar values
	var antiFront = calcRange(rollBarValues[0],rollBarValues[1],weightDis);
	showValue(rollBarIDFront,antiFront, "");
	var antiRear = calcRange(rollBarValues[0],rollBarValues[1],100-weightDis);
	showValue(rollBarIDRear,antiRear, "");
	
	// Show the Spring values
	var springFront = calcRange(springValues[0],springValues[1],weightDis);
	showValue(springIDFront,springFront, "");
	var springRear = calcRange(springValues[0],springValues[1],100-weightDis);
	showValue(springIDRear,springRear, "");
	
	// Show the Rebound Stiffness values
	var reboundFront = calcRange(reboundValues[0],reboundValues[1],weightDis);
	showValue(reboundIDFront,reboundFront, "");
	var reboundRear = calcRange(reboundValues[0],reboundValues[1],100-weightDis);
	showValue(reboundIDRear,reboundRear, "");
	
	// Show the Rebound Stiffness values
	
	showValue(BumpStiffness,bump, "%");
	
	var bumpFront = reboundFront * (bump / 100.0);
	showValue(bumpIDFront,bumpFront, "");
	var bumpRear = reboundRear * (bump / 100.0);
	showValue(bumpIDRear,bumpRear, "");
}