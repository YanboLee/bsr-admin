<template>
  <div class="regist-container">
    <div>
      <label>{{ $t('login.mobile')}}</label><el-input v-model="RUser.mobile"></el-input>
    </div>
    <div>
      <label>{{ $t('login.password')}}</label><el-input v-model="RUser.password"></el-input>
    </div>
    <div>
      <label>{{ $t('login.nickName')}}</label><el-input v-model="RUser.nick_name"></el-input>
    </div>
    <div>
      <label>{{ $t('login.email')}}</label><el-input v-model="RUser.email"></el-input>
    </div>
    <el-button @click="submitClick">{{ $t('login.submit')}}</el-button>
  </div>
</template>

<script lang="ts">
// import openWindow from '@/utils/openWindow'
import { Component, Vue } from 'vue-property-decorator'
import { Form as ElForm, Input, Button } from 'element-ui'

interface RUser {
  mobile: string
  password: string
  nick_name: string
  email: string
}

@Component({
  name: 'SocialSignin'
})

export default class extends Vue {
  private RUser: RUser = {
    mobile: '',
    password: '',
    nick_name: '',
    email: ''
  }
  private submitClick(param: string) {
    this.$emit('submitRegist', this.RUser)
  }
}
</script>

<style lang="scss" scoped>
.regist-container {
  div {
    margin: 10px;
    .el-input__inner ,.el-input input {
      border: 1px solid #999999 !important;
    }
  }
}
</style>
