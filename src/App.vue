<template>
  <div id="app">
    <router-link class="link" style="font-size: 25px" :to="{ path: '/' }">
      Profile
    </router-link>

    <router-link
      class="link"
      style="font-size: 25px"
      :to="{ path: '/Contact' }"
    >
      Contact
    </router-link>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  margin: 60px;
  text-align: inherit;
}
.Head {
  padding: 30px;
  font-family: cursive;
  text-align: center;
}
.link {
  display: unset;
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  font-family: cursive;
  color: inherit;
}
.label {
  text-align: left;
  font-family: cursive;
  font-size: 20px;
  padding: 5px;
  margin-left: 35px;
  color: black;
}
.router-link-exact-active {
  background-color: hsl(60, 100%, 95%);
}
</style>
