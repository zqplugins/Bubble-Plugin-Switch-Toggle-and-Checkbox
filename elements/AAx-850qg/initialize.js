function(instance, context) {
	const $toggle = jQuery(`<input class="cz-checkbox" type="checkbox" />`);
    instance.canvas.append($toggle);
    instance.canvas.addClass("cz-checkbox-container");
    instance.data.$toggle = $toggle;
    
    instance.data._value = null;
    
    function updateValue(value, changeDom = true) {
        if (value !== instance.data._value) {
            instance.data._value = value;
            if (changeDom) {
	            $toggle.prop("checked", value);
            }
            instance.publishAutobinding(value);
            instance.publishState("value", value);
        }
    }
    
    instance.data.updateValue = updateValue;
    
    $toggle.change(function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        updateValue($toggle.is(":checked"), false);
        instance.triggerEvent("changed");
    });
    
    $toggle.click(function (evt) {
        evt.stopPropagation();
    });
    
    
    instance.data.updateStyle = function updateStyle(style) {
        if (CDBubbleUtils.shallowEqual(style, instance.data.style)) {
            return;
        }
        
        instance.data.style = style;
        
        $toggle.css({
            "--cz-checkbox-padding": style.padding,
            "--cz-checkbox-border-radius": style.border_radius + "px",
            "--cz-checkbox-bg-on": style.background_color_on,
            "--cz-checkbox-bg-off": style.background_color_off,
            "--cz-checkbox-bg-disabled": style.background_color_disabled,
            "--cz-checkbox-bg-indeterminate": style.background_color_indeterminate,
            "--cz-checkbox-handle-color-on": style.handle_color_on,
            "--cz-checkbox-handle-color-disabled": style.handle_color_disabled,
            "--cz-checkbox-handle-color-indeterminate": style.handle_color_indeterminate,
            "--cz-checkbox-border-color": style.border_color,
            "--cz-checkbox-border-width": style.border_width + "px",
        });
    }
        
    instance.data.updateInitialValue = function updateInitialValue(initialValue) {
        if (initialValue !== instance.data.initialValue) {
			instance.data.initialValue = initialValue;
			updateValue(initialValue);
        }
    }
    
    instance.data.isAutobinding = false;
}