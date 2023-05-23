<template>
  <div>
    <div class="infoPanel w-full h-64 bg-lightBlue px-8 py-5">
      <div class="infoItem h-[120px] w-[427px] rounded-lg bg-white px-5 py-4">
        <div class="flex justify-between w-full">
          <div>
            <h4 class="text-[gray] text-sm">TOTAL TRAFFIC</h4>
            <h2 class="font-medium">350,897</h2>
          </div>
          <img src="../assets/images/Icon in Circle.svg" alt="" />
        </div>
        <p class="text-[gray] font-light text-sm mt-5">
          <span class="text-[lime] font-light">^ 3.48%</span> Since last month
        </p>
      </div>
      <div class="infoItem h-[120px] w-[427px] rounded-lg bg-white px-5 py-4">
        <div class="flex justify-between w-full">
          <div>
            <h4 class="text-[gray] text-sm">TOTAL TRAFFIC</h4>
            <h2 class="font-medium">350,897</h2>
          </div>
          <img src="../assets/images/Icon in Circle.svg" alt="" />
        </div>
        <p class="text-[gray] font-light text-sm mt-5">
          <span class="text-[lime] font-light">^ 3.48%</span> Since last month
        </p>
      </div>
      <div class="infoItem h-[120px] w-[427px] rounded-lg bg-white px-5 py-4">
        <div class="flex justify-between w-full">
          <div>
            <h4 class="text-[gray] text-sm">TOTAL TRAFFIC</h4>
            <h2 class="font-medium">350,897</h2>
          </div>
          <img src="../assets/images/Icon in Circle.svg" alt="" />
        </div>
        <p class="text-[gray] font-light text-sm mt-5">
          <span class="text-[lime] font-light">^ 3.48%</span> Since last month
        </p>
      </div>
      <div class="infoItem h-[120px] w-[427px] rounded-lg bg-white px-5 py-4">
        <div class="flex justify-between w-full">
          <div>
            <h4 class="text-[gray] text-sm">TOTAL TRAFFIC</h4>
            <h2 class="font-medium">350,897</h2>
          </div>
          <img src="../assets/images/Icon in Circle.svg" alt="" />
        </div>
        <p class="text-[gray] font-light text-sm mt-5">
          <span class="text-[lime] font-light">^ 3.48%</span> Since last month
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.infoPanel {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  grid-auto-rows: minmax(100px, auto);
    margin-bottom:-120px;
}
.infoItem:nth-child(1) {
  grid-row: 1;
  grid-column: 1;
}
.infoItem:nth-child(2) {
  grid-row: 1;
  grid-column: 2;
}
.infoItem:nth-child(3) {
  grid-row: 1;
  grid-column: 3;
}
.infoItem:nth-child(4) {
  grid-row: 1;
  grid-column: 4;
}
</style>
