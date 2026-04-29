function(instance, properties, context) {


  //Load any data 
	if (instance.data.updateValue) {
		instance.data.updateValue(properties.value);
    }
    instance.triggerEvent("changed");

  //Do the operation



}