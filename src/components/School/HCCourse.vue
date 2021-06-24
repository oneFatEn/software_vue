<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home_school' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>管理</el-breadcrumb-item>
    <el-breadcrumb-item>选课要求设定</el-breadcrumb-item>
    <el-breadcrumb-item>排必修课</el-breadcrumb-item>
<!-- <input  type="text"> -->
    </el-breadcrumb>
    <el-card class="box-card">
      <el-form :model="Course" style="text-align: center">
        <template>
        <el-form-item>
          <el-select v-model="Course.course" placeholder="请选择课程" @change="getTime">
            <el-option
              v-for="item in Course.courseList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="Course.time" placeholder="请选择时间" multiple @visible-change="getClassroom">
            <el-option
              v-for="item in Course.timeList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="Course.classroom" placeholder="请选择教室" @change="getWeek">
            <el-option
              v-for="item in Course.classroomList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="Course.week" placeholder="请选择教学时间">
            <el-option
              v-for="item in Course.weekList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
        </template>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Course: {
        courseList: [],
        course: '',
        timeList: [],
        time: '',
        classroomList: [],
        classroom: '',
        weekList: [],
        week: ''
      }
    }
  },
  created () {
    this.getAllpId()
  },
  methods: {
    async getAllpId () {
      const res = await this.$http.post('schoolManager/needArrangeCollageCourseQuery', this.$qs.stringify({
        uid: window.sessionStorage.getItem('Department_ID'),
        public: 0
      }))
      this.Course.courseList = res.data
      console.log(res.data)
    },
    async getTime (course) {
      console.log(course)
      const res = await this.$http.post('schoolManager/showSelectableTimeList', this.$qs.stringify({
        pid: course
      }))
      this.Course.timeList = res.data
      console.log(this.Course.timeList)
    },
    async getClassroom (bool) {
      if (bool === false) {
        console.log(JSON.stringify(this.Course.time))
        const res = await this.$http.post('schoolManager/showSelectableClassroom', this.$qs.stringify({
          pid: this.Course.course,
          day_time_id_list: JSON.stringify(this.Course.time)
        }))
        console.log(res)
        this.Course.classroomList = res.data
      }
    },
    async getWeek (classroom) {
      console.log(JSON.stringify(this.Course.time))
      const res = await this.$http.post('schoolManager/showSelectableWeek')
      console.log(res)
      this.Course.weekList = res.data
    },
    async submit () {
      const res = await this.$http.post('schoolManager/arrangeProfessionalCourse', this.$qs.stringify({
        pid: this.Course.course,
        week: this.Course.week,
        day_time_id_list: JSON.stringify(this.Course.time),
        classroom_id: this.Course.classroom
      }))
      console.log(res)
      if (res.status === 200) {
        return this.$message.success('排课成功!')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.input{
  margin-top: 10px;
}
.table{
  margin-top: 10px;
}
</style>
