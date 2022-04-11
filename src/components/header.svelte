<!-- website: Novao Technologies' website, written with SvelteKit.
	Copyright (C) 2022  Judah Brown, on behalf of Novao Technologies

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
	import Logo from './logo.svelte';
	import '@fontsource/jetbrains-mono';
</script>

<div id="header">
	<div id="left">
		<Logo type="light" color="#FFFFFF" size="50px" />
	</div>
	<div id="right">
		<a href="/" class="navlink"><span>Home</span></a>
		<span class="navlink">-</span>
		<a href="/about" class="navlink"><span>About</span></a>
		<span class="navlink">-</span>
		<a href="/work" class="navlink"><span>Our Work</span></a>
	</div>
</div>

<style>
	@media (prefers-color-scheme: dark) {
		:root {
			--nav-background-color: #2e2e2e;
			--links-inactive-color: #b9b9b9;
		}
	}
	@media (prefers-color-scheme: light) {
		:root {
			--nav-background-color: #ffffff;
			--links-inactive-color: #2e2e2e;
		}
	}
	#header {
		background-color: var(--nav-background-color);
		padding-top: 7.5px;
		padding-bottom: 7.5px;
		padding-right: 20px;
		padding-left: 7.5px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
		display: flex;
		height: 50px;
		justify-content: space-between;
		align-items: center;
	}
	#left {
		height: min-content;
	}
	#right {
		height: min-content;
	}
	.navlink {
		transition: color 0.5s;
		font-family: 'JetBrains Mono';
		color: var(--links-inactive-color);
		text-decoration: none;
		size: 10%;
	}
	a.navlink:hover {
		color: rgba(24, 180, 177, 1);
	}
</style>
