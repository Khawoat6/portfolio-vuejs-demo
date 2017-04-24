<template>
    <div id="projects" class="recent-projects uk-section">
        <div class="container uk-container">

            <h2>My Latest Projects</h2>

            <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>
                <project-card v-for="project in projects" :key="project.id" v-bind:project="project"></project-card>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
export default {
    components: {
        'project-card': ProjectCard
    },
    data() {
        return {
            projects: [
                { name: 'MindFuel', img: './src/assets/img/mindfuel.png', link: 'https://play.google.com/store/apps/details?id=app.aimanbaharum.quoteseveryday',
                    description: 'A very simple app that notifies motivation quotes to you. Based on the idea of how motivational positive quotes can make you feel alive and reviving the drive to do something.'},
                { name: 'Fourdo', img: './src/assets/img/fourdo.png', link: 'https://play.google.com/store/apps/details?id=com.aimanbaharum.eisenhowerblocks',
                    description: 'A productivity app based on the Eisenhower Matrix for task focusing purpose originally created by 34th President of the United States, Dwight Eisenhower.'},
                { name: 'TVCentral', img: './src/assets/img/tvcentral.png', link: 'https://play.google.com/store/apps/details?id=com.aimanbaharum.tvcentral',
                    description: 'Your One Stop Exclusive Video Digital Portal'}
            ],
        }
    }
}
</script>