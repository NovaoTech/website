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
  export let color = "default";
  export let type = "dark";
  export let size = "100px";

  // "type name":["border color", "gradient color one", "gradient color two", "url(#B)"]
  let types = {
    dark: ["#2e2e2e", "#123587", "#18b4b1", "url(#B)"],
    light: ["#b9b9b9", "#123587", "#18b4b1", "url(#B)"],
  };

  // Any types on this list use the "color" attribute.
  let colorTypes = ["mono"];
  let colorTypesFunctions = {
    mono: function () {
      return [color, color, color, color];
    },
  };

  // Escape selectedType
  let selectedType;

  if (colorTypes.includes(type)) {
    console.log("colorTypes.includes(type) == true");
    // Set the selectedType variable to the colors from default types.
    selectedType = colorTypesFunctions[type]();
  } else {
    // Set the selectedType variable to the colors from default types.
    selectedType = types[type];
  }
  console.log(selectedType);
</script>

<div id="logo">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1080 1080"
    width={size}
    height={size}
  >
    <defs>
      <clipPath id="A"><path d="M0 0h1080v1080H0z" /></clipPath>
    </defs>
    <g clip-path="url(#A)">
      <path fill-opacity="0" d="M0 0h1080v1080H0z" fill={selectedType[0]} />
      <linearGradient
        id="B"
        x1="636.779"
        y1="1028.104"
        x2="800.883"
        y2="110.806"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stop-color={selectedType[1]} /><stop
          offset="100%"
          stop-color={selectedType[2]}
        />
      </linearGradient>
      <g fill-rule="evenodd">
        <path
          d="M121.325 540c0-231.073 187.602-418.675 418.675-418.675S958.675 308.927 958.675 540 771.073 958.675 540 958.675 121.325 771.073 121.325 540zm147.888 218.366h-55.317V514.971h53.99v46.466q0-17.259 17.48-34.075h0 0q17.48-16.817 48.015-16.817h0 0q35.845 0 57.308 23.897h0 0q21.463 23.897 21.463 64.168h0v159.756h-55.317V604.363h0q0-22.127-11.506-34.075h0 0q-11.505-11.949-32.305-11.949h0 0q-20.356 0-32.084 12.391h0 0q-11.727 12.391-11.727 35.403h0v152.233h0zm344.736 0h-71.248l-80.099-243.395h56.644l46.467 147.807h0q3.982 13.276 7.744 27.437h0 0q3.762 14.161 5.532 22.569h0 0q2.212-8.408 5.753-22.569h0 0q3.54-14.161 7.08-26.995h0l45.582-148.249h56.202l-79.657 243.395h0z"
          fill={selectedType[3]}
        />
        <path
          d="M54 540c-.021-32.884 3.303-65.663 9.888-97.873 6.396-31.285 15.906-61.834 28.34-91.246 24.468-57.71 59.835-110.16 104.185-154.468 44.308-44.35 96.758-79.717 154.468-104.185 29.412-12.434 59.961-21.944 91.246-28.34C474.337 57.303 507.116 53.979 540 54c32.884-.021 65.663 3.303 97.873 9.888 31.285 6.396 61.834 15.906 91.246 28.34 57.71 24.468 110.16 59.835 154.468 104.185 44.35 44.308 79.717 96.758 104.185 154.468 12.434 29.412 21.944 59.961 28.34 91.246 6.585 32.21 9.909 64.989 9.888 97.873.021 32.884-3.303 65.663-9.888 97.873-6.396 31.285-15.906 61.834-28.34 91.246-24.468 57.71-59.835 110.16-104.185 154.468-44.308 44.35-96.758 79.717-154.468 104.185-29.412 12.434-59.961 21.944-91.246 28.34-32.21 6.585-64.989 9.909-97.873 9.888-32.884.021-65.663-3.303-97.873-9.888-31.285-6.396-61.834-15.906-91.246-28.34-57.71-24.468-110.16-59.835-154.468-104.185-44.35-44.308-79.717-96.758-104.185-154.468-12.434-29.412-21.944-59.961-28.34-91.246C57.303 605.663 53.979 572.884 54 540zm37.87 0a448.74 448.74 0 0 1 9.11-90.278c5.912-28.824 14.664-56.974 26.109-84.072A449.37 449.37 0 0 1 365.65 127.089c27.098-11.445 55.248-20.197 84.072-26.109A448.74 448.74 0 0 1 540 91.87a448.74 448.74 0 0 1 90.278 9.11c28.824 5.912 56.974 14.664 84.072 26.109A449.37 449.37 0 0 1 952.911 365.65c11.445 27.098 20.197 55.248 26.109 84.072A448.74 448.74 0 0 1 988.13 540a448.74 448.74 0 0 1-9.11 90.278c-5.912 28.824-14.664 56.974-26.109 84.072A449.37 449.37 0 0 1 714.35 952.911c-27.098 11.445-55.248 20.197-84.072 26.109A448.74 448.74 0 0 1 540 988.13a448.74 448.74 0 0 1-90.278-9.11c-28.824-5.912-56.974-14.664-84.072-26.109A449.37 449.37 0 0 1 127.089 714.35c-11.445-27.098-20.197-55.248-26.109-84.072A448.74 448.74 0 0 1 91.87 540z"
          fill={selectedType[0]}
        />
      </g>
    </g>
  </svg>
</div>
