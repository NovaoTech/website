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

<div id="footer">
    <div id="logo">
        <Logo type="mono" color="#2e2e2e" size="100px"/>
    </div>
    <div id="info">
        <div class="child"><span>🄯 2022 Novao Technologies</span></div>
        <div class="child"><span>All wrongs reserved</span></div>
        <div class="child"><a href="https://github.com/novaotech/website/">Code available here</a></div>
    </div>
</div>

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
    #footer{
        background-color: var(--foot-background-color);
        height: 40vh;
        min-height: min-content;
    }
    #logo {
        padding: 2vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .child {
        display: flex;
        justify-content: center;
        flex-direction: row;
    }
    span {
		transition: color 0.5s;
		font-family: 'JetBrains Mono';
		color: var(--foot-text-color);
        font-weight: 600;
		text-decoration: none;
		size: 10%;
	}
    a {
        color: var(--foot-text-color);
        transition: color 0.5s;
		font-family: 'JetBrains Mono';
		color: var(--foot-text-color);
        font-weight: 600;
    }
    a:hover {
		color: rgba(24, 180, 177, 1);
	}
</style>
