function(instance, properties, context) {
    if (instance.data.updateValue) {
	    instance.data.updateValue(!instance.data._value);
    }
    instance.triggerEvent("changed");
}