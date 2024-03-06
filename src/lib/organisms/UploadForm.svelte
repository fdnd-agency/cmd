<script>
  import { applyAction, enhance } from "$app/forms";
  import { onMount } from "svelte";

  import FormField from "$lib/molecules/FormField.svelte";
  import SelectFormField from "$lib/molecules/SelectFormField.svelte";
  import FileFormField from "$lib/molecules/FileFormField.svelte";
  import Button from "$lib/atoms/Button.svelte";
  import LimitedFormField from "../molecules/LimitedFormField.svelte";

  export let formAction;
  export let formMethod;
  export let btnText;
  export let data;
  export let newValidator = new Array();

  data = data.data;
  console.log(data)
  let tagOptions = data.tag.map((tag) => {
    return {
      id: tag.id,
      label: tag.title,
      value: tag.value,
    };
  });

  // Convert email field to titel field
  const contactpersoonObj = data.contact.map(({ email: title, ...rest }) => ({
    ...rest,
    title,
  }));

  let loading = false;
  let showUpload = true;
  let showVerify = false;

  const handleSubmit = () => {
    loading = true;
    return async ({ result }) => {
      await applyAction(result);
      loading = false;
    };
  };

  const toggleUpload = () => {
    showUpload = !showUpload;
    showVerify = !showVerify;
  };
  function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }

  function isEmpty(element, index, array) {
        return element === " ";
      }

  onMount(async () => {
    let errorStandard = document.querySelectorAll("input, select");
    let labelStandard = document.querySelectorAll("label");
    let listValidator = document.querySelector(".validator");
    let submitButton = document.querySelector("button");
    let removed = false;

    for (let i = 0; i < errorStandard.length; i++) {
      errorStandard[i].setCustomValidity(
        "Vul " + labelStandard[i].innerHTML + " in."
      );
      newValidator.push(errorStandard[i].validationMessage);
      newValidator = newValidator;



      ["change", "input"].forEach(function (e) {
        errorStandard[i].addEventListener("input", () => {
          console.log(newValidator);
          if (errorStandard[i].validity.valid == true) {
            // newValidator.pop();
            // newValidator = removeDuplicates(newValidator);
            if (!errorStandard[i].classList.contains("removed-class")) {
              newValidator.splice(i, 1, " ");
              newValidator = newValidator;
              errorStandard[i].classList.add("removed-class");
              removed = true;
            }

            if (newValidator.every(isEmpty)) {
              listValidator.classList.toggle("validator-hidden");
            }
          } else if (errorStandard[i].validity.valueMissing == true) {
            errorStandard[i].setCustomValidity(
              "Vul " + labelStandard[i].innerHTML + " in."
            );
            newValidator.splice(i, 0, errorStandard[i].validationMessage);
            newValidator = removeDuplicates(newValidator);
            errorStandard[i].classList.remove("removed-class");
            removed = false;
            return newValidator;
          } else {
            errorStandard[i].setCustomValidity("");
          }
          // if(newValidator[i].includes(" ")){
          //         newValidator.splice(i, 1);
          // }
        });
      });
    }
    submitButton.addEventListener("click", () => {
      if (listValidator.classList.contains("validator-hidden")) {
        listValidator.classList.toggle("validator-hidden");
      }
    });
  });
</script>

