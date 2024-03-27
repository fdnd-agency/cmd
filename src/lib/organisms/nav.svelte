<script>
		import LogoutButton from '$lib/atoms/logout/logout.svelte';
		import { onMount } from 'svelte';

		onMount(async () => {
			console.log(data)
			let logoutAppear = document.querySelector(".logout-button")
			if(data.user){
				logoutAppear.classList.add('appear')

			}
		return ;
	});	
		export let data;
</script>

<nav>
	<!-- Mobiele menu voor kleine schermen -->
	<div class="mobile-menu">
		<details>
			<summary>
				<figure>
					<div>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_937_7)">
								<path
									d="M4 8H20"
									stroke="#F6F6F6"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M4 16H20"
									stroke="#F6F6F6"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_937_7">
									<rect width="24" height="24" fill="white" />
								</clipPath>
							</defs>
						</svg>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="svelte-1gdolbd"
							><g clip-path="url(#clip0_937_18)" class="svelte-1gdolbd"
								><path
									d="M6 6L17.3137 17.3137"
									stroke="#F6F6F6"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="svelte-1gdolbd"
								></path><path
									d="M6 17.3135L17.3137 5.99977"
									stroke="#F6F6F6"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="svelte-1gdolbd"
								></path></g
							><defs class="svelte-1gdolbd"
								><clipPath id="clip0_937_18" class="svelte-1gdolbd"
									><rect width="24" height="24" fill="white" class="svelte-1gdolbd"
									></rect></clipPath
								></defs
							>
						</svg>
					</div>
					<figcaption>menu</figcaption>
				</figure>
			</summary>
			<ul id="mobile-menu">
				<li class="menu-item">
					<button id="filterSearchMobile" class="filterSearch" aria-expanded="false" aria-controls="mega-menu" type="button">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon icon-tabler icon-tabler-filter"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
								d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z"
							/></svg
						>
						filteren & zoeken
					</button>
				</li>
				<li class="menu-item">
					<a class="link-primary" href="/upload" aria-expanded="true">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_1_177)">
								<path
									d="M6.99996 18C5.75223 18 4.55561 17.5259 3.67334 16.682C2.79107 15.8381 2.29541 14.6935 2.29541 13.5C2.29541 12.3065 2.79107 11.1619 3.67334 10.318C4.55561 9.4741 5.75223 9 6.99996 9C7.29464 7.68718 8.15672 6.53348 9.39654 5.79271C10.0104 5.42592 10.6986 5.17154 11.4217 5.04411C12.1449 4.91667 12.8888 4.91868 13.6111 5.05C14.3333 5.18132 15.0198 5.43939 15.6312 5.80948C16.2427 6.17956 16.7672 6.65442 17.1747 7.20693C17.5823 7.75943 17.8649 8.37878 18.0065 9.02959C18.1481 9.68041 18.1459 10.35 18 11H19C19.9282 11 20.8185 11.3687 21.4748 12.0251C22.1312 12.6815 22.5 13.5717 22.5 14.5C22.5 15.4283 22.1312 16.3185 21.4748 16.9749C20.8185 17.6312 19.9282 18 19 18H18"
									stroke="#F6F6F6"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M9 15L12 12L15 15"
									stroke="#F6F6F6"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M12 12V21"
									stroke="#F6F6F6"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_1_177">
									<rect width="24" height="24" rx="4" fill="white" />
								</clipPath>
							</defs>
						</svg>
						upload een werkvorm
					</a>
				</li>
			</ul>
		</details>
	</div>

	<!-- Het desktop menu voor grotere schermen -->
	<ul class="desktop-menu" role="menu" tabindex="0">
		<div class="logout-button">
			<span class="appear"></span>
		<LogoutButton></LogoutButton>
		</div>
		<li>
		<ul class="button-grouper">
		<li role="menuitem">
			<button id="filterSearchDesktop" class="filterSearch"aria-expanded="false" type="button">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_1_168)">
						<path
							d="M4 4H20V6.172C19.9999 6.70239 19.7891 7.21101 19.414 7.586L15 12V19L9 21V12.5L4.52 7.572C4.18545 7.20393 4.00005 6.7244 4 6.227V4Z"
							stroke="#F6F6F6"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1_168">
							<rect width="24" height="24" rx="4" fill="white" />
						</clipPath>
					</defs>
				</svg>
				filteren & zoeken
			</button>
		</li>

		<li role="menuitem">
			<a class="link-primary" href="/upload">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_1_177)">
						<path
							d="M6.99996 18C5.75223 18 4.55561 17.5259 3.67334 16.682C2.79107 15.8381 2.29541 14.6935 2.29541 13.5C2.29541 12.3065 2.79107 11.1619 3.67334 10.318C4.55561 9.4741 5.75223 9 6.99996 9C7.29464 7.68718 8.15672 6.53348 9.39654 5.79271C10.0104 5.42592 10.6986 5.17154 11.4217 5.04411C12.1449 4.91667 12.8888 4.91868 13.6111 5.05C14.3333 5.18132 15.0198 5.43939 15.6312 5.80948C16.2427 6.17956 16.7672 6.65442 17.1747 7.20693C17.5823 7.75943 17.8649 8.37878 18.0065 9.02959C18.1481 9.68041 18.1459 10.35 18 11H19C19.9282 11 20.8185 11.3687 21.4748 12.0251C22.1312 12.6815 22.5 13.5717 22.5 14.5C22.5 15.4283 22.1312 16.3185 21.4748 16.9749C20.8185 17.6312 19.9282 18 19 18H18"
							stroke="#F6F6F6"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M9 15L12 12L15 15"
							stroke="#F6F6F6"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M12 12V21"
							stroke="#F6F6F6"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1_177">
							<rect width="24" height="24" rx="4" fill="white" />
						</clipPath>
					</defs>
				</svg>
				upload een werkvorm
			</a>
		</li>
		
	</ul>
	</li>
	</ul>
