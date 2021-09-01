<template>
    <div class="story">
        <span class="score">
            {{story.score}}
        </span>
        <a :href="story.url" target="_blank" >{{story.title}}</a><span></span>
        <span>{{story.url}}</span><br> by 
        <router-link :to="'/user/'+story.by">
        <span class="meta hoverEffect">{{story.by}}</span></router-link>
        <span class="meta">
            | {{story.time}} Ago | 
            <router-link :to="'/story/' + story.id">
            {{story.descendants}} <span class="hoverEffect">comments</span>
            </router-link>
        </span>
        
    </div>
</template>
<script>
export default {
    props: ['story']
}
</script>
<style scoped>
  .story {
    background-color: #fff;
    padding: 20px 30px 20px 80px;
    border-bottom: 1px solid #eee;
    position: relative;
    line-height: 20px;
  }
  .score {
    color: #f60;
    font-size: 1.1em;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 0;
    width: 80px;
    text-align: center;
    margin-top: -10px;
  }
  .story a {
    color: #34495e;
    font-weight: 600;
    text-decoration: none;
  }
  .story a span {
    font-size: 0.85em;
    color: #828282;
  }
  .story .meta {
    font-size: 0.85em;
    color: #828282;
  }
  .hoverEffect{
    color: grey;
    cursor: pointer;
    font-size: 14px;
    text-decoration: underline;
  }
  .hoverEffect:hover{
    color: #f60;
  }
</style>