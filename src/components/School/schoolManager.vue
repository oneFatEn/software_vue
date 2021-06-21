<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home_department' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理</el-breadcrumb-item>
      <el-breadcrumb-item>系所负责人</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card" >
      <el-table :data="teacherList" border stripe>
        <el-table-column label="教师编号" prop="id" align="center"></el-table-column>
        <el-table-column label="教师姓名" prop="name" align="center"></el-table-column>
        <el-table-column label="是否为系所负责人" align="center">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.directorOrNot" active-color="#409EFF" inactive-color="#909399" @change="switchChange(scope.row)"></el-switch>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      teacherList: [],
      total: 0
    }
  },
  created () {
    this.getStudentList()
  },
  methods: {
    async getStudentList () {
      const { data: res } = await this.$http.post('/collageManager/showTeacher', this.$qs.stringify({
        uid: window.sessionStorage.getItem('Department_ID')
      }))
      this.teacherList = res
      console.log(this.teacherList)
    },
    async switchChange (userinfo) {
      console.log(userinfo.id)
      await this.$http.post('/collageManager/addTeacherToCollageDirector', this.$qs.stringify({
        tid: userinfo.id,
        cid: window.sessionStorage.getItem('Department_ID')
      }))
      console.log(this.teacherList)
    }
  }
}
</script>

<style lang="less" scoped>
.position{
    display: flex;
    justify-content: flex-end;
}
</style>
