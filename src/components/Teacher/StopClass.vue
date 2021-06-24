<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home_teacher' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>课程相关</el-breadcrumb-item>
    <el-breadcrumb-item>调/停课</el-breadcrumb-item>
    <el-breadcrumb-item>具体原因</el-breadcrumb-item>
<!-- <input  type="text"> -->
    </el-breadcrumb>
    <el-card class="box-card">
      <el-form :model="StopClass" class="form" style="text-align: center">
        <el-form-item>
          <el-input v-model="StopClass.reason" placeholder="请输入停/调课理由" style="width: 25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="StopClass.oldWeek" placeholder="请输入要停/调课的周次" style="width: 25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="StopClass.oldDay" placeholder="请输入要停/调课的星期数" style="width: 25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="StopClass.oldTime" placeholder="请输入要停/调课的课节数" style="width: 25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="StopClass.oldClassroom" placeholder="请输入停/调课的教室" style="width: 25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="StopClass.newWeek" placeholder="请输入新开课的周次" style="width: 25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="StopClass.newDay" placeholder="请输入新开课的星期数" style="width: 25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="StopClass.newTime" placeholder="请输入新开课的课节数" style="width: 25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="StopClass.newClassroom" placeholder="请输入新开课的教室" style="width: 25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      StopClass: {
        reason: '',
        oldWeek: '',
        oldDay: '',
        oldClassroom: '',
        newWeek: '',
        newDay: '',
        newClassroom: '',
        newTime: '',
        oldTime: ''
      }
    }
  },
  methods: {
    /*
    async getCourseOldTime () {
      const res = await this.$http.post('teacherSetPlatform/showAllCollage', this.$qs.stringify({
        courseId: this.$route.params.courseId
      }))
      this.CourseSet.collageList = res.data
    }
    */
    submit () {
      var oldweeks = 0
      var newweeks = 0
      var flop = 1
      for (var i = 1; i <= 16; i++) {
        if (i === Number(this.StopClass.oldWeek)) {
          oldweeks = oldweeks + flop
        }
        if (i === Number(this.StopClass.newWeek)) {
          newweeks = newweeks + flop
        }
        flop = flop * 2
      }
      var olddays = 0
      var newdays = 0
      var fflop = 1
      for (var j = 1; j <= 7; j++) {
        if (j === Number(this.StopClass.oldDay)) {
          olddays = olddays + fflop
        }
        if (j === Number(this.StopClass.newDay)) {
          newdays = newdays + fflop
        }
        fflop = fflop * 2
      }
      var oldtimes = 0
      var newtimes = 0
      var ffflop = 1
      for (var k = 1; k <= 6; k++) {
        if (k === Number(this.StopClass.oldTime)) {
          oldtimes = oldtimes + ffflop
        }
        if (k === Number(this.StopClass.oldTime)) {
          newtimes = newtimes + ffflop
        }
        ffflop = ffflop * 2
      }
      console.log(oldweeks + ' ' + newweeks + ' ' + olddays + ' ' + newdays + ' ' + oldtimes + ' ' + newtimes)
      const res = this.$http.post('teacherAdjustPlatform/adjustCourseChangeApply', this.$qs.stringify({
        platform_id: this.$route.params.courseId,
        reason: this.StopClass.reason,
        old_week: oldweeks,
        old_day: olddays,
        old_time: oldtimes,
        old_classroom: this.StopClass.oldClassroom,
        new_week: newweeks,
        new_day: newdays,
        new_time: newtimes,
        new_classroom: this.StopClass.newClassroom
      }))
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
