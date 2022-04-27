<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export function load({ error, status }) {
    return {
      props: {
        error: `${status}`,
        errorMessage: `${error.message}`,
      },
    };
  }
</script>

<script>
  export let error;
  export let errorMessage;
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import Cover from "../components/cover.svelte";

  let coverMessage;
  let coverMessageList = ["404"];
  let coverMessages = {
    "401": "You can't be here, mate.",
    "404": "Lost & Unfound",
    "418": "Fill 'er up!",
  };

  let contentMessage;
  let contentMessageList = ["404"];
  let contentMessages = { "404": "This page doesn't exist." };

  if (coverMessageList.includes(error)) {
    coverMessage = coverMessages[error];
  } else {
    coverMessage = "An error occured";
  }

  if (contentMessageList.includes(error)) {
    contentMessage = contentMessages[error];
  } else {
    contentMessage = `Oh noes! There's an error! That's all we know. (HTTP-${error})`;
  }
</script>

<svelte:head>
  <title>{error} | Novao</title>
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
    <Cover inner="<span>{coverMessage}</span>" />
  {:else}
    <Cover
      inner="<span>{error}</span>"
      style="padding: 10px; color: rgba(0,0,0,.60);font-family: 'JetBrains Mono'; font-weight: 500; font-size: 14vh;"
    />
  {/if}
  <div id="content">
    <h1>{contentMessage}</h1>
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
    text-align: center;
  }
  #header {
    position: fixed;
    width: 100vw;
  }
  #content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3vh;
    font-size: large;
  }
</style>
