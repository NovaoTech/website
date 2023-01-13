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
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import Cover from "../components/cover.svelte";
</script>

<svelte:head>
  <title>Our Work | Novao</title>
  <meta
    name="description"
    content="Novao Technology is a FOSS company developing open products for the world."
  />
  <meta property="og:title" content="What We Do." />
  <meta
    property="og:description"
    content="Learn more about projects that Novao has worked on."
  />
  <meta property="og:image" content="/thumb.png" />
</svelte:head>
<body>
  <div id="header">
    <Header />
  </div>
  <Cover inner="<span>what we do.</span>" />
  <div id="content">
    <div class="section">
      <h1>We're a <span class="highlight">startup.</span></h1>
      <p class="endpara">
        This means that we're currently pursuing different projects to work on.
        Once we have a few ready, we'll update this page with their info :)
      </p>
    </div>
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
  @media only screen and (max-width: 700px) {
    #content {
      margin-left: 10vw;
      margin-right: 10vw;
      width: 80vw;
    }
  }
  @media only screen and (min-width: 700px) {
    #content {
      margin-left: 20vw;
      margin-right: 20vw;
      width: 60vw;
    }
  }
  h1 {
    font-family: "JetBrains Mono";
    padding-top: 15px;
    color: var(--text-color);
    font-size: 7vh;
  }
  p {
    font-family: "JetBrains Mono";
    color: var(--text-color);
    font-size: 3vh;
    width: 100%;
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
  #content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .section {
    width: 100vw;
    text-align: center;
  }
</style>
