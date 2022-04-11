<script>
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	import Cover from '../components/cover.svelte';
</script>
<svelte:head>
	<title>Novao Technologies</title>
	<meta name="description" content="Novao Technologies is a FOSS company developing open products for the world.">
</svelte:head>
<body>
	<div id="header">
		<Header />
	</div>
	{ #if true }
	<Cover inner="<span>what we do.</span>" style="padding: 10px; color: rgba(0,0,0,.60);font-family: 'JetBrains Mono'; font-weight: 500; font-size: 12.9vh;"/>
	{ :else }
	<Cover inner="<span>we are novao.</span>" style="padding: 10px; color: rgba(0,0,0,.60);font-family: 'JetBrains Mono'; font-weight: 500; font-size: 14vh;"/>
	{ /if }
	<div id="content">
		<h1>We're a <span class="highlight">startup.</span></h1>
		<p class="endpara">This means that we're currently pursuing different projects to work on. Once we have a few ready, we'll update this page with their info :)</p>
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
		font-family: 'JetBrains Mono';
		padding-top: 15px;
		padding-left: 10px;
		color: var(--text-color);
		font-size: 7vh;
	}
	p {
		padding-left: 10px;
		font-family: 'JetBrains Mono';
		color: var(--text-color);
		margin-right: 50vw;
		min-width: 300px;
		font-size: 3vh;
	}
	.endpara {
		margin-bottom: 3vh;
	}
	#header{
		position: fixed;
		width: 100vw;
	}
	.highlight {
		color: none;
		background: linear-gradient(90deg, rgba(18,53,135,1) 0%, rgba(24,180,177,1) 75%);
		-webkit-background-clip: text;
    	-webkit-text-fill-color: transparent;
	}
</style>