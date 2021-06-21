<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home_teacher' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>管理</el-breadcrumb-item>
    <el-breadcrumb-item>选课要求设定</el-breadcrumb-item>
    <el-breadcrumb-item>手动排课</el-breadcrumb-item>
<!-- <input  type="text"> -->
    </el-breadcrumb>
    <el-card class="box-card">
      <el-form :model="Course" style="text-align: center">
        <template>
        <el-form-item>
          <el-select v-model="Course.course" placeholder="请选择课程" >
            <el-option
              v-for="item in Course.courseList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
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
        course: ''
      }
    }
  },
  created () {
    this.getAllpId()
  },
  methods: {
    async getAllpId () {
      const res = await this.$http.post('collageManager/needArrangeCollageCourseQuery', this.$qs.stringify({
        uid: window.sessionStorage.getItem('Department_ID'),
        public: 0
      }))
      this.Course.courseList = res.data
      console.log(res.data)
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
