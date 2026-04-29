function(instance, properties, context) {
    const $toggle = instance.data.$toggle;

    instance.data.updateStyle(properties);
    if (properties.autobinding !== null && properties.autobinding !== undefined) {
        instance.data.isAutobinding = true;
		instance.data.updateValue(properties.autobinding);
    } else {
        instance.data.isAutobinding = false;
        instance.data.updateInitialValue(properties.initial_value);
    }

    $toggle.prop("disabled", !!properties.disabled);
    $toggle.prop("indeterminate", !!properties.indeterminate);
}