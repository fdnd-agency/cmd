<script>
    import { onMount } from 'svelte';
</script>
<section>
    <div>
        <img src="/images/werkvorm-animation.gif" width="300" height="300" alt="animatie" />
    </div>
    <div>
        <h1>Welkom op het platform Werkvormen Grote Thema's</h1>
        <p>Wil jij met jouw studenten werken aan ‘moeilijke’ maatschappelijke vraagstukken?  Vind hier een werkvorm die helpt om grote thema’s bespreekbaar en behapbaar te maken.</p>
    </div>
</section>

<style>
    section {
        padding: var(--unit-default) var(--unit-default) 5rem;
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--unit-default);
    }

    section img {
        width: 150px;
        height: 150px;
    }

    @media (min-width: 768px){
        section {
            width: 90vw;
            grid-template-columns: 1fr 10fr;
        }

        section div:last-child {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }

    @media (min-width: 1024px){
        section {
            width: 80vw;
            margin: 0 auto;
        }
    }

    @media (min-width: 170rem){
        h1{
            font-size: 175%;
        }
		p{
            font-size: 200%;
            max-width: 45rem;
            text-wrap: pretty;
		}
	}
</style>
