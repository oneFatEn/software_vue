<template>
  <form id="upload" enctype="multipart/form-data" method="post">
    <input type="file" name="file" id="pic"/>
    <input type="button" value="提交" onclick="uploadPic();"/>
    <span class="showUrl"></span>
    <img src="" class="showPic" alt="">
  </form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        cname: '计算机通信与工程学院',
        year: '2021'
      },
      name: '',
      fileList: []
    }
  },
  methods: {
    // 通过onchanne触发方法获得文件列表
    handleChange (file, fileList) {
      this.fileList = fileList
      console.log(this.name)
      console.log(fileList)
    },
    upload () {
      var fd = new FormData()
      fd.append('name', this.name)
      this.fileList.forEach((item) => {
        // 文件信息中raw才是真的文件
        fd.append('files', item.raw)
        // console.log(item.raw)
      })
      console.log(this.form.year)
      this.$http.post('/schoolManager/initTrainingProgramFromExcel', this.$qs.stringify({
        major_name: this.form.cname,
        enrollment_year: this.form.year,
        fd: this.fileList[0].raw
      }))
    }
  }
}
</script>

<style lang="less" scoped>
.position {
  display: flex;
  justify-content: flex-end;
}
</style>
