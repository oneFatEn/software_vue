<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>课程表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
    <el-form :model="StuSche" inline >
      <el-form-item>
        <el-input v-model="StuSche.year" placeholder="请输入查询年份"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="StuSche.term" placeholder="请输入查询学期"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="StuSche.from" placeholder="起始周"></el-input>
      </el-form-item>
      <span>~ </span>
      <el-form-item>
        <el-input v-model="StuSche.end" placeholder="终止周"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getStuSche">查询</el-button>
      </el-form-item>
    </el-form>
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
        end: ''
      }
    }
  },
  methods: {
    getStuSche () {
      var week = 0
      var flop = 1
      for (var i = 1; i <= 16; i++) {
        if (i >= this.StuSche.from && i <= this.StuSche.end) {
          week = week + flop
        }
        flop = flop * 2
      }
      // console.log(week)
      window.sessionStorage.getItem('token')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
