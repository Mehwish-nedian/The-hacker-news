<template>
    <div class="container">
        <item v-for="story in stories" :key="story" :story= story />
    </div>
</template>

<script>
import item from '../components/Item.vue';
export default {
    components: {
        item
    },
    data(){
        return{
            err: null,
            stories: this.$store.state.topstories
        }
    },
    created(){
        console.log(this.$store.state);
        if(this.$store.state.topstories.length ==0){
            this.$store.dispatch('fetchTopStories');
        }
    }
}
</script>