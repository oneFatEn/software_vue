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
// 关于老师的路由(15)
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
import apply from '../components/Teacher/Apply.vue'
import applyCourse from '../components/Teacher/ApplyCourse.vue'
import applyPlatform from '../components/Teacher/ApplyPlatform.vue'

// 关于院管理的路由(10)
import homeDepartment from '../components/Home_Department.vue'
import welcomeDepartment from '../components/Department/Welcome.vue'
import openCourse from '../components/Department/OpenCourse.vue'
import studentScore from '../components/Department/StudentScore.vue'
import courseScore from '../components/Department/CourseScore.vue'
import platformScore from '../components/Department/PlatformScore.vue'
import manager from '../components/Department/Manager.vue'
import examineScore from '../components/Department/ExamineScore.vue'
import sortHCourse from '../components/Department/SortHCourse.vue'
import sortACourse from '../components/Department/SortACourse.vue'
import approval from '../components/Department/Approval.vue'

// 关于学校的路由(2)
import homeSchool from '../components/Home_School.vue'
import welcomeSchool from '../components/School/Welcome_School.vue'
import initmanage from '../components/School/initManage.vue'
import editmanage from '../components/School/EditManage.vue'
import setManage from '../components/School/SetManage.vue'
import stopClassSchool from '../components/School/Stop.vue'
import schoolOpenCourse from '../components/School/schoolOpenCourse.vue'
import schoolCourse from '../components/School/schoolCourse.vue'
import schoolPlatform from '../components/School/SchoolPlatform.vue'
import schoolStudent from '../components/School/studentScore.vue'
import schoolManager from '../components/School/schoolManager.vue'
import schoolExamineScore from '../components/School/schoolExamineScore.vue'

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
      { path: '/stopClass', name: 'stopClass', component: stopClass },
      { path: '/t-3-3', component: apply },
      { path: '/applyCourse', name: 'applyCourse', component: applyCourse },
      { path: '/applyPlatform', name: 'applyPlatform', component: applyPlatform }
    ]
  },
  {
    path: '/home_department',
    component: homeDepartment,
    redirect: '/welcome_department',
    children: [
      { path: '/welcome_department', component: welcomeDepartment },
      { path: '/d-1-1', component: openCourse },
      { path: '/d-1-2', component: manager },
      { path: '/d-1-4', component: sortACourse },
      { path: '/d-1-3', component: sortHCourse },
      { path: '/d-2-1', component: courseScore },
      { path: '/d-2-2', component: platformScore },
      { path: '/d-2-3', component: studentScore },
      { path: '/d-2-4', component: examineScore },
      { path: '/d-3', component: approval }
    ]
  },
  {
    path: '/home_school',
    component: homeSchool,
    redirect: '/welcome_school',
    children: [
      { path: '/welcome_school', component: welcomeSchool },
      { path: '/sc-1-1', component: schoolOpenCourse },
      { path: '/sc-1-2', component: schoolCourse },
      { path: '/sc-1-3', component: schoolPlatform },
      { path: '/sc-1-4', component: schoolStudent },
      { path: '/sc-1-5', component: schoolManager },
      { path: '/sc-1-6', component: schoolExamineScore },
      { path: '/sc-2-1', component: initmanage },
      { path: '/sc-2-2', component: editmanage },
      { path: '/sc-2-3', component: setManage },
      { path: '/sc-3', component: stopClassSchool }
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
