<template>
    <div class="banner uk-section">
        <div class="container uk-container uk-container-expand">
            <h1 class="uk-text-center">{{ title }}</h1>

            <p class="uk-text-center">{{ subtitle }}</p>

            <button class="uk-button uk-button-primary uk-position-relative uk-margin-medium uk-position-center">Hire Me</button>
        </div>
    </div>
</template>


<script>
export default {
    data() { // ES6 syntax for lambda expression
        return {
            title: 'I\'m a web developer based in Malaysia',
            subtitle: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.',
        }
    }
}
</script>