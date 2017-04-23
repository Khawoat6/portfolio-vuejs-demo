<template>
    <div id="contact-me" class="contact-me uk-section uk-section-muted">
        <div class="container uk-container">

        <div class="uk-grid-small uk-child-width-expand@s" uk-grid>
            <div>
                <h2>About Me</h2>
                <about-me></about-me>
            </div>
            <div>
                <h2>Latest Articles</h2>
                <blog-posts v-for="post in posts" :key="post.id" v-bind:post="post"></blog-posts>
                <a class="uk-badge" target="_blank" :href="blog_url">Read More&hellip;</a>
            </div>
        </div>

        </div>
    </div>
</template>

<script>
import BlogPosts from './BlogPosts.vue';
import AboutMe from './AboutMe.vue';

export default {
    components: {
        'blog-posts': BlogPosts,
        'about-me': AboutMe
    },

    data() {
        return {
            posts: [],
            blog_url: 'http://blog.aimanbaharum.com',
            github_url: 'https://github.com/aimanbaharum',
            twitter_url: 'https://twitter.com/_aimanb',
            facebook_url: 'http://stackoverflow.com/users/996701/aimanb'
        }
    },

    created() {
        this.$http.get(ghost.url.api('posts', {limit: 3})) // Read http://api.ghost.org/docs/ajax-calls-from-an-external-website
            .then(response => {
                if (response.ok) {
                    var response_data = response.data.posts;
                    
                    response_data.forEach(element => {
                            var d = new Date(element.updated_at);
                            var dateStr = ("0" + d.getDate()).slice(-2) + "/" + ("0"+(d.getMonth()+1)).slice(-2) + "/" + d.getFullYear();

                            this.posts.push({
                                title: element.title,
                                updated_at: dateStr,
                                author: 'Aiman Baharum',
                                tag: 'Article',
                                img: 'http://loremflickr.com/100/80?random=4',
                                url: 'http://blog.aimanbaharum.com' + element.url
                            })
                        }, this);
                }
            }, response => {
                console.log(response);
            });
    }
}
</script>