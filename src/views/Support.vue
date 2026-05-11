<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <div class="container">
        <div class="support">
          <h1 class="page-title">Поддержка</h1>
          <div class="support-grid">
            <!-- Контактная информация -->
            <div class="contact-info">
              <div class="info-card">
                <h3>Свяжитесь с нами</h3>
                <p><strong>Email:</strong> support@timekeeper.ru</p>
                <p><strong>Телефон:</strong> 8 (800) 123-45-67</p>
                <p><strong>Часы работы:</strong> Пн–Пт, 9:00–20:00</p>
              </div>
            </div>

            <!-- Форма сообщения -->
            <div class="support-form">
              <div class="form-card">
                <h3>Написать в поддержку</h3>
                <form @submit.prevent="handleSubmit">
                  <div class="form-group">
                    <label>Ваше имя</label>
                    <input type="text" v-model="form.name" required class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input type="email" v-model="form.email" required class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>Тема</label>
                    <select v-model="form.topic" class="form-control">
                      <option value="question">Вопрос по работе</option>
                      <option value="bug">Сообщить об ошибке</option>
                      <option value="suggestion">Предложение</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Сообщение</label>
                    <textarea v-model="form.message" rows="4" required class="form-control"></textarea>
                  </div>
                  <button type="submit" class="btn btn--primary">Отправить</button>
                </form>
                <div v-if="submitted" class="success-message">
                  Сообщение отправлено! Мы ответим в ближайшее время.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="app-footer">
      <div class="container">© 2026 TimeKeeper. Личный кабинет</div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheHeader from '../components/TheHeader.vue'

const form = ref({
  name: '',
  email: '',
  topic: 'question',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  // Имитация отправки
  console.log('Отправлено:', form.value)
  submitted.value = true
  // Очистка формы
  setTimeout(() => {
    submitted.value = false
    form.value = { name: '', email: '', topic: 'question', message: '' }
  }, 1500)
}
</script>

<style scoped>
.page-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}
.support-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
}
.info-card, .form-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.info-card h3, .form-card h3 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
.info-card p {
  margin: 0.5rem 0;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.25rem;
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
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
}
.success-message {
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #d1e7dd;
  border-radius: 0.5rem;
  color: #0f5132;
}
@media (max-width: 768px) {
  .support-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .info-card, .form-card {
    padding: 1rem;
  }
  .info-card h3, .form-card h3 {
    font-size: 1.1rem;
  }
  .form-group label {
    font-size: 0.85rem;
  }
  .btn--primary {
    width: 100%;
  }
}
</style>