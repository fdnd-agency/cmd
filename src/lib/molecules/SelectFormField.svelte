<script>
	import Icon from '$lib/atoms/Icon.svelte'
	import Label from '$lib/atoms/Label.svelte'
    import SelectField from '$lib/atoms/inputfields/SelectField.svelte'

	export let iconSrc
	export let labelFor
	export let labelText
	export let selectName;
	export let selectId;
	export let selectPlaceholder;
	export let options;
    export let isRequired;
</script>

<div class="form-field">
	<span>
		<Icon {iconSrc} --icon-width="1.4rem"></Icon>
		<Label {labelFor} {labelText}></Label>
	</span>

	<SelectField {selectName} {selectId} {selectPlaceholder} {options} {isRequired}></SelectField>
</div>

<style>
    .form-field {
        display: flex;
        flex-direction: column;
    }
	span {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 0.3rem;
		margin-bottom: 0.3rem;
	}
</style>
