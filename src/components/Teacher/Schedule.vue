<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home_teacher' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>授课信息</el-breadcrumb-item>
      <el-breadcrumb-item>课程表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-form :model="StuSche" inline >
        <el-row :gutter=20>
          <el-col :span=3 aria-label="年份">
            <el-form-item>
              <el-input v-model="StuSche.year" placeholder="请输入查询年份"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span=3>
            <el-form-item>
              <el-input v-model="StuSche.term" placeholder="请输入查询学期"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span=3>
            <el-form-item>
              <el-input v-model="StuSche.from" placeholder="起始周"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span=1>
          <span>~ </span>
          </el-col>
          <el-col :span=3>
            <el-form-item>
              <el-input v-model="StuSche.end" placeholder="终止周"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span=3>
            <el-form-item>
              <el-input v-model="StuSche.compulsory" placeholder="必修/选修/全部"></el-input>
            </el-form-item>
          </el-col>
          <el-form-item>
            <el-button type="primary" @click="getStuSche">查询</el-button>
          </el-form-item>
        </el-row>
      </el-form>
      <el-table :data="Schedule" border stripe >
        <el-table-column type="index" align="center"></el-table-column>
        <el-table-column label = "Mon" prop="0" align="center"></el-table-column>
        <el-table-column label = "Tues" prop="1" align="center"></el-table-column>
        <el-table-column label = "Wen" prop="2" align="center"></el-table-column>
        <el-table-column label = "Thur" prop="3" align="center"></el-table-column>
        <el-table-column label = "Fri" prop="4" align="center"></el-table-column>
        <el-table-column label = "Sat" prop="5" align="center"></el-table-column>
        <el-table-column label = "Sun" prop="6" align="center"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      StuSche: {
        year: '',
        term: '',
        from: '',
        end: '',
        compulsory: ''
      },
      Schedule: []
    }
  },
  methods: {
    async getStuSche () {
      var weeks = 0
      var flop = 1
      for (var i = 1; i <= 16; i++) {
        if (i >= this.StuSche.from && i <= this.StuSche.end) {
          weeks = weeks + flop
        }
        flop = flop * 2
      }
      console.log(weeks)
      const { data: res } = await this.$http.post('/scheduleTeacher/scheduleTeacherFilter', this.$qs.stringify({
        sid: window.sessionStorage.getItem('Teacher_ID'),
        oneHotWeek: weeks,
        compulsory: this.StuSche.compulsory
      }))
      console.log(res)
      this.Schedule = res
    }
  }
}
</script>

<style lang="less" scoped>
</style>
