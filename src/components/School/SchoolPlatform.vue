<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home_department' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>成绩</el-breadcrumb-item>
      <el-breadcrumb-item>按讲台查询</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-form :model="score" inline class="formposition">
        <el-form-item>
          <el-input v-model="score.id" placeholder="请输入查询的课程号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="score.year" placeholder="请输入查询的年份"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="score.term" placeholder="请输入查询的学期"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitId">提交</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="CourseList" border stripe>
        <el-table-column label="学生学号" prop="student.id"></el-table-column>
        <el-table-column label="学生姓名" prop="student.name"></el-table-column>
        <el-table-column label="学生专业" prop="student.major"></el-table-column>
        <el-table-column label="学生班级" prop="student.class"></el-table-column>
        <el-table-column label="课程成绩" prop="score"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      score: {
        id: '1',
        year: '2017',
        term: '0'
      },
      CourseList: [],
      total: 0
    }
  },
  methods: {
    async submitId () {
      const res = await this.$http.post('/collageManager/platformScoreQuery', this.$qs.stringify({
        pid: this.score.id,
        year: this.score.year,
        term: this.score.term
      }))
      console.log(res)
      console.log(res.data)
      this.CourseList = res.data
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
