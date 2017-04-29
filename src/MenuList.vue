<template>
    <div class="uk-navbar-right">

        <div class="menu-expand">
            <ul class="uk-navbar-nav">
                <li v-for="item in items"><a :href="item.anchor">{{ item.name }}</a></li>
            </ul>
        </div>
        
        <div class="menu-shrink">
            <ul class="uk-navbar-nav">
                <li>
                    <a class="uk-navbar-toggle" href="#">
                        <span uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Menu</span>
                    </a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li v-for="item in items" :key="item.id"><a :href="item.anchor">{{ item.name }}</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    // props: ['menulist'], // not used

    data() { // ES6 syntax for lambda expression
        return {
            items: [
                { name: 'Portfolio', anchor: '#projects' },
                { name: 'About Me', anchor: '#contact-me' },
                { name: 'Contact Me', anchor: '#contact-me' }
            ]
        }
    }
}
</script>

<style scope>

.menu-shrink {
    display: none;
}

/*==========  Non-Mobile First Method  ==========*/

/* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {

}

/* Medium Devices, Desktops */
@media only screen and (max-width : 992px) {

}

/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {
    .menu-expand {
        display: none;
    }
    .menu-shrink {
        display: inline-block;
    }
}

/* Extra Small Devices, Phones */ 
@media only screen and (max-width : 480px) {

}

/* Custom, iPhone Retina */ 
@media only screen and (max-width : 320px) {
    
}
</style>