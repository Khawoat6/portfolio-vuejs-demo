<template>
    <a target="_blank" :href="project.link">
        <div class="uk-card uk-card-small uk-card-default uk-card-hover">
            <div class="uk-card-media-top">
                <img :src="project.img" :alt="project.name">
            </div>
            <div class="uk-card-body">
                <h3>{{ project.name }}</h3>
                <p class="uk-text-small">{{ project.description }}</p>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    props:['project'],
}
</script>

<style scoped>
img {
    width: 150px;
    height: auto;
}

a {
    text-decoration: none;
}
</style>