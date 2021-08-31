<template>
    <div>
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
            stories: this.$store.state.askstories
        }
    },
    created(){
        console.log('Running...')
        if(this.$store.state.askstories.length==0){
            this.$store.dispatch('fetchAskStories');
            console.log(this.stories);
        }
    }
}
</script>