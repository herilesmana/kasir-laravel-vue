<template>
  <div id="login">
    <Row>
      <Col span="4" push="1" offset="8">
        <router-link to="/admin">
          <img @click="selectAdmin" :width="adminWidth" class="login-img" src="../../img/admin.png">
        </router-link>
      </Col>
      <Col span="4" pull="1">
        <router-link to="/kasir">
          <img @click="selectKasir" :width="kasirWidth" class="login-img kasir" src="../../img/kasir.png">
        </router-link>
      </Col>
    </Row>
    <Row>
      <Col span="24">
          <router-view></router-view>
      </Col>
    </Row>

  </div>
</template>

<script>
export default {
  data () {
    return {
      adminWidth : '60%',
      kasirWidth : '60%'
    }
  },
  name: 'login',
  methods: {
    selectKasir () {
      this.kasirWidth = '100%',
      this.adminWidth = '60%'
    },
    selectAdmin () {
      this.kasirWidth = '60%',
      this.adminWidth = '100%'
    }
  }
}
</script>

<style scoped>
#login {
  margin-top: 60px
}
.login-img {
  cursor: pointer;
  border-radius: 50%;
  border: 0px solid #efefef;
  transition: 0.2s all;
  -webkit-transition-duration: 0.2s all;
  -moz-transition-duration: 0.2s all
}
.login-img:hover {
  border: 5px solid #efefef;
}
.login-img.kasir {
  float: right;
}
.router-link-active .login-img {
  width: 90%;
  position: relative;
  cursor: default;
  border: 5px solid rgba(51, 133, 255,0.2);
}
</style>
