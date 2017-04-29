<template>
    <div class="header">
        <div class="container">
            <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                <div class="uk-navbar-left">
                    <a class="uk-navbar-item uk-logo uk-text-bold" :href="home_url">aiman<span class="red">baharum</span></a>
                </div>
                
                <menulist></menulist>
            </nav>
        </div>
    </div>
</template>

<script>
import MenuList from './MenuList.vue';

export default {
    components: {
        'menulist': MenuList
    },
    data() { // ES6 syntax for lambda expression
        return {
            home_url: document.URL,
        }
    }
}
</script>