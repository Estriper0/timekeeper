<template>
  <div class="register-page">
    <div class="card register-card">
      <h2>Регистрация в TimeKeeper</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label>Название компании</label>
          <input type="text" v-model="company" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Пароль</label>
          <input type="password" v-model="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn--success" style="width: 100%">Зарегистрироваться</button>
      </form>
      <p class="mt-3 text-center">
        Уже есть аккаунт? <router-link to="/login">Войти</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const company = ref('')
const email = ref('')
const password = ref('')

const handleRegister = () => {
  localStorage.setItem('auth_token', 'fake-token')
  router.push('/dashboard')
}
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f6f9;
}
.register-card {
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
.btn--success {
  background-color: #198754;
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