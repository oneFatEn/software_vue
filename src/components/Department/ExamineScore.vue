<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home_department' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>成绩</el-breadcrumb-item>
      <el-breadcrumb-item>成绩审核</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-table :data="ScoreList" border stripe>
        <el-table-column label="课程编号" prop="id" align="center"></el-table-column>
        <el-table-column label="课程名称" prop="platform" align="center"></el-table-column>
        <el-table-column label="学生成绩" prop="score:" align="center"></el-table-column>
        <el-table-column label="学生姓名" prop="student" align="center"></el-table-column>
        <el-table-column label="任课教师" prop="teacher:" align="center"></el-table-column>
        <el-table-column label="学期" prop="term" align="center"></el-table-column>
        <el-table-column label="学年" prop="year" align="center"></el-table-column>
        <el-table-column label="审核" align="center">
          <template slot-scope="scope">
            <el-button type="primary" @click="submit(scope.row.id)">提交</el-button>
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
      ScoreList: []
    }
  },
  created () {
    this.getAllScore()
  },
  methods: {
    async getAllScore () {
      const res = await this.$http.post('collageManager/showUpdateScoreApplyNotPass')
      console.log(res)
      this.ScoreList = res.data
      // console.log(this.CourseSet.collageList)
    },
    async submit (id) {
      const res = await this.$http.post('collageManager/passOneUpdateScore', this.$qs.stringify({
        rid: id
      }))
      console.log(res)
      window.location.reload()
      // console.log(this.CourseSet.collageList)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
