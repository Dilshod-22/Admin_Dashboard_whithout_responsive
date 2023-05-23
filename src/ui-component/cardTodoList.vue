<template>
    <div class="card">
        <hr/>
        <div class="flex w-full justify-between items-center py-5 px-5">
          <div class="flex space-x-3 justify-between items-center">
            <div class="line"></div>
            <div class="text-md">
              <h2>{{ todoinfo.title }}</h2>
              <p>{{ todoinfo.clock }}</p>
            </div>
          </div>
           <input class="" type="checkbox" v-if="todoinfo.check" checked/>
           <input class="" type="checkbox" v-else/>
        </div>
    </div>
</template>

<script>
export default({
    name:"todoList",
    props:{
      todoinfo:{
        type:Object,
        required:true
      }
    }
})
</script>

<style scoped>

.card{
  height:90px;
}

.card div button{
  width:42px;
  height:28px;
  border-radius:4px;
  font-size:12px;
  cursor:pointer;
}
.line{
    height:43px;
    width:3px;
    background-color: blue;
}
</style>