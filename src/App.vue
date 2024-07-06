<template>
  <div id="app">
    <H2>DynamicTp</H2>
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <BaseComponent></BaseComponent>-->
    <Layout></Layout>
<!--    <RouterLink to="/search">Search-->
<!--    </RouterLink>-->
<!--    <RouterLink to="/main">Main-->
<!--    </RouterLink>-->
<!--    <RouterView></RouterView>-->
<!--    <Main></Main>-->

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Main from "@/components/Main.vue";
import BaseComponent from './components/BaseComponent.vue'
import Layout from "@/components/Layout.vue";
import NewDtp from "./components/NewDtp.vue"

export default {
  name: 'App',
  components: {
    Layout,
    Main,
    HelloWorld,
    BaseComponent,
    NewDtp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
