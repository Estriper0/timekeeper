<template>
  <div class="register-page">
    <div class="register-page__card">
      <h2 class="register-page__title">Регистрация в TimeKeeper</h2>
      <form @submit.prevent="handleRegister" class="register-page__form">
        <div class="register-page__group">
          <label class="register-page__label">Название компании</label>
          <input type="text" v-model="company" class="register-page__input" required />
        </div>
        <div class="register-page__group">
          <label class="register-page__label">Email</label>
          <input type="email" v-model="email" class="register-page__input" required />
        </div>
        <div class="register-page__group">
          <label class="register-page__label">Пароль</label>
          <input type="password" v-model="password" class="register-page__input" required />
        </div>
        <button type="submit" class="register-page__button register-page__button--success">Зарегистрироваться</button>
      </form>
      <p class="register-page__footer">
        Уже есть аккаунт? <router-link to="/login" class="register-page__link">Войти</router-link>
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
.register-page__card {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
}
.register-page__title {
  margin-bottom: 1.5rem;
}
.register-page__group {
  margin-bottom: 1rem;
}
.register-page__label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.register-page__input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
  font-family: inherit;
}
.register-page__button {
  width: 100%;
  border: none;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
}
.register-page__button--success {
  background-color: #198754;
}
.register-page__footer {
  margin-top: 1rem;
  text-align: center;
}
.register-page__link {
  color: #0d6efd;
  text-decoration: none;
}
</style>