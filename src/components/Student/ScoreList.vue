<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>成绩</el-breadcrumb-item>
      <el-breadcrumb-item>生成成绩单</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-table :data="ScoreList" border stripe>
        <el-table-column label="课程名称" prop="name"></el-table-column>
        <el-table-column label="课程成绩" prop="score"></el-table-column>
      </el-table>
    <el-form>
        <el-form-item class="position">
            <el-button type="primary" @click="printScoreList">打印成绩单</el-button>
        </el-form-item>
    </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ScoreList: [],
      total: 0
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
    },
    printScoreList (src) {
      this.$http.post('/scoreStudent/createStudentScoreSheet', this.$qs.stringify({ uid: window.sessionStorage.getItem('Student_ID') }))
      window.location.href = src
    }
  }
}
</script>

<style lang="less" scoped>
.position{
    display: flex;
    justify-content: flex-end;
}
.el-form{
    margin-top: 10px;
}
</style>
