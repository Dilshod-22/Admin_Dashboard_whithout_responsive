<template>
    <div class="card">
        <hr/>
        <div class="flex w-full justify-between items-center py-5 px-5">
          <div class="flex space-x-3 justify-between items-center">
            <Avatar icon="pi pi-user" shape="circle"/>
            <div class="text-md">
              <h2>{{ cardinfo.name }}</h2>
              <p>{{ cardinfo.status }}</p>
            </div>
          </div>
           <button class="text-white bg-lightBlue">Add</button>
        </div>
    </div>
</template>

<script>
export default({
    name:"Card",
    props:{
      cardinfo:{
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
</style>