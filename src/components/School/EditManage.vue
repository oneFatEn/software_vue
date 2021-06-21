<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home_school' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>培养方案</el-breadcrumb-item>
      <el-breadcrumb-item>编辑培养方案</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card" >
      <el-form :model="editForm" style="text-align: center">
        <el-form-item>
          <el-input v-model="editForm.cname" placeholder="输入学院名称" style="width:25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="editForm.year" placeholder="输入年份" style="width:25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="editForm.id" placeholder="输入课程编号" style="width:25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="editForm.coname" placeholder="输入课程名称" style="width:25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="editForm.credit" placeholder="输入学分" style="width:25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="editForm.length" placeholder="输入学时" style="width:25%"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="firstForm" inline style="text-align: center">
        <el-form-item>
          <el-input v-model="firstForm.one" placeholder="输入学时" style="width:50%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="firstForm.two" placeholder="输入学时" style="width:50%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="firstForm.three" placeholder="输入学时" style="width:50%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="firstForm.four" placeholder="输入学时" style="width:50%"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="secondForm" inline style="text-align: center">
        <el-form-item>
          <el-input v-model="secondForm.five" placeholder="输入学时" style="width:50%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="secondForm.six" placeholder="输入学时" style="width:50%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="secondForm.seven" placeholder="输入学时" style="width:50%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="secondForm.eight" placeholder="输入学时" style="width:50%"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="subForm" style="text-align: center">
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
      editForm: {
        cname: '计算机与通信工程学院',
        year: '2021',
        id: '1',
        coname: '计算机组成原理',
        credit: '3',
        length: '32'
      },
      firstForm: {
        one: '16',
        two: '16',
        three: '',
        four: ''
      },
      secondForm: {
        five: '',
        six: '',
        seven: '',
        eight: ''
      },
      subForm: {

      }
    }
  },
  methods: {
    async submit () {
      const res = await this.$http.post('schoolManager/editTrainingProgram', this.$qs.stringify({
        major_name: this.editForm.cname,
        enrollment_year: this.editForm.year,
        course_id: this.editForm.id,
        course_name: this.editForm.coname,
        credit: this.editForm.credit,
        length: this.editForm.length,
        term1: this.firstForm.one,
        term2: this.firstForm.two,
        term3: this.firstForm.three,
        term4: this.firstForm.four,
        term5: this.firstForm.five,
        term6: this.firstForm.six,
        term7: this.firstForm.seven,
        term8: this.firstForm.eight
      }))
      console.log(res)
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
