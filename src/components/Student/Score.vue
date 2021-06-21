<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>成绩</el-breadcrumb-item>
      <el-breadcrumb-item>成绩查询</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <div class="allposition">{{"已得学分: " + this.allCredit + "\t应修学分: " + this.needCredit}}</div>
      <el-table :data="ScoreList" border stripe>
        <el-table-column label="课程名称" prop="name"></el-table-column>
        <el-table-column label="课程成绩" prop="score"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ScoreList: [],
      total: 0,
      allCredit: '',
      needCredit: ''
    }
  },
  created () {
    this.getClassList()
  },
  methods: {
    async getClassList () {
      const { data: res } = await this.$http.post('/scoreStudent/studentScoreQuery', this.$qs.stringify({
        uid: window.sessionStorage.getItem('Student_ID')
      }))
      console.log(res)
      this.ScoreList = res.courses
      this.allCredit = res.allCredit
      this.needCredit = res.needCredit
      // console.log(this.CompulsorySchedule)
    }
  }
}
</script>

<style lang="less" scoped>
.el-table{
    margin-top: 10px;
}
.allposition{
  text-align: center;
}
</style>
