<template>
    <div>
        <div class="titleItem px-5 w-full h-12">
          <h6>{{ page.url }}</h6>
          <h6>{{ page.visitors }}</h6>
          <h6>{{ page.uniqueUser }}</h6>
          <h6>{{ page.bounce }}</h6>
        </div>
    </div>
</template>

<script>
    export default ({
      props:{
        page:{
          type:Object,
          required:true
        }
      }
    })
</script>

<style scoped>
.titleItem{
  display: grid;
  align-items: center;
  grid-template-columns:35% 15% 20% 30%;
  border:1px solid rgb(211, 211, 211, .5);
  border-left: none;
  border-right: none;
  border-bottom:none
}

.titleItem h6{
  font-size: 11px;
}

</style>