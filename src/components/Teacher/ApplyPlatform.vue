<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home_teacher' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>课程相关</el-breadcrumb-item>
    <el-breadcrumb-item>开课申请</el-breadcrumb-item>
    <el-breadcrumb-item>具体申请</el-breadcrumb-item>
<!-- <input  type="text"> -->
    </el-breadcrumb>
    <el-card class="box-card">
      <el-form :model="platform" style="text-align: center">
        <el-form-item>
          <el-select v-model="platform.collage" placeholder="请选择学院" @change="chooseCollage">
            <el-option
              v-for="item in platform.collageList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="platform.teacher" placeholder="请选择老师" >
            <el-option
              v-for="item in platform.teacherList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="platform.grade" placeholder="请选择年级" multiple>
            <el-option
              v-for="item in platform.gradeList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="platform.year" placeholder="请选择届数">
            <el-option
              v-for="item in platform.yearList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="platform.major" placeholder="请选择专业" @visible-change="getClass">
            <el-option
              v-for="item in platform.majorList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="platform.class" placeholder="请选择班级" multiple>
            <el-option
              v-for="item in platform.classList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
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
      platform: {
        collage: '',
        collageList: [],
        teacher: '',
        teacherList: [],
        grade: '',
        gradeList: [
          {
            value: '1',
            label: '大一上'
          }, {
            value: '2',
            label: '大一下'
          }, {
            value: '4',
            label: '大二上'
          }, {
            value: '8',
            label: '大二下'
          }, {
            value: '16',
            label: '大三上'
          }, {
            value: '32',
            label: '大三下'
          }, {
            value: '64',
            label: '大四上'
          }, {
            value: '128',
            label: '大四下'
          }],
        major: '',
        majorList: [],
        class: '',
        classList: [],
        year: '',
        yearList: []
      }
    }
  },
  created () {
    this.getAllCollege()
  },
  methods: {
    async getAllCollege () {
      const res = await this.$http.post('teacherSetPlatform/showAllCollage')
      this.platform.collageList = res.data
    },
    async chooseCollage (collage) {
      // console.log(collage)
      const res = await this.$http.post('teacherApplyCourse/showTeacherFromCollage', this.$qs.stringify({
        collage_id: collage
      }))
      this.platform.teacherList = res.data
      // console.log(this.platform.teacherList[0].id)
      const ress = await this.$http.post('teacherApplyCourse/showMajorFromCollage', this.$qs.stringify({
        collage_id: collage
      }))
      // console.log(ress)
      this.platform.majorList = ress.data
      const re = await this.$http.post('teacherApplyCourse/showSelectableGrade')
      console.log(re)
      this.platform.yearList = re.data
    },
    async getClass (bool) {
      if (bool === false) {
        console.log(this.platform.year)
        console.log(JSON.stringify(this.platform.major))
        console.log(this.platform.yearList[this.platform.year - 1].name)
        const resss = await this.$http.post('teacherApplyCourse/showClassFromMajor', this.$qs.stringify({
          major_id: this.platform.major,
          grade_year: this.platform.yearList[this.platform.year - 1].name
        }))
        this.platform.classList = resss.data
        console.log(this.platform.yearList)
      }
    },
    async submit () {
      // console.log(JSON.stringify(this.platform.grade))
      console.log(this.$route.params.courseId)
      console.log(this.platform.teacher)
      console.log(JSON.stringify(this.platform.grade))
      console.log(JSON.stringify(this.platform.class))
      this.$http.post('teacherApplyCourse/addPlatformApply', this.$qs.stringify({
        cid: this.$route.params.courseId,
        tid: this.platform.year.teacher,
        selectGradeList: JSON.stringify(this.platform.grade),
        class_id_list: JSON.stringify(this.platform.class)
      }))
      return this.$message.success('提交成功')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
