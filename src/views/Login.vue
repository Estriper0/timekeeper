<template>
  <div class="login-page">
    <div class="card login-card">
      <h2>Вход в TimeKeeper</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Пароль</label>
          <input type="password" v-model="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn--primary" style="width: 100%">Войти</button>
      </form>
      <p class="mt-3 text-center">
        Нет аккаунта? <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleLogin = () => {
  localStorage.setItem('auth_token', 'fake-token')
  router.push('/dashboard')
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f6f9;
}
.login-card {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.form-control {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
  font-family: inherit;
}
.btn--primary {
  background-color: #0d6efd;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
}
.mt-3 {
  margin-top: 1rem;
}
.text-center {
  text-align: center;
}
</style>