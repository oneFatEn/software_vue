

```
通过github的http链接上传的原因：华为云的上传好像和我们前端使用的ide存在问题，上传会覆写我们的文件（也有可能是我们操作失误）在前端进行了登录等功能上传失败后使用github来完成前端的小组合作，望老师理解
```



#### 使用v-model实现表单的数据绑定

首先在data()中定义v-model对象，然后将表单内的内容依次写入

#### 每次使用一个新组件要在element.js中导入（因为是按需使用）

表单里的数据突然可以在前端使用alert显示了，好奇怪，可恶

#### 那么login里的任务只剩下验证了

全局弹窗配置 $message 

好吧，果然没有那么简单
1) 服务器如何颁发给我登录的验证，让我始终保持在登录的状态  √
2) 后端传给我的数据我验证的方法  √
3) 设置过滤器，以保存的token值来访问  √

虽然以上问题写完了，但是我连数据都传不了，解决这个有啥用嘛，可恶啊↓

不愧是我，还是不能向后端发数据，问题出在哪里呢？
网上的解决方法（因为ajax使用的传递数据的格式与我们传递数据的格式不同）：
因此，使用qs库，对我们的数据格式进行转换，此时我们遇到了一个新的问题

```
Cannot use 'in' operator to search for 'validateStatus' in username=2001&password=123456&identity=2
```

此问题还在解决，网上的方法包括但不限于：使用POST方法........下午和郝锐研究一下post方法的可能性。

可恶啊什么蛇皮vue-resource差点把项目搞崩，而且加了vue-resource还访问404，就离谱，为什么过气的依赖还可以被引入

现在的问题还是前端传递给后端的数据为NULL，问题就来了，为什么数据通路是好的，类型不对呢

如果可以搞定这个问题，进度直接前进5%

可恶，好烦啊，后面都写好了，就你这什么传值不行，可恶啊，你给力点你好我好大家好，不行吗？

#### 蛇皮get，换成post就好了，可恶，气死我了

登录就全搞定啦，剩下的就是选课那些了，感觉就是照葫芦画瓢应该挺快的。

可恶，没有完全搞定，还差一个token值，回去再说吧



昨天未完成的任务

```
首先是后端传回的数据的选择，起码应该包括状态码以及token值（token值啊，后端搞快一点）
状态码用来给予用户反馈：例如：登录成功、检查用户名密码、检查身份是否正确
token值用来保存用户的登录状态
其次是过滤器部分被我注释掉了，记得改回来
上述完成之后可以将login功能push进仓库中
```



开冲开冲，今天把学生尽量写完

目前完成的功能：

完成了页面头部、侧边栏、主体的页面优化

完成了侧边导航栏的实现

完成了请求拦截器（后端实现了吗？存疑，服务器端验证Authorization是否符合要求）

好吧，经过一番讨论，决定使用ID来进行过滤器的实现

现在的问题是，为什么在welcome页面点不开二级导航了
ok，问题解决了，可能是浏览器的问题

现在路由之间的转换是正常的

那么可以开始研究怎么写课表了

好嘛，独热码，根本写不出来

### 

好家伙，独热码倒是写出来也能传给后端了，那为什么写个表格这么费劲

得了，让后端麻烦去吧，直接给我传个列表来

课程也给我传个列表得了

照葫芦画瓢时间到

先把选课什么的完善一下

选课页面的输入框还可以加一下提示，因此要把输入框减小

突然想到导出成绩单既然下载不了能不能发到邮箱hhhhhh

|    ClassList    |          获取该teacher_ID下老师教授的所有课程          |
| :-------------: | :----------------------------------------------------: |
| OneClassStudent |        根据选择的课程id列举所有选择该课程的学生        |
|    Schedule     |                     获取老师的课表                     |
|    SetScore     | 获取该teacher_ID下老师教授的所有课程并跳转至成绩修改页 |
| SetStudentScore |      在上一项功能跳转后，在本功能内可实现成绩修改      |
|     Welcome     |                     老师的欢迎界面                     |
|                 |                                                        |
|                 |                                                        |
|                 |                                                        |
|                 |                                                        |

### 

```
学生选课功能：改一下就ok，学生就全搞定，添加一个选择就可以
教师课程表功能：教师课程表的URL改一下
教师成绩勘误功能：更改一下勘误的传输参数以及URL，让郝锐在后台加一个reason
教师设定选课要求：提交给郝锐的部分要写一下
用this.$route.params.courseId获取子页面的id
```



