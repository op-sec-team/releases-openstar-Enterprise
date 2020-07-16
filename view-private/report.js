import '@/components/common'
import pageHeader from '@/components/page-header/page-header.vue'
import verifyFn from '@/util/regexp'
import { getVultype, addVul, uploadFile } from '@/api/report'
import Message from '@/components/common/message'

export default {
  name: 'report',
  components: {
    pageHeader
  },
  data () {
    return {
      custNam: '', // 昵称
      vul: {
        Title: '',
        VulType1: '',
        VulType2: '',
        Info: 'deitxxxx'
      },
      dataCodeOptions: [
        { name: '1个月', value: 1 },
        { name: '3个月', value: 2 },
        { name: '6个月', value: 3 },
        { name: '暂未确定具体购车时间', value: 4 }
      ],
      checkboxActiveStep2: false, // 同意选择框
      codeImg: '',
      otherCtx: '上传附件', // 上传附件描述信息
      maxSizeOther: false, // 附件大小限制
      fileName: '', // 附件名字
      formatError: false // 附件格式错误
    }
  },
  computed: {
    canApplySubmit () {
      return (
        this.vul.Title &&
        this.vul.VulType1 &&
        this.vul.VulType2 &&
        this.vul.Info
      )
    }
  },
  created () {
    this.getVultype()
  },
  methods: {
    // 获取漏洞类型
    getVultype () {
      getVultype().then(res => {
        if (res) {
          console.log(res.data)
        } else {
          Message.success(res.msg)
        }
      })
    },
    // 处理select框
    dealSelected (item, category) {
      if (category === 'VulType1') {
        this.vul.VulType1 = item.name
      } else if (category === 'VulType2') {
        this.vul.VulType2 = item.name
      }
    },
    choiceBox (checkName) {
      this[checkName] = !this[checkName]
    },
    addVul () {
      if (this.canApplySubmit) {
        if (!this.checkboxActiveStep2) {
          Message.info('请阅读协议条款！')
          return false
        }
        addVul(this.vul).then(res => {
          if (res) {
            Message.success(res.msg)
          } else {
            Message.error(res.msg)
          }
        })
      } else {
        Message.info('请填写必填项！')
      }
    }
  }
}
