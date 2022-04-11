export { matchers } from './client-matchers.js';

export const components = [
	() => import("../runtime/components/layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/work.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"about": [[0, 3], [1]],
	"work": [[0, 4], [1]]
};