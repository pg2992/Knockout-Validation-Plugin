$(function(){
	
	//Extenders are functions for observables which are executed whenver the observable property has
	//been changed.  provide an easy and flexible way to do this type of augmentation to an observable.
	// first parameter is the observable itself. second is the options passed to it.
	// it can return an observable or computed property which is some how related to observable.
	ko.extender.min = function(target, options){
		var _defOptions = {
			length : 2,
			message : "Minimum required length didn't satified."
		};

		var optionsToUse = kvUtility(_defOptions,options);

		if(target && typeOf(target) === "string"){
			if(target.length >= optionsToUse.length){
				return true;
			}
		};
		return false;
	}








});



var kvUtility = {
	merge : function(obj1, obj2){
		var temp = {};
		for(var key in Object.Keys(obj1)){
			temp[key] = obj1[key];
		}
		for(var key in Object.Keys(obj2)){
			temp[key] = obj2[key];
		}
		return temp;
	}

}