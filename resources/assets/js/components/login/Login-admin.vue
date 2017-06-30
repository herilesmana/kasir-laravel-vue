<template>
  <Card class="form-login-admin">
    <p slot="title">
      LOGIN ADMIN
    </p>
    <p>
      <Form ref="loginAdmin" :model="loginAdmin" :rules="rulesAdmin">
        <Form-item prop="id">
          <Input type="text" v-model="loginAdmin.id" placeholder="ID Admin">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="password">
          <Input type="password" v-model="loginAdmin.password" placeholder="Password Admin">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item>
          <Button type="primary" @click.prevent="submitLogin('loginAdmin')" :loading="submited">{{ loginAdmin.button }}</Button>
        </Form-item>
      </Form>
    </p>
  </Card>
</template>

<script>
export default {
  data () {
    return {
      loginAdmin: {
        id: '',
        password: '',
        button: 'Masuk'
      },
      submited: false,
      rulesAdmin: {
        id: [
          {
            required: true,
            message: 'Harus ada ID untuk masuk !!',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'Silahkan isikan password !!',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 6,
            message: 'Biasanya assword lebih dari 6 karakter !!',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitLogin () {
      var vm = this;
      this.submited =  true
      this.loginAdmin.button = 'Memproses...'
      axios.post('/login', {
        email: vm.loginAdmin.id,
        password: vm.loginAdmin.password
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="css">
.form-login-admin {
   width: 450px;
   margin: 5px auto
}
</style>
