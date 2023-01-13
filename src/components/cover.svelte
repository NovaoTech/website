<!-- website: Novao Technology's website, written with SvelteKit.
	Copyright (C) 2022  Judah Brown, on behalf of Novao Technology

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>. -->
<script>
  import Logo from "./logo.svelte";
  import "@fontsource/jetbrains-mono";

  export let type = "gradient";
  export let color1 = "#123587";
  export let color2 = "#18b4b1";
  export let imageURL = false;
  export let inner = "Novao";
  export let style = "";

  if (type == "color") {
    type = "color";
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
    color1 = "#123587";
    color2 = "#18b4b1";
  }
</script>

{#if type == "color"}
  <div id="cover" style="background: {color1}; {style}">
    {@html inner}
  </div>
{:else if type == "gradient"}
  <div id="cover" class="default-gradient">
    {@html inner}
  </div>
{:else if type == "image"}
  <div id="cover" style="background-image: {imageURL}; {style}">
    {@html inner}
  </div>
{/if}

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
  @media only screen and (max-width: 700px) {
    #cover {
      font-size: 19vw;
    }
  }
  @media only screen and (min-width: 700px) {
    #cover {
      font-size: 12.9vh;
    }
  }
  #cover {
    height: calc(100vh);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #ffffff;
    padding: 10px;
    font-family: "JetBrains Mono";
    font-weight: 600;
  }
  .default-gradient {
    background: linear-gradient(30deg, #123587, #18b4b1);
    background-size: 150% 150%;

    -webkit-animation: defaultgradient 15s ease infinite;
    -moz-animation: defaultgradient 15s ease infinite;
    animation: defaultgradient 15s ease infinite;
  }

  @-webkit-keyframes defaultgradient {
    0% {
      background-position: 96% 0%;
    }
    50% {
      background-position: 5% 100%;
    }
    100% {
      background-position: 96% 0%;
    }
  }
  @-moz-keyframes defaultgradient {
    0% {
      background-position: 96% 0%;
    }
    50% {
      background-position: 5% 100%;
    }
    100% {
      background-position: 96% 0%;
    }
  }
  @keyframes defaultgradient {
    0% {
      background-position: 96% 0%;
    }
    50% {
      background-position: 5% 100%;
    }
    100% {
      background-position: 96% 0%;
    }
  }
</style>
