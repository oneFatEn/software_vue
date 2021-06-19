<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home_teacher' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>课程相关</el-breadcrumb-item>
      <el-breadcrumb-item>选课要求设定</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-table :data="ScoreList" border stripe>
        <el-table-column label="课程编号" prop="id"></el-table-column>
        <el-table-column label="课程名称">
          <template slot-scope="scope">
            <div>
              <a href="javascript:;" @click="goEnviro(scope.row.id)">{{scope.row.name}}</a>
            </div>
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
      ScoreList: [],
      total: 0
    }
  },
  created () {
    this.getStudentList()
  },
  methods: {
    async getStudentList () {
      const { data: resu } = await this.$http.post('/nameList/showPlatformList', this.$qs.stringify({
        tid: window.sessionStorage.getItem('Teacher_ID')
      }))
      this.ScoreList = resu.res
    },
    goEnviro (id) {
      this.$router.push(
        { name: 'changeRequirement', params: { courseId: id } })
    }
  }
}
</script>

<style lang="less" scoped>
.position{
    display: flex;
    justify-content: flex-end;
}
</style>
