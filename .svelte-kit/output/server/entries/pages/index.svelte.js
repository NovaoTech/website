import { c as create_ssr_component, v as validate_component } from "../../chunks/index-1e54ea6c.js";
import { H as Header } from "../../chunks/header-c9afc74b.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<head><title>Novao Technologies</title></head>
<body>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	
	
	
	${validate_component(Header, "Footer").$$render($$result, {}, {}, {})}
</body>`;
});
export { Routes as default };
