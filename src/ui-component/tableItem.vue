<template>
  <div>
    <hr>
    <div class="tableItem flex items-center px-1">
        <div class="w-20 flex justify-center">
            <img :src="tableInfo.img" alt="" />
        </div>
        <h2 class="w-60">{{ tableInfo.title }}</h2>
        <p class="w-36">${{ tableInfo.price }} USD</p>
        <p class="w-40 flex items-center"><p :style="{background:colors[tableInfo.status.color-1]}"></p> {{ tableInfo.status.name }}</p>
        <div class="w-36 flex justify-start">
          <img src="../assets/images/Fourth Column.svg" alt="">
        </div>
        <div class="flex items-center justify-center">
            <h4 class="w-12">{{ tableInfo.competition }}%</h4>
            <div class="w-32 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 mt-5">
                <div
                    class=" h-1.5 rounded-full"
                    :style="{background:colors[tableInfo.status.color-1],width:`${tableInfo.competition}%`}"
                ></div>
            </div>
            <button class="ml-12">
                <i class="pi pi-ellipsis-v"></i>
            </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tableItem",
  props: {
    tableInfo: Object,
    required: true,
  },
  data(){
    return{
        colors: ["#FB6340", "#2DCE89", "#F5365C", "#11CDEF"],
    }
  }
};
</script>

<style>
    .tableItem{
        height:82px;
    }   
    .tableItem p p{
        height:6px;
        width:6px;
        border-radius:10px;
        margin:0px 7px;
}
</style>
