<template>
    <div class="banner uk-section">
        <div class="container uk-container uk-container-expand">
            <h1 class="uk-text-center" v-html="title"></h1>

            <p class="uk-text-center">{{ subtitle }}</p>

            <button v-on:click="sendEmail" class="uk-button uk-button-primary uk-position-relative uk-margin-medium uk-position-center">Hire Me</button>
        </div>
    </div>
</template>


<script>
export default {
    data() { // ES6 syntax for lambda expression
        return {
            title: 'I\'m a <b>mobile/web developer</b> based in Kuala Lumpur.',
            subtitle: 'Yes, you read that right.',
        }
    },

    methods: {
        sendEmail: function() {
            window.location = "mailto:aiman.baharum@outlook.com?body=Dear Aiman, you're hired! Kthxbye&subject=We are hiring you, Aiman";
        }
    }
}
</script>