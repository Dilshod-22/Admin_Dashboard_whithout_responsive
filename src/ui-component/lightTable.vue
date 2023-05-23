<template>
  <div>
    <h1 class="px-5 py-5">Light table</h1>  
    <tableItem v-for="tableInfo in tableInfos" v-bind:tableInfo="tableInfo" />
  </div>
</template>

<script>
import Iconimage from "../assets/images/Image.svg";
import Iconimage2 from "../assets/images/Image (1).svg";
import Iconimage3 from "../assets/images/Image (2).svg";
import Iconimage4 from "../assets/images/Image (3).svg";
import Iconimage5 from "../assets/images/Image (4).svg";
import tableItem from "./tableItem.vue";

export default {
  name: "lightTable",
  data() {
    return {
      tableInfos: [
        {
          title: "Argon Design System",
          price: 2500,
          status: { name: "pending", color: 1 },
          img: Iconimage,
          competition: 60,
        },
        {
          title: "Angular Now UI Kit Pro",
          price: 1800,
          status: { name: "completed", color: 2 },
          img: Iconimage2,
          competition: 100,
        },
        {
          title: "Black Dashboard",
          price: 3150,
          status: { name: "delayed", color: 3 },
          img: Iconimage3,
          competition: 72,
        },
        {
          title: "React Material Dashboard",
          price: 4400,
          status: { name: "on schedual", color: 4 },
          img: Iconimage4,
          competition: 90,
        },
        {
          title: "Vue paper UI Kit Pro",
          price: 2200,
          status: {name:"completed",color:2},
          img: Iconimage5,
          competition: 100,
        },
        {
          title: "Argon Design System",
          price: 2500,
          status: {name:"pending",color:1},
          img: Iconimage,
          competition: 60,
        },
        {
          title: "Angular Now UI Kit Pro",
          price: 1800,
          status: {name:"completed",color:2},
          img: Iconimage2,
          competition: 100,
        },
        {
          title: "Black Dashboard",
          price: 3150,
          status: {name:"delayed",color:3},
          img: Iconimage3,
          competition: 72,
        },
        {
          title: "React Material Dashboard",
          price: 4400,
          status: {name:"completed",color:4},
          img: Iconimage4,
          competition: 90,
        },
      ],
    };
  },
  components: {
    tableItem,
  },
};
</script>

<style>
h1 {
  height: 69px;
  font-size: 17px;
}
</style>

