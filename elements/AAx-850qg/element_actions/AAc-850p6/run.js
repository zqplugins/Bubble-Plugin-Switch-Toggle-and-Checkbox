function(instance, properties, context) {
    if (instance.data.updateValue) {
		instance.data.updateValue(properties.value);
    }
    instance.triggerEvent("changed");
}