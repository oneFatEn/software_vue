<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home_school' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理</el-breadcrumb-item>
      <el-breadcrumb-item>开课申请单</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-form :model="openCourse" class="form">
        <template>
          <el-form-item>
            <el-input v-model="openCourse.course" placeholder="请输入课程名称" class="input">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-select v-model="openCourse.teacher" placeholder="请选择教师" @change="chooseGrade">
              <el-option
                v-for="item in openCourse.teacherList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
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
      openCourse: {
        course: '',
        teacher: '',
        teacherList: []
      }
    }
  },
  created () {
    this.getAllTeacher()
  },
  methods: {
    async getAllTeacher () {
      const res = await this.$http.post('/collageManager/showCollageTeacher', this.$qs.stringify({
        uid: window.sessionStorage.getItem('Department_ID')
      }))
      this.openCourse.teacherList = res.data
      console.log(this.openCourse.teacherList)
    },
    chooseGrade (index) {
      console.log(this.openCourse.teacher)
    },
    submitForm () {
      this.$http.post('/collageManager/setStartCourse', this.$qs.stringify({
        course_name: this.openCourse.course,
        tid: this.openCourse.teacher
      }))
    }
  }
}
</script>

<style lang="less" scoped>
.input{
    width: 17.5%;
}
.form{
    text-align: center;
}
</style>
