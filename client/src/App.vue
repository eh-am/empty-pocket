<template>
  <div id="app">
      <div id="banner">
        <div><img src="./assets/ripped.png" alt=""></div>
        <div class="title-wrapper">
          <div >
            <h1>Empty Pocket</h1>
            <h4>My personal list of cool links I've read</h4>
          </div>
        </div>
      </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: #f8f8f6;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}


#banner {
  height: 200px;
  display: grid;
  grid-template-columns: 0fr 1fr;
}

#banner img {
  max-height: 200px;
  float: left;
}

.title-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
