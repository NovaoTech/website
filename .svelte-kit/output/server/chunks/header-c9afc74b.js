import { c as create_ssr_component, a as add_attribute, v as validate_component } from "./index-1e54ea6c.js";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "default" } = $$props;
  let { type = "dark" } = $$props;
  let { size = "100px" } = $$props;
  let types = {
    dark: ["#2e2e2e", "#123587", "#18b4b1"],
    light: ["#b9b9b9", "#123587", "#18b4b1"]
  };
  let colorTypes = ["mono"];
  let colorTypesFunctions = {
    mono() {
      return [color, color, color];
    }
  };
  let selectedType;
  if (colorTypes.includes(type)) {
    selectedType = colorTypesFunctions[type];
  } else {
    selectedType = types[type];
  }
  console.log(selectedType);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<div id="${"logo"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 1080 1080"}"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)}><defs><clipPath id="${"A"}"><path d="${"M0 0h1080v1080H0z"}"></path></clipPath></defs><g clip-path="${"url(#A)"}"><path fill-opacity="${"0"}" d="${"M0 0h1080v1080H0z"}"${add_attribute("fill", selectedType[0], 0)}></path><linearGradient id="${"B"}" x1="${"636.779"}" y1="${"1028.104"}" x2="${"800.883"}" y2="${"110.806"}" gradientUnits="${"userSpaceOnUse"}"><stop offset="${"0%"}"${add_attribute("stop-color", selectedType[1], 0)}></stop><stop offset="${"100%"}"${add_attribute("stop-color", selectedType[2], 0)}></stop></linearGradient><g fill-rule="${"evenodd"}"><path d="${"M121.325 540c0-231.073 187.602-418.675 418.675-418.675S958.675 308.927 958.675 540 771.073 958.675 540 958.675 121.325 771.073 121.325 540zm147.888 218.366h-55.317V514.971h53.99v46.466q0-17.259 17.48-34.075h0 0q17.48-16.817 48.015-16.817h0 0q35.845 0 57.308 23.897h0 0q21.463 23.897 21.463 64.168h0v159.756h-55.317V604.363h0q0-22.127-11.506-34.075h0 0q-11.505-11.949-32.305-11.949h0 0q-20.356 0-32.084 12.391h0 0q-11.727 12.391-11.727 35.403h0v152.233h0zm344.736 0h-71.248l-80.099-243.395h56.644l46.467 147.807h0q3.982 13.276 7.744 27.437h0 0q3.762 14.161 5.532 22.569h0 0q2.212-8.408 5.753-22.569h0 0q3.54-14.161 7.08-26.995h0l45.582-148.249h56.202l-79.657 243.395h0z"}" fill="${"url(#B)"}"></path><path d="${"M54 540c-.021-32.884 3.303-65.663 9.888-97.873 6.396-31.285 15.906-61.834 28.34-91.246 24.468-57.71 59.835-110.16 104.185-154.468 44.308-44.35 96.758-79.717 154.468-104.185 29.412-12.434 59.961-21.944 91.246-28.34C474.337 57.303 507.116 53.979 540 54c32.884-.021 65.663 3.303 97.873 9.888 31.285 6.396 61.834 15.906 91.246 28.34 57.71 24.468 110.16 59.835 154.468 104.185 44.35 44.308 79.717 96.758 104.185 154.468 12.434 29.412 21.944 59.961 28.34 91.246 6.585 32.21 9.909 64.989 9.888 97.873.021 32.884-3.303 65.663-9.888 97.873-6.396 31.285-15.906 61.834-28.34 91.246-24.468 57.71-59.835 110.16-104.185 154.468-44.308 44.35-96.758 79.717-154.468 104.185-29.412 12.434-59.961 21.944-91.246 28.34-32.21 6.585-64.989 9.909-97.873 9.888-32.884.021-65.663-3.303-97.873-9.888-31.285-6.396-61.834-15.906-91.246-28.34-57.71-24.468-110.16-59.835-154.468-104.185-44.35-44.308-79.717-96.758-104.185-154.468-12.434-29.412-21.944-59.961-28.34-91.246C57.303 605.663 53.979 572.884 54 540zm37.87 0a448.74 448.74 0 0 1 9.11-90.278c5.912-28.824 14.664-56.974 26.109-84.072A449.37 449.37 0 0 1 365.65 127.089c27.098-11.445 55.248-20.197 84.072-26.109A448.74 448.74 0 0 1 540 91.87a448.74 448.74 0 0 1 90.278 9.11c28.824 5.912 56.974 14.664 84.072 26.109A449.37 449.37 0 0 1 952.911 365.65c11.445 27.098 20.197 55.248 26.109 84.072A448.74 448.74 0 0 1 988.13 540a448.74 448.74 0 0 1-9.11 90.278c-5.912 28.824-14.664 56.974-26.109 84.072A449.37 449.37 0 0 1 714.35 952.911c-27.098 11.445-55.248 20.197-84.072 26.109A448.74 448.74 0 0 1 540 988.13a448.74 448.74 0 0 1-90.278-9.11c-28.824-5.912-56.974-14.664-84.072-26.109A449.37 449.37 0 0 1 127.089 714.35c-11.445-27.098-20.197-55.248-26.109-84.072A448.74 448.74 0 0 1 91.87 540z"}"${add_attribute("fill", selectedType[0], 0)}></path></g></g></svg></div>`;
});
var index = "";
var header_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(prefers-color-scheme: dark){:root{--nav-background-color:#2e2e2e;--links-inactive-color:#b9b9b9}}@media(prefers-color-scheme: light){:root{--nav-background-color:#ffffff;--links-inactive-color:#2e2e2e}}#header.svelte-kruqnh{background-color:var(--nav-background-color);padding-top:7.5px;padding-bottom:7.5px;padding-right:20px;padding-left:7.5px;box-shadow:0 0 20px rgba(0, 0, 0, 0.3);display:flex;height:50px;justify-content:space-between;align-items:center}#left.svelte-kruqnh{height:min-content}#right.svelte-kruqnh{height:min-content}.navlink.svelte-kruqnh{transition:color 0.5s;font-family:'JetBrains Mono';color:var(--links-inactive-color);text-decoration:none;size:10%}a.navlink.svelte-kruqnh:hover{color:rgba(24, 180, 177, 1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"header"}" class="${"svelte-kruqnh"}"><div id="${"left"}" class="${"svelte-kruqnh"}">${validate_component(Logo, "Logo").$$render($$result, {
    type: "light",
    color: "#FFFFFF",
    size: "50px"
  }, {}, {})}</div>
	<div id="${"right"}" class="${"svelte-kruqnh"}"><a href="${"/"}" class="${"navlink svelte-kruqnh"}"><span>Home</span></a>
		<span class="${"navlink svelte-kruqnh"}">-</span>
		<a href="${"/about"}" class="${"navlink svelte-kruqnh"}"><span>About</span></a>
		<span class="${"navlink svelte-kruqnh"}">-</span>
		<a href="${"/work"}" class="${"navlink svelte-kruqnh"}"><span>Our Work</span></a></div>
</div>`;
});
export { Header as H };
