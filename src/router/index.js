import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
// 关于学生的路由(6)
import Home from '../components/Home.vue'
import Schedule from '../components/Student/Schedule.vue'
import ChooseCom from '../components/Student/ChooseCom.vue'
import Welcome from '../components/Welcome.vue'
import Score from '../components/Student/Score.vue'
import ScoreList from '../components/Student/ScoreList.vue'
// 关于老师的路由(11)
import homeTeacher from '../components/Home_Teacher.vue'
import welcomeTeacher from '../components/Teacher/Welcome.vue'
import teacherSchedule from '../components/Teacher/Schedule.vue'
import classList from '../components/Teacher/ClassList.vue'
import setScore from '../components/Teacher/SetScore.vue'
import studentList from '../components/Teacher/OneClassStudent.vue'
import setStudentScore from '../components/Teacher/SetStudentScore.vue'
import Corrigendum from '../components/Teacher/Corrigendum.vue'
import scoreCorrigendum from '../components/Teacher/ScoreCorrigendum.vue'
import requirement from '../components/Teacher/Requirement.vue'
import changeRequirement from '../components/Teacher/ChangeRequirement.vue'
import stop from '../components/Teacher/Stop.vue'
import stopClass from '../components/Teacher/StopClass.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/s-1', component: Schedule },
      { path: '/s-2-1', component: ChooseCom },
      { path: '/s-3-1', component: Score },
      { path: '/s-3-2', component: ScoreList }
    ]
  },
  {
    path: '/home_teacher',
    component: homeTeacher,
    redirect: '/welcome_teacher',
    children: [
      { path: '/welcome_teacher', component: welcomeTeacher },
      { path: '/t-1-1', component: teacherSchedule },
      { path: '/t-1-2', component: classList },
      { path: '/studentlist', name: 'studentlist', component: studentList },
      { path: '/t-2-1', component: setScore },
      { path: '/setStudentScore', name: 'setStudentScore', component: setStudentScore },
      { path: '/t-2-2', component: Corrigendum },
      { path: '/scoreCorrigendum', name: 'scoreCorrigendum', component: scoreCorrigendum },
      { path: '/t-3-1', component: requirement },
      { path: '/changeRequirement', name: 'changeRequirement', component: changeRequirement },
      { path: '/t-3-2', component: stop },
      { path: '/stopClass', name: 'stopClass', component: stopClass }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
/*
const VueRouterPush = router.prototype.push
router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
*/

// 挂载路由导航守卫(就是过滤器)
/*
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
}) */
export default router
