<template>
<div>
    <p class="uk-text-meta">
        {{ about_me }}
    </p>
    <p class="uk-text-meta" v-html="lorem">
    </p>
    <a :href="twitter_url" class="uk-icon-button uk-margin-small-right" uk-icon="icon: twitter"></a>
    <a :href="facebook_url" class="uk-icon-button  uk-margin-small-right" uk-icon="icon: facebook"></a>
    <a :href="github_url" class="uk-icon-button" uk-icon="icon: github"></a>
</div>
</template>

<script>
export default {
    data() {
        return {
            about_me: "I'm a mobile and web developer based in Kuala Lumpur, Malaysia. I have 2+ years on doing Android development in native code (Java). Also a year of industrial experience in web development. I'm passionate to learn more on improving myself to become a good (if not, better) programmer, who stands for better organization in code writing and deployment cycle.",
            lorem: `
                <b>Favorite motto:</b> My life is a mess, but I like to keep my code clean :^)
                <br><br>
                This is a demo of my portfolio website using Vue JS and UIKit CSS framework. Source code can be found on <b><a href="https://github.com/aimanbaharum/portfolio-uikit-demo">here</a></b>.
                `
        }
    }
}
</script>