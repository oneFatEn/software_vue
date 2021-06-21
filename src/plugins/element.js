import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Radio,
  RadioGroup,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Select,
  Option,
  Table,
  TableColumn,
  Row,
  Col,
  Switch,
  Upload
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Switch)
Vue.use(Upload)
// 全局挂载
Vue.prototype.$message = Message
