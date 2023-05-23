<template>
  <div class="home h-screen w-full flex items-center justify-center">
    <div class="app bg-[rgb(255,255,255,.3)] h-[450px] w-[550px] rounded-lg">
      <HeaderTOP />
      <addItem @addNewItem="addNewItem" />
      <tableList
        :informations="searchHandler(this.informations,filter)"
        @activeUpdate="activeHandler"
        @onRemove="onRemove"
      />
      <buttonBar
        @filterHandler="filterHandler"
        @allClear="allClear"
      />
    </div>
  </div>
</template>

<script>
import HeaderTOP from "./components/header.vue";
import addItem from "./components/addItem.vue";
import tableList from "./components/tableList.vue";
import buttonBar from "./components/buttonBar.vue";
export default {
  data() {
    return {
      informations: [
        {
          name: "Asus",
          completed: false,
          id: 1,
        },
        {
          name: "Acer",
          completed: false,
          id: 2,
        },
        {
          name: "Lenovo",
          completed: true,
          id: 3,
        },
        {
          name: "Dell",
          completed: false,
          id: 4,
        },
      ],
      filter:'All'
    };
  },
  components: {
    HeaderTOP,
    addItem,
    tableList,
    buttonBar
  },
  methods: {
    addNewItem(info) {
      this.informations.push({ name: info, active: false });
      console.log(info);
    },
    activeHandler(id) {
      this.informations.map((c) =>
        c.id == id ? (c.active = !c.active) : console.log()
      );
    },
    onRemove(id) {
      return this.informations = this.informations.filter((c) => c.id !== id);
    },
    allClear(){
      this.informations = []
    },
    searchHandler(arr,filter){
      switch(filter){
        case "active" :
          return arr.filter(c => c.completed == false)
        case "passiv" :
          return arr.filter(c => c.completed == true)
        default :
          return arr
      }
    },
    filterHandler(item){
      this.filter =item
    }
  },
};
</script>


<style>
* {
  box-sizing: border-box;
}
.home {
  background-image: url("./assets/image/128744.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.app {
  border: 1px solid white;
}
::-webkit-scrollbar {
  width: 10px; 
}

::-webkit-scrollbar-track {
  background: white;
}

::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 20px;
  border: 2px solid white;
}
</style>
