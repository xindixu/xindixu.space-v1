<template>
<div>
  <div class="page-header page-header-small">
    <parallax class="page-header-image" style="background-image: url('img/bg/bg23.jpg')">
    </parallax>
    <div class="content-center">
      <div class="container">
        <h1 class="title display-3">Work</h1>
      </div>
    </div>
  </div>
  <card>
    <tabs slot="raw-content" type="primary" square centered tabContentClasses="tab-subcategories text-center">
      <tab-pane v-for="category in categories">
        <template slot="label">
          {{ category }}
        </template>
        <b-row>
          <div v-for="data, key in works">
            <b-card-group v-if="category === data.category" deck class="md">
              <router-link :to="'/work/'+data.id">
                <b-card :title="data.title" class="work-card mx-4 grow" :img-src="'img/work/'+data.id+'.png'">
                </b-card>
              </router-link>
            </b-card-group>
            <br>
          </div>
        </b-row>
      </tab-pane>
    </tabs>
  </card>

</div>
</template>
<script>
import {
  Parallax,
  Card,
  Tabs,
  TabPane
} from '@/components';
import workList from '../assets/work/data.json';
export default {
  data: function() {
    return {
      works: workList,
      categories: [
        'Front-end Development',
        'Advertising',
        'Marketing',
        'Craft',
        'Media Production'
      ]
    };
  },
  components: {
    Parallax,
    Card,
    Tabs,
    TabPane
  }
};
</script>
<style scoped lang="scss">
img {
    width: 100%;
    height: auto;
}
.card {
    width: 98%;
    margin: 1%;

    .row {
        margin: 1%;
    }

    .work-card {
        width: 300px;
    }
}
a:hover, .card-title:hover {
    text-decoration: none;
    cursor: pointer;
}
.grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(1.05); }

</style>
