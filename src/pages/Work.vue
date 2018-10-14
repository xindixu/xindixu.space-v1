<template>
  <div>
    <div class="page-header page-header-small">
      <parallax class="page-header-image"
                style="background-image: url('img/bg/bg10.jpg')">
      </parallax>
      <div class="content-center">
          <div class="container">
              <h1 class="title">Work</h1>
          </div>
      </div>
    </div>

    <br><br>
      <card>
          <tabs slot="raw-content"
                type="primary"
                square centered
                tabContentClasses="tab-subcategories text-center">
              <tab-pane v-for="category in categories">
                  <template slot="label">
                    {{ category }}
                  </template>
                  <b-row>
                    <div v-for="data, key in works">
                      <b-card-group v-if="category === data.category"
                                    deck
                                    class="md">
                          <b-card :title="data.title"
                                  class="work-card mx-4"
                                  :img-src="'img/work/'+data.id+'.png'">
                            <div class="card-text">
                            </div>
                            <router-link :to="'/work/'+data.id">
                                Read more
                            </router-link>
                          </b-card>
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
import { Parallax, Card, Tabs, TabPane} from '@/components';
import workList from '../assets/work/data.json';
export default {
  data: function(){
    return {
      works: workList,
      categories: ["Advertising", "Marketing", "Front-end Devsign", "Craft", "Media Production"]
    }
  },
  components: {
    Parallax,
    Card,
    Tabs,
    TabPane
  }
}
</script>
<style scoped lang="scss">
img {
  width: 300px;
}
.card{
  width: 98%;
  margin: 1% 1%;

  .row {
    margin:1% 1%;
  }

  .work-card{
    max-width: 400px;

    a {
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
