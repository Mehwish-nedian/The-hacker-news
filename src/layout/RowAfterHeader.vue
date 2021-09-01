<template>
    <div class="row">
       <div class="content">
            <p>&lt; 
               <span class="btn" @click="goback" :to="$route.path+ '/'+pageno"> prev </span> {{pageno}}/3 <span  @click="next()"  class="btn">next </span> &gt;</p>
        </div>   
    </div>
</template>

<script>
export default {
    
    data(){
        return{
            pageno : 1,
        }
    },
    created(){this.pageno=1},

    methods: {
        goback(){
            if(this.pageno!=1){
                this.pageno--;    
                this.$emit('Pageno', this.pageno);
                this.updatepath();
            }
        },
        updatepath(){
            const currpath = this.$route.path;
                if(currpath.substring(0, currpath.length-1)=='/top/'){
                    this.$router.push('/top/'+this.pageno);}    
                
                else if(currpath.substring(0, currpath.length-1)=='/new/'){
                    this.$router.push('/new/'+this.pageno);}
                
                else if(currpath.substring(0, currpath.length-1)=='/show/'){
                    this.$router.push('/show/'+this.pageno);}
                
                else if(currpath.substring(0, currpath.length-1)=='/ask/'){
                    this.$router.push('/ask/'+this.pageno);}
                
                else if(currpath.substring(0, currpath.length-1)=='/jobs/'){
                    this.$router.push('/jobs/'+this.pageno);}
                
        },
         next(){
            if(this.pageno<=2){
                this.pageno++;
                this.$emit('Pageno', this.pageno);
                this.updatepath();}
        },


    }

}
</script>
<style scoped>
.row{
    height: 4rem;
    background-color: #fff;
    justify-content: center;
    display: flex;
    align-items: center;
}
.btn{
    cursor: pointer;
}
.btn:hover{
    color: #f60;
}
</style>