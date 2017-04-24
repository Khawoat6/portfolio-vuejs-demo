<template>
  <div>
    <header-section></header-section>
    <hr>
    <banner-section></banner-section>
    <hr>
    <projects-section></projects-section>
    <contact-me-section></contact-me-section>
    <footer-section></footer-section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

.container
{
	width: 1080px;
	margin: 0 auto;
}

.header
{
    padding-top: 20px;
    font-weight: 400;
    font-family: "Lato", sans-serif;
}

.banner 
{
    font-family: "Lato", sans-serif;
}

.recent-projects
{
    font-family: "Lato", sans-serif;
}

.contact-me
{
    font-family: "Lato", sans-serif;
}

.footer
{
    padding-top: 20px;
    padding-bottom: 20px;
    font-family: "Lato", sans-serif;
}

span.red 
{
    color: maroon;
}
</style>
