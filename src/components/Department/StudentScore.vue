<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home_department' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>成绩</el-breadcrumb-item>
      <el-breadcrumb-item>学生查询</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-form :model="score" inline class="formposition">
        <el-form-item>
          <el-input v-model="score.id" placeholder="请输入查询的学生学号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitId">提交</el-button>
        </el-form-item>
      </el-form>
      <div class="allposition">{{"已得学分: " + this.allCredit + "\t应修学分: " + this.needCredit}}</div>
      <el-table :data="ScoreList" border stripe>
        <el-table-column label="课程名称" prop="name"></el-table-column>
        <el-table-column label="课程成绩" prop="score"></el-table-column>
      </el-table>
      <el-form>
        <el-form-item class="button_position">
            <el-button type="primary" @click="printScoreList('http://192.168.43.215:5000/scoreStudent/createStudentScoreSheet')">打印成绩单</el-button>
        </el-form-item>
    </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      score: {
        id: ''
      },
      ScoreList: [],
      allCredit: '',
      needCredit: '',
      total: 0
    }
  },
  methods: {
    async submitId () {
      const { data: res } = await this.$http.post('/scoreStudent/studentScoreQuery', this.$qs.stringify({
        uid: this.score.id
      }))
      console.log(res)
      this.ScoreList = res.courses
      this.allCredit = res.allCredit
      this.needCredit = res.needCredit
    },
    printScoreList (src) {
      this.$http.post('/scoreStudent/createStudentScoreSheet', this.$qs.stringify({ uid: this.score.id }))
      window.location.href = src
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
.formposition{
    text-align: center;
}
.button_position{
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}
</style>
