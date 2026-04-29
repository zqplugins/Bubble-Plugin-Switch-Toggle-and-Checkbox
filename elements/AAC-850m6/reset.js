function(instance, context) {
    if (!instance.data.isAutobinding) {
        const value = instance.data.initialValue;
        instance.data.updateValue(value);
    } 
}