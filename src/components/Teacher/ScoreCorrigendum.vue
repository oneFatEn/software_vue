<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home_teacher' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>授课信息</el-breadcrumb-item>
    <el-breadcrumb-item>选课名单</el-breadcrumb-item>
    <el-breadcrumb-item>该课学生名单</el-breadcrumb-item>
<!-- <input  type="text"> -->
    </el-breadcrumb>
    <el-card class="box-card">
      <el-form :model="studentScore" >
        <el-table :data="studentScore.StudentList" border stripe class="table">
          <el-table-column label="学号" prop="information.id"></el-table-column>
          <el-table-column label="姓名" prop="information.name"></el-table-column>
          <el-table-column label="专业" prop="information.major"></el-table-column>
          <el-table-column label="班级" prop="information.class"></el-table-column>
          <el-table-column label="重修" prop="retake"></el-table-column>
          <el-table-column label="平时成绩">
            <template slot-scope="score">
              <el-form-item>
                <el-input size="small" v-model="score.row.pScore" placeholder="平时"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="期末成绩">
            <template slot-scope="score">
              <el-form-item>
                <el-input size="small" v-model="score.row.qScore" placeholder="期末"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="理由">
            <template slot-scope="score">
              <el-form-item>
                <el-input size="small" v-model="score.row.reason" placeholder="更改理由" @blur="test(score.$index)"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      studentScore: {
        StudentList: []
      }
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
      this.studentScore.StudentList = resu.res
    },
    async test (index) {
      console.log(this.studentScore.percent)
      console.log(this.studentScore.StudentList[index].qScore)
      await this.$http.post('teacherUploadScore/addOneScore', this.$qs.stringify({
        pid: this.$route.params.courseId,
        sid: this.studentScore.StudentList[index].information.id,
        tid: window.sessionStorage.getItem('Teacher_ID'),
        assignment_score: this.studentScore.StudentList[index].pScore,
        examination_score: this.studentScore.StudentList[index].qScore,
        exam_proportion: this.studentScore.percent,
        reason: this.studentScore.StudentList[index].reason
      }))
      // console.log(res)
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
