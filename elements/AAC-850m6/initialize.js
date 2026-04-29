function(instance, context) {
	const $toggle = jQuery(`<input class="cz-switch" type="checkbox" />`);
    instance.canvas.append($toggle);
    instance.canvas.addClass("cz-switch-container");
    instance.data.$toggle = $toggle;
    
    $toggle.click(function (evt) {
        evt.stopPropagation();
    });
    
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
        updateValue($toggle.is(":checked"));
        instance.triggerEvent("changed");
    });
    
    
    instance.data.updateStyle = function updateStyle(style) {
        if (CDBubbleUtils.shallowEqual(style, instance.data.style)) {
            return;
        }
        
        instance.data.style = style;
        
        $toggle.css({
            "--cz-switch-handle-padding": style.padding + "px",
            "--cz-switch-bg-on": style.background_color_on,
            "--cz-switch-bg-off": style.background_color_off,
            "--cz-switch-bg-disabled": style.background_color_disabled,
            "--cz-switch-bg-disabled-off": style.background_color_disabled_off,
            "--cz-switch-handle-on": style.handle_color_on,
            "--cz-switch-handle-off": style.handle_color_off,
            "--cz-switch-handle-disabled": style.handle_color_disabled,
            "--cz-switch-handle-disabled-off": style.handle_color_disabled_off,
            "--cz-switch-handle-border-color": style.handle_border_color,
            "--cz-switch-handle-border-width": style.handle_border_width + "px",
            "--cz-switch-border-color": style.border_color,
            "--cz-switch-border-width": style.border_width + "px",
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