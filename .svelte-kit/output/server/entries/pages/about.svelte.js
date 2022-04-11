import { c as create_ssr_component, v as validate_component } from "../../chunks/index-1e54ea6c.js";
import { H as Header } from "../../chunks/header-c9afc74b.js";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<head><title>Novao Technologies</title></head>
<body>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
</body>`;
});
export { About as default };
