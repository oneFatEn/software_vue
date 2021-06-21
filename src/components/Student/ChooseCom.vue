<template>
  <div><el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>选课</el-breadcrumb-item>
      <el-breadcrumb-item>必修课</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-table :data="CompulsorySchedule" border stripe>
        <el-table-column label="课程名称" prop="name" align="center"></el-table-column>
        <el-table-column label="任课教师" prop="teacher" align="center"></el-table-column>
        <el-table-column label="上课地点" prop="classroom" align="center"></el-table-column>
        <el-table-column label="上课时间" prop="day_time" align="center"></el-table-column>
        <el-table-column label="授课周数" prop="week" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="primary" @click="submit(scope.$index)">选择</el-button>
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
      CompulsorySchedule: [],
      total: 0
    }
  },
  created () {
    this.getClassList()
  },
  methods: {
    async getClassList () {
      const { data: res } = await this.$http.post('/selectCourse/allSelectableCourseQuery', this.$qs.stringify({
        uid: window.sessionStorage.getItem('Student_ID')
      }))
      console.log(res)
      this.CompulsorySchedule = res.result
      // console.log(this.CompulsorySchedule)
    },
    async submit (index) {
      const res = await this.$http.post('/selectCourse/selectCourse', this.$qs.stringify({
        uid: window.sessionStorage.getItem('Student_ID'),
        cid: this.CompulsorySchedule[index].id
      }))
      console.log(res)
      window.location.reload()
    }
  }
}
</script>

<style lang="less" scoped>
</style>
