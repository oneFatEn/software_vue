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
        <el-table-column label="课程序号" prop="course_id"></el-table-column>
        <el-table-column label="学生编号" prop="student_id"></el-table-column>
        <el-table-column label="学生姓名" prop="name"></el-table-column>
        <el-table-column label="学生专业" prop="major"></el-table-column>
        <el-table-column label="学生班级" prop="class"></el-table-column>
        <el-table-column label="学生成绩" prop="score"></el-table-column>
        <el-table-column label="任课教师" prop="teacher"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      score: {
        id: '',
        year: '',
        term: ''
      },
      CourseList: [],
      total: 0
    }
  },
  methods: {
    async submitId () {
      const { data: res } = await this.$http.post('/collageManager/CourseScoreQuery', this.$qs.stringify({
        cid: this.score.id,
        year: this.score.year,
        term: this.score.term
      }))
      console.log(res)
      // console.log(res.data.score.student[0].id)
      this.CourseList = res
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
