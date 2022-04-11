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
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import Cover from "../components/cover.svelte";
</script>

<svelte:head>
  <title>Novao Technologies</title>
  <meta
    name="description"
    content="Novao Technologies is a FOSS company developing open products for the world."
  />
</svelte:head>
<body>
  <div id="header">
    <Header />
  </div>
  {#if true}
    <Cover
      inner="<span>we are novao.</span>"
      style="padding: 10px; color: rgba(0,0,0,.60);font-family: 'JetBrains Mono'; font-weight: 500; font-size: 12.9vh;"
    />
  {:else}
    <Cover
      inner="<span>we are novao.</span>"
      style="padding: 10px; color: rgba(0,0,0,.60);font-family: 'JetBrains Mono'; font-weight: 500; font-size: 14vh;"
    />
  {/if}
  <div id="content">
    <h1>Our Code is <span class="highlight">Open.</span></h1>
    <p>
      Open code is essential to technology. Access to source code allows for
      products to be more secure, and it allows anyone to improve and audit the
      infrastructure running our lives and the world.
    </p>
    <h1><span class="highlight">Privacy</span> Is a Right.</h1>
    <p>
      How would you like it if a secret agent stalked you everywhere your feet
      landed? Sounds creepy? Yeah, we think so too. Privacy is a fundamental
      right that everyone should be granted from the get-go, and it should be by
      their own decision that it is violated.
    </p>
    <h1>We Believe in <span class="highlight">Freedom.</span></h1>
    <p>
      Everyone, from developers to users, have fundamental freedoms that must be
      granted. Through open-source licenses and copyleft agreements, we can
      create this ideal world where all have these rights.
    </p>
    <h1>We are <span class="highlight">novao.</span></h1>
    <p class="endpara">
      A FOSS company developing open products for the world.
    </p>
  </div>

  <Footer />
</body>

<style>
  @media (prefers-color-scheme: dark) {
    :root {
      --text-color: #d0d0d0;
    }
  }
  @media (prefers-color-scheme: light) {
    :root {
      --nav-background-color: #ffffff;
      --text-color: #2e2e2e;
    }
  }
  h1 {
    font-family: "JetBrains Mono";
    padding-top: 15px;
    padding-left: 10px;
    color: var(--text-color);
    font-size: 7vh;
  }
  p {
    padding-left: 10px;
    font-family: "JetBrains Mono";
    color: var(--text-color);
    margin-right: 50vw;
    min-width: 300px;
    font-size: 3vh;
  }
  .endpara {
    margin-bottom: 3vh;
  }
  #header {
    position: fixed;
    width: 100vw;
  }
  .highlight {
    color: none;
    background: linear-gradient(
      90deg,
      rgba(18, 53, 135, 1) 0%,
      rgba(24, 180, 177, 1) 75%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
