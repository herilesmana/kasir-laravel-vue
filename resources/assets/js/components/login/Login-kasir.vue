<template>
  <Card class="form-login-kasir">
    <p slot="title">
      LOGIN KASIR
    </p>
    <p>
      <Form ref="loginKasir" :model="loginKasir" :rules="rulesKasir">
        <Form-item prop="id">
          <Input type="text" v-model="loginKasir.id" placeholder="ID Kasir">
            <Icon type="ios-person-outline" slot="prepend"></Icon>.
          </Input>
        </Form-item>
        <Form-item prop="modal_awal">
          <Input type="text" v-model="loginKasir.modal_awal" placeholder="Modal Awal">
            <p slot="prepend">Rp.</p>
          </Input>
        </Form-item>
        <Form-item>
          <Button type="primary" @click.prevent="submitLogin('loginKasir')" :loading="submited">{{ loginKasir.button }}</Button>
        </Form-item>
      </Form>
    </p>
  </Card>
</template>

<script>
export default {
  data () {
    return {
      loginKasir: {
        id: '',
        modal_awal: '',
        button: 'Masuk'
      },
      submited: false,
      rulesKasir: {
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
            message: 'Modal awal harus diisi !!',
            trigger: 'blur'
          },
          {
            type: 'number',
            min: 6,
            message: 'Modal terlalu kecil!!',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitLogin () {
      this.submited =  true
      this.loginKasir.button = 'Memproses...'
    }
  }
}
</script>

<style lang="css">
.form-login-kasir {
   width: 450px;
   margin: 5px auto
}
</style>
