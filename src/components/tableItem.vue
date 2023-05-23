<template>
  <div class="item flex h-[37px] items-center">
    <input type="checkbox" class="w-10" checked v-if="information.completed" @click='$emit("activeUpdate",information.id)'/>
    <input type="checkbox" class="w-10" v-else @click='$emit("activeUpdate",information.id)'>
    <h1 class="text-2xl w-96 text-center" :class="[information.completed ? 'text-[rgb(211,211,211,.8)]' : 'text-black']">{{ information.name }}</h1>
    <button @click='$emit("onRemove",information.id)' class="h-6 w-6 ">X</button>
  </div>
</template>

<script>

export default {
    props:{
        information:{
            type:Object
        }
    }
};

</script>

<style>
    .item{
        border:1px solid lightgray
    }
    .item:nth-child(even){
        background-color: rgb(211, 211, 211,.6);
    }
</style>
