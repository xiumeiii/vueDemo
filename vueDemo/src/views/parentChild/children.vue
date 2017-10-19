<template>
    <div>
        <button @click="increment">+</button>
        <button v-on:click="decrement">-</button>
        <p><span>子组件:{{num}}</span></p>
    </div>
</template>
<style>
</style>
<script>
    export default{
      props:["num"],
      data(){
        return{
        }
      },
      methods:{
        increment(){
            this.$emit("incre");
        },
        decrement(){
            this.$emit("decre");
        }
      }
    }
</script>