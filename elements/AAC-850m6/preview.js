function(instance, properties) {
    jQuery("html").height("100%");
    jQuery("body").height("100%");
    jQuery("html").css("overflow", "hidden");
    jQuery("body").css("overflow", "hidden");
    
    
    const $style = jQuery(`
		<style>
    *, *::after, *::before {
		box-sizing: border-box;
	}
	.cz-switch {
        width: 100%;
        height: 100%;
        position: relative;
        background: none;
        outline: none;
        border: none;
        margin: 0;
        padding: 0;
        -moz-appearance: none;
        -webkit-appearance: none;
        -o-appearance: none;
        transition: 0.2s;
    }

    .cz-switch:before {
        cursor: pointer;
        position: relative;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";
        background: var(--cz-switch-bg-off, none);
        border: var(--cz-switch-border-width, 0px) solid var(--cz-switch-border-color, transparent);
        border-radius: 10000px;
        transition: background-color 0.2s;
    }

    .cz-switch:after {
        cursor: pointer;
        position: absolute;
        display: block;
        top: 50%;
        left: calc(var(--cz-switch-border-width, 0px) + var(--cz-switch-handle-padding, 0px));
        transform: translateY(-50%);
        background-color: var(--cz-switch-handle-off, #FFFFFF);
        border: var(--cz-switch-handle-border-width, 1px) solid var(--cz-switch-handle-border-color, #000000);
        height: calc(100% - var(--cz-switch-handle-border-width, 1px) * 2 - var(--cz-switch-handle-padding, 0px) * 2);
        aspect-ratio: 1;
        border-radius: 50%;
        transition: 0.2s;

        content: "";
    }

    .cz-switch:checked:before {
        background-color: var(--cz-switch-bg-on, #39BA76);
    }

    .cz-switch:checked:after {
        left: calc(100% - var(--cz-switch-handle-padding, 0px) - var(--cz-switch-border-width, 0px));
        transform: translate(-100%, -50%);
        background-color: var(--cz-switch-handle-on, #FFFFFF);
    }

    .cz-switch:disabled:before {
        cursor: not-allowed;
        background-color: var(--cz-switch-bg-disabled-off, #E8E8E8);
    }
    
    .cz-switch:disabled:after {
        cursor: not-allowed;
        background-color: var(--cz-switch-handle-disabled-off, #FFFFFF);
    }

    .cz-switch:checked:disabled:before {
        cursor: not-allowed;
        background-color: var(--cz-switch-bg-disabled, #D7D7D7);
    }

    .cz-switch:checked:disabled:after {
        cursor: not-allowed;
        background-color: var(--cz-switch-handle-disabled, #FFFFFF);
    }
    
        </style>
	`);
    
    instance.canvas.append($style);
    const $toggle = jQuery(`<input class="cz-switch" type="checkbox" />`);
    instance.canvas.append($toggle);
    
    $toggle.css({
        "--cz-switch-handle-padding": properties.padding + "px",
        "--cz-switch-bg-on": properties.background_color_on,
        "--cz-switch-bg-off": properties.background_color_off,
        "--cz-switch-bg-disabled": properties.background_color_disabled,
        "--cz-switch-bg-disabled-off": properties.background_color_disabled_off,
        "--cz-switch-handle-on": properties.handle_color_on,
        "--cz-switch-handle-off": properties.handle_color_off,
        "--cz-switch-handle-disabled": properties.handle_color_disabled,
        "--cz-switch-handle-disabled-off": properties.handle_color_disabled_off,
        "--cz-switch-handle-border-color": properties.handle_border_color,
        "--cz-switch-handle-border-width": properties.handle_border_width + "px",
        "--cz-switch-border-color": properties.border_color,
        "--cz-switch-border-width": properties.border_width + "px",
    });

    $toggle.prop("checked", properties.editor_preview_toggle);
    $toggle.prop("disabled", properties.editor_preview_disabled);
}