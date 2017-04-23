<template>
    <article class="uk-comment">
        <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-comment-avatar" :src="post.img" alt="">
            </div>
            <div class="uk-width-expand">
                <p class="uk-text-lead"><a target="_blank" class="uk-link-reset" :href="post.url">{{ post.title }}</a></p>
                <p class="uk-text-meta"><span class="red">{{post.tag}}</span> &ndash; {{ post.updated_at }} &ndash; <span class="red">{{post.author}}</span></p>
            </div>
        </header>
    </article>
</template>

<script>
export default {
    props:['post'],
}
</script>