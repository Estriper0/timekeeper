<template>
  <div class="login-page">
    <div class="login-page__card">
      <h2 class="login-page__title">Вход в TimeKeeper</h2>
      <form @submit.prevent="handleLogin" class="login-page__form">
        <div class="login-page__group">
          <label class="login-page__label">Email</label>
          <input type="email" v-model="email" class="login-page__input" required />
        </div>
        <div class="login-page__group">
          <label class="login-page__label">Пароль</label>
          <input type="password" v-model="password" class="login-page__input" required />
        </div>
        <button type="submit" class="login-page__button login-page__button--primary">Войти</button>
      </form>
      <p class="login-page__footer">
        Нет аккаунта? <router-link to="/register" class="login-page__link">Зарегистрироваться</router-link>
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
.login-page__card {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
}
.login-page__title {
  margin-bottom: 1.5rem;
}
.login-page__group {
  margin-bottom: 1rem;
}
.login-page__label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.login-page__input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
  font-family: inherit;
}
.login-page__button {
  width: 100%;
  border: none;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
}
.login-page__button--primary {
  background-color: #0d6efd;
}
.login-page__footer {
  margin-top: 1rem;
  text-align: center;
}
.login-page__link {
  color: #0d6efd;
  text-decoration: none;
}
</style>