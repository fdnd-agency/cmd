<script>
	import UploadForm from '$lib/organisms/UploadForm.svelte';
    import FullScreenButton from '$lib/molecules/FullScreenButton.svelte';

    export let data;
</script>

<main>
	<section>
		<!-- Heading -->
		<header>
			<h1>Werkvorm uploaden</h1>
			<p>
                Voeg hier jouw werkvorm toe en deel deze met collega's.
			</p>
		</header>

		<!-- Upload Form -->
        <UploadForm
            formAction="?/create-werkvorm"
            formMethod="POST"
            btnText="Werkvorm Uploaden"
            {data}
        ></UploadForm>
	</section>
</main>

<FullScreenButton />

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 6rem var(--unit-large);
	}

    section {
        display: flex;
        flex-direction: column;
        /* margin-top: 4rem; */
        gap: 3rem;
        max-width: 25rem;
    }

    header {
        display: flex;
        flex-direction: column;
        row-gap: var(--unit-small);
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 700;
    }

    header > p {
        font-size: 0.9rem;
        font-weight: 400;
    }

	@media (min-width: 48rem) {
        section {
            flex-direction: row;
            gap: var(--unit-large);
            margin: 0 auto;
            max-width: unset;
            position: relative;
            top: 0;
        }

        header {
            justify-content: center;
            max-width: 20rem;
        }
	}

    @media (min-width: 64rem){
        section{
            gap: 4rem;
        }

        header h1 {
            font-size: 3rem;
        }

        header > p {
            font-size: var(--unit-default);
        }
    }
</style>
