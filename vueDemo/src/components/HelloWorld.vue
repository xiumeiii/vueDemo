<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/parentChild">父子组件之间通信</router-link>
  </div>
</template>

<script>
// import Counter from './Counter'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '首页'
    }
  },
  components:{
   
  },
  methods:{
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
