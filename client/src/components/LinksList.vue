<template>
  <div class="hello">
    <template  v-for="links in cleanedLinks">
      <header><h2>{{ links[0].added }}</h2></header>
      <ul>
        <li v-for="l in links" v-bind:key="l.id" class="link">
          <div class="title">
            {{ l.title }}
          </div>
          <div class="url">
            <a :href="l.url">{{ l.url }}</a>
          </div>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import moment from 'moment';
const m = require('moment');

export default {
  name: 'LinksList',
  data() {
    return {
      links: []
    };
  },
  computed: {
    cleanedLinks: function() {
      let l = this.links;

      l = Object.keys(l).map(id => {
        return {
          title:  l[id].resolved_title,
          url: l[id].resolved_url,
          timestamp: l[id].time_added,
          added: m.unix(l[id].time_added).format('LL')
        }
      })
      .sort(sortByTimestamp);

      const chunks = [];
      
      while (l.length) {
        var currentDay = l[0].added;
        let lastIndex = findLastIndex(l, function (el) { return el.added === currentDay; });

        let spliced =  l.splice(0, lastIndex + 1)
          
        chunks.push(spliced);
      }

      chunks.reverse();

      return chunks;

      function findLastIndex(array, callback){
        const length = array.length - 1;

        return length - Array.from(array).reverse().findIndex(callback);
      }
      
      function sortByTimestamp(a, b) {
        return a.timestamp - b.timestamp;
      }
    }
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch('https://t16vefyv8a.execute-api.us-east-1.amazonaws.com/dev/all', {
        method: 'GET',
        headers: new Headers()
      })
      .then(res => res.json())
      .then(res => {
        this.links = res.list;
      })
      .catch(res => {
        // FIXME
      })
    
    }
  }
};

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
header {
  position: sticky;
  top: 0;
  background: #4e3c88;
  color: white;
  height: 70px;
  line-height: 70px;
}

header:first-child h2 {
  margin-top: 0;
}

ul {
  padding: 20px 0 50px 0;
}

li .url {
  font-size: 14px;
}

.link {
  display: block;
  margin: 20px 20px;

  text-align: left;
}

@media screen and (min-width: 1024px) {
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 1800px) {
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
