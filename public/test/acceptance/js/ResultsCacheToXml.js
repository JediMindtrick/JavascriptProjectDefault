var transformResultsToXml = function(Features){
	//this is merely the root
	var ResultsXML = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
						+ "<testsuites>";

	//output each feature
	for(var i = 0, l = Features.length; i < l; i++){
		var feature = Features[i];
		ResultsXML += _getFeatureXml(feature);
	}

	ResultsXML += "</testsuites>";			
	return ResultsXML;
};

var _getFeatureXml = function (feature) {
	var toReturn = '';
  
  	toReturn += "<testsuite name=\"" 
			+ feature.title + "\" tests=\"" 
			+ feature.Scenarios.length 
			+ "\" failures=\"" + _getFeatureFailures(feature)// calculate # scenarios with failed steps here... results.failed 
			+ "\" time=\"" + ((feature.end_time - feature.start_time ) / 1000).toString() //calculation duration here...current I don't think this is being done... (results.duration/1000) 
			+ "\">";
               
    //output each scenario
	for(var i = 0, l = feature.Scenarios.length; i < l; i++){
		var scenario = feature.Scenarios[i];
		toReturn += _getScenarioXml(scenario);
	}         
                        
    toReturn += "</testsuite>";
  
  	return toReturn;
};

var _getScenarioXml = function(scenario){
	var toReturn = '';
  
  	toReturn += "<testcase name=\"" 
  		+ scenario.title
  		+ "\" time=\"" + ((scenario.end_time - scenario.start_time ) / 1000).toString()
  		+ "\">";
  	 
  	//output each step
	for(var i = 0, l = scenario.Steps.length; i < l; i++){
		var step = scenario.Steps[i];
		toReturn += _getStepXml(step);
	}   
  	 
    toReturn += "</testcase>";
  
  	return toReturn;
};

var _getStepXml = function(step){
	var toReturn = '';
  
  	toReturn = "<testcase name=\"" 
  		+ step.text 
  		+ "\" time=\"" + ((step.end_time - step.start_time ) / 1000).toString()
  		+ "\">";
  		
  		if (status == "fail") {
            text += "<br /><em>" + step.error + "</em>";
        }
    
    if (step.status == "fail"){
    	toReturn += "<failure message=\"" 
    		+ step.error 
    		+ "\"><![CDATA[" 
    		+ step.error 
    		+ "]]></failure>";
    }
    
    toReturn += "</testcase>";
  
  	return toReturn;
};

var _getFeatureFailures = function(feature){
	var toReturn = 0;
	
	for(var i = 0, l = feature.Scenarios.length; i < l; i++){
		if(_scenarioFailed(feature.Scenarios[i])){
			toReturn++;
		}
	}
	
	return toReturn;
};

var _scenarioFailed = function(scenario){
	var toReturn = false;
	
	for (var i = 0, l = scenario.Steps.length; i < l; i++){
		if(scenario.Steps[i].status == 'fail'){
			toReturn = true;
		}
	}
	
	return toReturn;
};