<template>
  <div>
    <div>这是登录页</div>
    <button @click="btn">登录成功</button>

  </div>
</template>

<script>
    export default {
        name: "Login",
      methods:{
          btn(){
             this.$router.push({
               path:'/HelloWorld'
             })
           }
      }
    }
</script>

<style scoped>

</style>
