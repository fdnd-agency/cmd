<script>
	export let path

	let crumbs = []

	$: {
		const tokens = path.split('/').filter((t) => t !== '')

		let tokenPath = ''
		crumbs = tokens.map((t) => {
			let tUpper = t.charAt(0).toUpperCase() + t.slice(1)

			tokenPath += '/' + t
			return {
				label: tUpper,
				href: tokenPath
			}
		})

		crumbs.unshift({ label: 'Home', href: '/' })
	}
</script>

<header>
    <div>
        <div class="header-wrapper">
            <a href="/">
                <img src="/images/logo.svg" alt="Hogeschool van Amsterdam" width="128" height="28" />
            </a>

            <span>Werkvormen Grote Thema's</span>
        </div>

        <div class="nav-components">
            <nav>
                {#each crumbs as c, i}
                    {#if i == crumbs.length-1}
                        {c.label}
                    {:else}
                        <a href={c.href}>{c.label}</a> &#47;&nbsp;
                    {/if}
                {/each}
            </nav>
        </div>
    </div>
    <img src="/images/hva-triangle.svg" alt="" class="graphic">
</header>

<style>
    header > div {
    padding: var(--unit-large) var(--unit-large) 0;
}

.header-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row wrap;
    column-gap: var(--unit-default);
    row-gap: 0.6rem;
}

span {
    color: var(--color-white);
    font-weight: 800;
    font-size: var(--unit-default);
}

img:first-child {
    max-width: 10rem;
}

img:first-child {
    max-width: 8rem;
}

a {
    text-decoration: underline;
}

.nav-components {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

nav {
    padding: var(--unit-default) 0;
    font-weight: 500;
}

.graphic {
    position: absolute;
    top: 0rem;
    z-index: -1;
    max-width: 70%;
}

@media (min-width: 30rem){
    span{
        font-size: 1.2rem;
    }
}

@media (min-width: 48rem){
    span{
        font-size: 1.8rem;
    }
}

@media (min-width: 64rem){
    span{
        font-size: var(--unit-large);
    }
}

</style>
