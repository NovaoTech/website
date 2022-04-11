<script>
	import Logo from './logo.svelte';
	import '@fontsource/jetbrains-mono';

    export let type = "gradient";
    export let color1 = "#123587";
    export let color2 = "#18b4b1";
    export let imageURL = false;
    export let inner = "Novao";
    export let style = "";
    
    if (type == "color") {
        type = "color"
    } else if (type == "gradient") {
        type = "gradient";
        if (!color1) {
           color1 = "#123587";
        }
        if (!color2) {
            color2 = "#18b4b1";
        }
    } else if (type == "image") {
        type = "image";
    } else {
        type = "color";
        color1 = "#123587"
        color2 = "#18b4b1"
    }
</script>

{ #if type == "color" }
<div id="cover" style="background: {color1}; {style}">
    {@html inner}
</div>
{ :else if type == "gradient" }
<div id="cover" style="background: {color1}; background: linear-gradient(30deg, {color1} 10%, {color2} 100%); {style}">
    {@html inner}
</div>
{ :else if type == "image" }
<div id="cover" style="background-image: {imageURL}; {style}">
    {@html inner}
</div>
{ /if }
<style>
	@media (prefers-color-scheme: dark) {
		:root {
			--foot-background-color: #212121;
			--foot-text-color: #404040;
		}
	}
	@media (prefers-color-scheme: light) {
		:root {
			--foot-background-color: #ffffff;
			--foot-text-color: #2e2e2e;
		}
	}
    #cover {
        height: calc(100vh);
        display: flex;
        justify-content: left;
        align-items: flex-end;
    }
</style>
