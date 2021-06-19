<template>
  <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home_teacher' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>授课信息</el-breadcrumb-item>
      <el-breadcrumb-item>选课名单</el-breadcrumb-item>
      <el-breadcrumb-item>该课学生名单</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="box-card">
      <el-table :data="StudentList" border stripe>
        <el-table-column label="学号" prop="information.id"></el-table-column>
        <el-table-column label="姓名" prop="information.name"></el-table-column>
        <el-table-column label="专业" prop="information.major"></el-table-column>
        <el-table-column label="班级" prop="information.class"></el-table-column>
        <el-table-column label="重修" prop="retake"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      StudentList: []
    }
  },
  created () {
    this.getStudentList()
  },
  methods: {
    async getStudentList () {
      const { data: resu } = await this.$http.post('/nameList/nameListQuery', this.$qs.stringify({
        cid: this.$route.params.courseId
      }))
      this.StudentList = resu.res
    }
  }
}
</script>

<style lang="less" scoped>

</style>
