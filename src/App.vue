<template>
  <div class="app">
    <Default/>
  </div>
</template>
 
<script>
import Default from './views/Default.vue';

export default ({
  components:{
    Default
  }
})
</script>

<style>
  *{
    margin:0;
    padding:0;
    box-sizing:border-box
  }
  body{
    background:#F6F9FC;
  }
  .app{
    width:1920px;
    margin:0px auto;
  }
</style>