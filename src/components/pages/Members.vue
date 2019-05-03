<template>
  <div>
    <h1>Members</h1>
    <b-container v-for="role in roles">
      <h2>{{ role }}</h2>
      <b-row>
      <div v-for="data, key in members">
        <b-card-group v-if="role === data.role" deck class="sm-3">
          <router-link
          :to="'members/'+data.id"
          style="cursor: pointer">
            <b-card class="mx-4" overlay :img-src="'../src/assets/members/'+data.id+'.jpg'">
              <div class="card-text">
                <h3>{{ data.name }}</h3>
                <a :href="'mailto:'+ data.email">{{ data.email }}</a>
              </div>
            </b-card>
          </router-link>
        </b-card-group>
        <br>
      </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import memberList from '../../assets/members/data.json';
import mLs from '../../assets/members/data_ori.json';
import MemberDetail from './MemberDetail.vue';

export default {
  data: function(){
    return {
      members: memberList,
      roles: ["Principle","Post-Doctoral","Graduate Student","Alumni"]
    }
  }
}
</script>

<style scoped lang="scss">
img {
  width: 300px;
  opacity: 0.8;
}
.card-text{
  margin-top: 180px;
  padding: 0px;
}

a{
  color: white;
  text-shadow: 0.2px 0.2px #000000;
  text-decoration: none;
}

</style>
