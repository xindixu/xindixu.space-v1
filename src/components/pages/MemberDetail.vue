<template>
  <div>
    <b-container class="mt-4">
      <b-row>
      <b-col md="8">
        <h2>{{ p[0].name }}</h2>
        <a :href="'mailto:'+ p[0].email">{{ p[0].email }}</a>

        <hr>

        <h5>Research Interests</h5>
        <p v-html="p[0].researchInterests"></p>

        <div v-if="p[0].technicalSpecialties">
          <h5>Technical Specialties</h5>
          <p v-html="p[0].technicalSpecialties"></p>
        </div>

        <!-- Start of selected publications & current research grants-->
        <div role="tablist">

        <b-card no-body>
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion1>Selected Publications</b-btn>
          </b-card-header>
          <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <div v-for="pub in p[0].selectedPublications" class="card-text">
                <p><strong>{{ pub.title }}</strong></p>
                <p>{{ pub.author }}</p>
                <p>{{ pub.publisher }}</p>
                <p>{{ pub.date }}</p>
                <br>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>

        <div v-if="p[0].currentGrants">
          <b-card no-body>
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.accordion2>Current Research Grants</b-btn>
            </b-card-header>
            <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <div v-for="gra in p[0].currentGrants" class="card-text">
                  <p><strong>{{ gra.title }}</strong></p>
                  <p>Sponsor: {{ gra.sponsor }}</p>
                  <p>Amount: {{ gra.amount }}</p>
                  <p>Dates: {{ gra.dates }}</p>
                  <br>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>

      <div v-if="p[0].mentoredStudents">
        <h5 class="mt-3">Student Mentored</h5>
        <div class="student" v-for="student in p[0].mentoredStudents">
          <div v-for="data, key in student">
            <h5>{{ key }}</h5>
            <b-card-group>
              <b-row>
              <div v-for="d in data">
                <b-card title-tag="h6"
                        sub-title-tag="p"
                        :title="d.name"
                        :sub-title="d.class"
                        class="m-2">
                    <p class="card-text">
                        {{ d.desciption }}
                    </p>
                </b-card>
              </div>
              </b-row>
            </b-card-group>
          </div>
        </div>
      </div>
      </b-col>
      <!-- End of left content-->

      <!-- Start of right content-->
      <b-col md="4">
        <img :src="'../src/assets/members/'+p[0].id+'.jpg'">
        <h5 class="mt-3">Experience</h5>
        <div class="timeline">
          <ul>
            <li v-for="(info, index) in p[0].experience" v-bind:key="index">
              <span></span>
              <div style="font-size: 16px; font-weight: bold">{{ info.school }}</div>
              <div style="font-size: 16px">{{ info.title }}</div>
              <div style="font-style:italic">{{ info.course }}</div>
              <div class="year">
                <span>{{ info.end }}</span>
                <span>{{ info.start }}</span>
              </div>
            </li>
          </ul>
        </div>

        <div v-if="p[0].education">
          <h5>Education</h5>
          <div class="timeline">
            <ul>
              <li v-for="(info, index) in p[0].education" v-bind:key="index">
                <span></span>
                <div style="font-size: 16px; font-weight: bold">{{ info.school }}</div>
                <div style="font-size: 16px">{{ info.title }}</div>
                <div style="font-style:italic">{{ info.course }}</div>
                <div class="year">
                  <span>{{ info.end }}</span>
                  <span>{{ info.start }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </b-col>
    </b-row>

    </b-container>
  </div>
</template>


<script>
import memberList from '../../assets/members/data.json';
export default{
  data(){
    return {
      members: memberList,
      text:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terryrichardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolorbrunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moontempor, sunt aliqua put a bird on it squid single-origin coffee nullaassumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer laborewes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butchervice lomo. Leggings occaecat craft beer farm-to-table, raw denim aestheticsynth nesciunt you probably haven't heard of them accusamus labore VHS."
    }

  },
  props:['id'],
  watch:{
    '$route'(to,from){
      this.id = to.params.id;
    }
  },
  computed:{
    p(){
      return memberList.filter(person => person.id === this.id)
    }
  }
}
</script>


<style scoped lang="scss">
@import '../../styles/_custom.scss';
img {
  border-radius: 50%;
  width: 100%;
  opacity: 0.8;
}
a{
  color:black;
}
hr{
  border-top: 1.5px solid $secondary;
}
.student .card{
  width: 320px;
}
.timeline {
    margin: 0px 30px;
}
.timeline ul {
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
}
.timeline ul::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    height: 100%;
}
.timeline ul li {
    position: relative;
    margin: 50px 35px;
    width: 100%;
}
.timeline ul li > span {
    content: '';
    position: absolute;
    top: 0;
    left: -30px;
    width: 0px;
    height: 100%;
    border: 1.5px solid $primary;
}
.timeline ul li > span::before, .timeline ul li > span::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    left: -5px;
    background-color: $secondary;
}
.timeline ul li > span::before {
    top: -8px;
}
.timeline ul li > span::after {
    top: 100%;
}
.timeline ul li .year span {
    position: absolute;
    font-size: 14px;
    font-weight: bold;
    left: -85px;
    width: 40px;
    text-align: right;
}
.timeline ul li .year span:first-child {
    top: -20px;
}
.timeline ul li .year span:last-child {
    top: 100%;
}
</style>
