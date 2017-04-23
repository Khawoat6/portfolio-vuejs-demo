<template>
    <div class="header">
        <div class="container">
            <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav">
                        <li><p class="logo uk-text-large uk-text-bold">aiman<span class="red">baharum</span></p></li>
                    </ul>
                </div>
                <div class="uk-navbar-right">

                    <ul class="uk-breadcrumb">
                        <li><a href="#projects" uk-scroll>portfolio</a></li>
                        <li><a href="#contact-me" uk-scroll>about me</a></li>
                        <li><a href="#contact-me" uk-scroll>contact me</a></li>
                    </ul>

                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data() { // ES6 syntax for lambda expression
        return {
            title: 'I\'m a mobile/web developer based in Malaysia'
        }
    }
}
</script>