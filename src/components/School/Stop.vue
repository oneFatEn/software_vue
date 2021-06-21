<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home_department' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>调/停课审批</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card" >
      <el-table :data="applyList" border stripe>
        <el-table-column label="申请编号" prop="id" align="center"></el-table-column>
        <el-table-column label="被调/停课的周次" prop="oldWeek" align="center"></el-table-column>
        <el-table-column label="被调/停的时间" prop="oldDay" align="center"></el-table-column>
        <el-table-column label="老教室" prop="oldClassroom" align="center"></el-table-column>
        <el-table-column label="申请的课的周次" prop="newWeek" align="center"></el-table-column>
        <el-table-column label="申请的时间" prop="newDay" align="center"></el-table-column>
        <el-table-column label="新教室" prop="newClassroom" align="center"></el-table-column>
        <el-table-column label="申请原因" prop="reason" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="submit(scope.row.id)">同意</el-button>
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
      const { data: res } = await this.$http.post('/schoolManager/schoolShowAdjustApply')
      this.applyList = res
      console.log(this.applyList)
    },
    async submit (id) {
      console.log(id)
      await this.$http.post('/schoolManager/schoolPassAdjustApply', this.$qs.stringify({
        rid: id
      }))
      window.location.reload()
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