</nav>

<style>
	* {
    color: white;
    margin: 0;
}

details {
    content: '';
    cursor: pointer;
}

.button-grouper{
	display: flex;
	flex-flow: row wrap;
}

.logout-button{
	margin-top: calc(var(--unit-large) * -1);
	margin-left: var(--unit-default);
	visibility: hidden;

}
.appear{
	visibility: visible;
}
summary {
    border: 2px solid var(--color-hva-blue-secundary);
    /* Enhanced kleur binnen @supports */
    @supports (--css: variables) {
        background-color: var(--color-hva-blue-secundary-enhanced);
    }
    border-radius: var(--unit-micro);
    list-style: none;
    padding: 0.2rem var(--unit-small);
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

summary::-webkit-details-marker {
    display: none;
}

summary:focus-visible {
    outline: unset;
}

summary:focus {
    border: 2px solid var(--color-hva-pink);
}

nav {
    background-color: var(--color-hva-blue-secundary);
    /* Enhanced kleur binnen @supports */
    @supports (--css: variables) {
        background-color: var(--color-hva-blue-secundary-enhanced);
    }
    box-shadow: 8px 8px #1e1649;
    height: fit-content;
    margin: 0;
    padding: var(--unit-small);
    text-transform: capitalize;
    width: 100%;	
}

nav .mobile-menu {
    align-items: center;
    display: flex;
    height: var(--unit-large);
    justify-content: end;
    position: relative;
}

nav .mobile-menu ul {
    background-color: var(--color-hva-blue-secundary);
    /* Enhanced kleur binnen @supports */
    @supports (--css: variables) {
        background-color: var(--color-hva-blue-secundary-enhanced);
    }
    box-shadow: 8px 8px var(--color-hva-navy);
    display: flex;
    flex-direction: column;
    gap: var(--unit-small);
    padding: var(--unit-small);
    position: absolute;
    right: var(--unit-small);
    top: 3.5rem;
    z-index: 2;
}

nav .mobile-menu ul:hover {
    display: flex;
}

nav .mobile-menu ul a {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: var(--unit-small);
}

nav button {
    background-color: var(--color-hva-blue-secundary);
    /* Enhanced kleur binnen @supports */
    @supports (--css: variables) {
        background-color: var(--color-hva-blue-secundary-enhanced);
    }
    border: unset;
    height: var(--unit-large);
    text-transform: capitalize;
}

nav figure {
    align-items: center;
    display: flex;
    gap: var(--unit-small);
    justify-content: center;
}

/* Filter button */
li.menu-item button,
.desktop-menu li button {
    align-items: center;
    border: 2px solid var(--color-hva-blue-secundary);
    /* Enhanced kleur binnen @supports */
    @supports (--css: variables) {
        border: 2px solid var(--color-hva-blue-secundary-enhanced);
    }
    border-radius: var(--unit-micro);
    display: flex;
    font-size: var(--unit-default);
    gap: var(--unit-small);
    padding: 0.2rem var(--unit-small);
    transition: var(--animation-default) ease-in-out;
    width: 100%;
}

li.menu-item button svg {
    position: static;
}

li.menu-item button:hover,
.desktop-menu li button:hover {
    background-color: var(--color-hva-pink);
    /* Enhanced kleur binnen @supports */
    @supports (--css: variables) {
        background-color: var(--color-hva-pink-enhanced);
    }
}

.desktop-menu li button:focus-within {
    border: 2px solid var(--color-hva-pink);
    /* Enhanced kleur binnen @supports */
    @supports (--css: variables) {
        border: 2px solid var(--color-hva-pink-enhanced);
    }
}

.desktop-menu li button svg {
    position: static;
}

/* Menu button */
nav button figcaption {
    font-family: 'Open sans';
    font-size: 1.25rem;
    font-weight: 500;
    transition: var(--animation-quick) ease-in-out;
}

nav button:hover figcaption {
    font-weight: 700;
}

nav button div svg {
    position: relative;
}

nav button svg {
    display: block;
    position: absolute;
    transition: var(--animation-quick) ease-in-out;
    width: 1.5rem;
}

nav details svg:first-child {
    display: block;
}

nav details svg:last-child {
    display: none;
}

nav ul li button {
    display: block;
}

nav ul li:first-child {
    display: none;
}

.javascriptEnabled nav ul li:first-child {
    display: block;
}

nav details[open] svg:first-child {
    display: none;
}

nav details[open] svg:last-child {
    display: block;
}

/* nav .mobile-menu button:focus-within + ul  {
    display: flex;
  } */

/* Interactive states */
nav a,
nav .menu-item button {
    border: 2px solid var(--color-hva-blue-secundary);
    /* Enhanced kleur binnen @supports */
    @supports (--css: variables) {
        border: 2px solid var(--color-hva-blue-secundary-enhanced);
    }
    border-radius: var(--unit-micro);
    padding: 0.2rem var(--unit-small);
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

nav a:hover,
ul li button:hover {
    background-color: var(--color-hva-pink);
	color: black;
    /* Enhanced kleur binnen @supports */
    @supports (--css: variables) {
        background-color: var(--color-hva-pink-enhanced);
    }
}

nav a:focus,
ul li button:focus {
    background-color: var(--color-hva-blue-secundary);
    border: 2px solid var(--color-hva-pink);
    /* Enhanced kleuren binnen @supports */
    @supports (--css: variables) {
        background-color: var(--color-hva-blue-secundary-enhanced);
        border: 2px solid var(--color-hva-pink-enhanced);
    }
}

/* Primaire ruisknop */
.link-primary {
    align-items: center;
    background: var(--color-hva-pink-enhanced);
    border-radius: var(--unit-micro);
    display: flex;
    gap: var(--unit-small);
    padding: 0.2rem var(--unit-small);
    position: relative;
}

.link-primary::before {
    background-image: url('https://img.freepik.com/free-vector/seamless-grainy-texture-background_1409-2115.jpg');
    background-size: 180%;
    border-radius: var(--unit-micro);
    content: '';
    height: 100%;
    left: 0;
    mix-blend-mode: color-burn;
    position: absolute;
    top: 0;
    width: 100%;
}

.link-primary:hover {
    background: var(--color-hva-pink);
    /* Enhanced kleur binnen @supports */
    @supports (--css: variables) {
        background: var(--color-hva-yellow-contrast);
    }
}

.link-primary:focus {
    border: 2px solid var(--color-hva-pink);
    /* Enhanced kleur binnen @supports */
    @supports (--css: variables) {
        background: var(--color-hva-pink-enhanced);
    }
}

ul.desktop-menu {
    display: none;
}

ul.desktop-menu a {
    align-items: center;
    display: flex;
    gap: var(--unit-small);
}

@media (min-width: 40rem) {
    nav .mobile-menu {
        display: none;
    }

    ul.desktop-menu {
        align-items: center;
        display: flex;
        gap: var(--unit-large);
	justify-content: space-between;
    }
}

@media (min-width: 170rem) {
    button, a{
		font-size: 200% !important;
	}

	.desktop-menu{
		height: 4rem;
	}
}

</style>
