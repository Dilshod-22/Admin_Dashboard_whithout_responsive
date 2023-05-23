<template>
    <div class="w-full mt-5 flex justify-center">
        <input class="w-96 h-12 rounded-lg pl-5" type="text" :value="name" placeholder="Create new a todo" required @input="inputUpdate" @keyup.enter="enterkey">
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:""
            }
        },
        methods:{
            inputUpdate(e){
                this.name = e.target.value
            },
            enterkey(){
                this.$emit('addNewItem',this.name)
                this.name=""
            }
        }

    }
</script>

<style>

</style>