<ul class="validator-hidden validator">
  {#each newValidator as newValidators}
    <li>{newValidators}</li>
  {/each}
</ul>
<form
  action={formAction}
  method={formMethod}
  use:enhance={handleSubmit}
  class:showLogin={showUpload}
  on:submit={toggleUpload}
  enctype="multipart/form-data"
>
  <div class="form-content">
    <!-- Naam -->
    <FormField
      iconSrc="/images/icons/user.svg"
      labelFor="werkvormName"
      labelText="Naam werkvorm"
      inputType="text"
      inputPlaceholder="Vul een naam in..."
      inputName="werkvormName"
      inputId="werkvormName"
      isRequired={true}
      inputHint="Bijv. Waarom is X belangrijk voor jou?"
    />

    <!-- Korte beschrijving -->
    <LimitedFormField
      iconSrc="/images/icons/description.svg"
      labelFor="werkvormShortDesc"
      labelText="Korte beschrijving werkvorm"
      inputType="text"
      inputPlaceholder="Vul een korte beschrijving in..."
      inputName="werkvormShortDesc"
      inputId="werkvormShortDesc"
      isRequired={true}
      maxLength="200"
      inputHint="Schrijf hier een korte beschrijving van de werkvorm."
    />

    <!-- Beschrijving -->
    <FormField
      iconSrc="/images/icons/description.svg"
      labelFor="werkvormDesc"
      labelText="Beschrijving werkvorm"
      inputType="textarea"
      inputPlaceholder="Beschrijf de werkvorm..."
      inputName="werkvormDesc"
      inputId="werkvormDesc"
      isRequired={true}
      inputHint="Schrijf hier een uitgebreide beschrijving van de werkvorm."
    />

    <!-- Opleiding -->
    <SelectFormField
      iconSrc="/images/icons/school.svg"
      labelFor="werkvormOpleiding"
      labelText="Opleiding"
      selectName="werkvormOpleiding"
      selectId="werkvormOpleiding"
      selectPlaceholder="Selecteer een opleiding..."
      options={data.course}
      isRequired={true}
    />

    <!-- Contactpersoon -->
    <SelectFormField
      iconSrc="/images/icons/contact.svg"
      labelFor="werkvormContactpersoon"
      labelText="Contactpersoon"
      selectName="werkvormContactpersoon"
      selectId="werkvormContactpersoon"
      selectPlaceholder="Selecteer een contactpersoon..."
      options={contactpersoonObj}
      isRequired={true}
    />

    <!-- Thumbnail -->
    <FileFormField
      iconSrc="/images/icons/thumbnail.svg"
      labelFor="werkvormThumbnail"
      labelText="Thumbnail werkvorm"
      inputType="file"
      inputName="werkvormThumbnail"
      inputId="werkvormThumbnail"
      inputPlaceholder="Selecteer een thumbnail..."
      isRequired={true}
      hasMultiple={false}
      accepted={"image/*"}
      inputHint="Bijv. Een afbeelding van de werkvorm."
    />

    <!-- Video -->
    <FileFormField
      iconSrc="/images/icons/video.svg"
      labelFor="werkvormVideo"
      labelText="Video werkvorm"
      inputType="file"
      inputName="werkvormVideo"
      inputId="werkvormVideo"
      inputPlaceholder="Selecteer een video..."
      isRequired={false}
      hasMultiple={false}
      accepted={"video/*"}
      inputHint="Bijv. Een video van de werkvorm."
    />
  </div>

  <Button btnType="submit" {btnText}></Button>
</form>

<!-- After upload message -->
<article class:showVerify>
  <h2>Werkvorm succesvol geüpload.</h2>
  <p>Het kan even duren voor deze zichtbaar is.</p>
</article>

<style>
  .validator-hidden {
    display: none;
  }
  .validator {
    row-gap: var(--unit-small);
    padding: var(--unit-large) var(--unit-large);
    background: var(--color-hva-navy);
    height: 30vh;
  }
  form {
    display: none;
    flex-direction: column;
    row-gap: var(--unit-large);
  }

  .showLogin {
    display: flex;
  }

  .form-content {
    display: flex;
    flex-direction: column;
    padding: var(--unit-large);
    background: var(--form-bg, #1e1649);
    row-gap: var(--unit-default);
  }

  .showVerify {
    display: flex;
  }

  article {
    display: none;
    flex-direction: column;
    justify-content: center;
    row-gap: var(--unit-small);
    padding: var(--unit-large) var(--unit-large);
    background: var(--color-hva-navy);
  }

  article h2 {
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
  }

  article p {
    font-size: 0.9rem;
    font-weight: 400;
    text-align: center;
  }

  @media (min-width: 48rem) {
    form {
      width: 30rem;
      margin-bottom: 5rem;
    }

    article {
      width: 30rem;
    }
  }

  @media (min-width: 170rem) {
    form {
      width: 45rem;
      height: 75rem;
      margin-bottom: 5rem;
    }

    .form-content {
      height: 100%;
      justify-content: space-between;
    }

    article {
      width: 50rem;
    }
  }
</style>
