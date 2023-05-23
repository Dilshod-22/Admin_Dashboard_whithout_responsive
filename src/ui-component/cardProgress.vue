<template>
  <div class="card">
    <hr />
    <div class="flex w-full items-center py-5 px-5">
      <div class="flex space-x-3 justify-between items-center w-20">
        <div class="text-md">
          <img :src="progressinfo.img" />
        </div>
      </div>
      <div >
        <div class="mb-1 text-base font-medium">{{ progressinfo.title }}</div>
        <div
          class="w-96 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700"
        >
          <div
            class="bg-gray-600 h-1.5 rounded-full dark:bg-gray-300"
            :style="{width:progressinfo.level}"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Progress",
  props: {
    progressinfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  height: 90px;
}

.card div button {
  width: 42px;
  height: 28px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.line {
  height: 43px;
  width: 3px;
  background-color: blue;
}
</style>
