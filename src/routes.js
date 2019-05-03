import Home from './components/pages/Home.vue';
import Members from './components/pages/Members.vue';
import Research from './components/pages/Research.vue';
import Publications from './components/pages/Publications.vue';
import Facilities from './components/pages/Facilities.vue';
import Teaching from './components/pages/Teaching.vue';
import Contact from './components/pages/Contact.vue';
import MemberDetail from './components/pages/MemberDetail.vue';


export const routes =[
  {path: '', component: Home},
  {path: '/members', component: Members},
  {path: '/members/:id', component: MemberDetail, props: true},
  {path: '/research', component: Research},
  {path: '/publications', component: Publications},
  {path: '/facilities', component: Facilities},
  {path: '/teaching', component: Teaching},
  {path: '/contact', component: Contact}
]
