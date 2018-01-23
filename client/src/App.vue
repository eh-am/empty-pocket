<template>
  <div id="app">
    <page-header></page-header>

    <links-list></links-list>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader';
import LinksList from './components/LinksList';

export default {
  name: 'app',
  components: {
    'page-header': PageHeader,
    'links-list': LinksList
  },
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

#menu ul{
  list-style: none;
  display: flex;
  padding-left: 0;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
}

</style>
