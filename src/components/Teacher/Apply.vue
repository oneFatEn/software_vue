<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home_teacher' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>课程相关</el-breadcrumb-item>
      <el-breadcrumb-item>开课申请</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-table :data="applyList" border stripe>
        <el-table-column label="课程编号" prop="id"></el-table-column>
        <el-table-column label="课程名称">
          <template slot-scope="scope">
            <div>
              <a href="javascript:;" @click="goEnviro(scope.row.id)">{{scope.row.course}}</a>
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
      applyList: [],
      total: 0
    }
  },
  created () {
    this.getApplyList()
  },
  methods: {
    async getApplyList () {
      const res = await this.$http.post('/teacherApplyCourse/ifTeacherNeedApplyCourse', this.$qs.stringify({
        tid: window.sessionStorage.getItem('Teacher_ID')
      }))
      console.log(res)
      this.applyList = res.data
    },
    goEnviro (id) {
      this.$router.push({ name: 'applyCourse', params: { courseId: id } })
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
