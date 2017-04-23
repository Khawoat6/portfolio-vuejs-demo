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
            title: 'I\'m a mobile/web developer based in Kuala Lumpur.',
            subtitle: 'Yes, you read that right.',
        }
    }
}
</script>