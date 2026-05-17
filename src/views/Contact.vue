<template>
  <div>
    <header class="header">
      <div class="container header__container">
        <router-link to="/" class="logo">
          <span class="logo__icon">⏱️</span> TimeKeeper
        </router-link>

        <nav class="nav nav--desktop">
          <ul class="nav__list">
            <li class="nav__item"><router-link to="/" class="nav__link">Главная</router-link></li>
            <li class="nav__item"><router-link to="/contact" class="nav__link nav__link--active">Контакты</router-link></li>
            <li class="nav__item"><router-link to="/faq" class="nav__link">FAQ</router-link></li>
          </ul>
        </nav>

        <div class="header-buttons header-buttons--desktop">
          <router-link to="/login" class="btn btn--outline-light">Вход</router-link>
          <router-link to="/register" class="btn btn--success">Регистрация</router-link>
        </div>

        <button class="burger" :class="{ 'burger--open': menuOpen }" @click="toggleMenu" aria-label="Меню">
          <span class="burger__line"></span>
          <span class="burger__line"></span>
          <span class="burger__line"></span>
        </button>
      </div>

      <div class="mobile-menu" :class="{ 'mobile-menu--open': menuOpen }">
        <div class="mobile-menu__inner">
          <nav class="mobile-nav">
            <ul class="mobile-nav__list">
              <li class="mobile-nav__item"><router-link to="/" class="mobile-nav__link">Главная</router-link></li>
              <li class="mobile-nav__item"><router-link to="/contact" class="mobile-nav__link mobile-nav__link--active">Контакты</router-link></li>
              <li class="mobile-nav__item"><router-link to="/faq" class="mobile-nav__link">FAQ</router-link></li>
            </ul>
          </nav>
          <div class="mobile-buttons">
            <router-link to="/login" class="btn btn--outline-light mobile-btn">Вход</router-link>
            <router-link to="/register" class="btn btn--success mobile-btn">Регистрация</router-link>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section section--contacts">
        <div class="container">
          <div class="contacts">
            <div class="contacts__header">
              <h1 class="contacts__title">Свяжитесь с нами</h1>
              <p class="contacts__subtitle">Мы всегда рады помочь</p>
            </div>

            <div class="contacts__grid">
              <div class="contacts__info">
                <div class="contact-card">
                  <h2 class="contact-card__title">Контакты</h2>

                  <div class="contact-item">
                    <div class="contact-item__icon">
                      <span class="material-symbols-outlined">phone</span>
                    </div>
                    <div class="contact-item__content">
                      <p class="contact-item__label">Телефон</p>
                      <p class="contact-item__value">8 (800) 123-45-67</p>
                      <p class="contact-item__note">Звонок бесплатный</p>
                    </div>
                  </div>

                  <div class="contact-item">
                    <div class="contact-item__icon">
                      <span class="material-symbols-outlined">email</span>
                    </div>
                    <div class="contact-item__content">
                      <p class="contact-item__label">Email</p>
                      <p class="contact-item__value">support@timekeeper.ru</p>
                      <p class="contact-item__note">Ответ в течение часа</p>
                    </div>
                  </div>

                  <div class="contact-item">
                    <div class="contact-item__icon">
                      <span class="material-symbols-outlined">schedule</span>
                    </div>
                    <div class="contact-item__content">
                      <p class="contact-item__label">Время работы</p>
                      <p class="contact-item__value">Пн-Пт: 9:00 - 20:00</p>
                      <p class="contact-item__note">Сб-Вс: выходной</p>
                    </div>
                  </div>

                  <div class="contact-socials">
                    <p class="contact-socials__label">Мы в соцсетях</p>
                    <div class="contact-socials__icons">
                      <a href="#" class="contact-socials__link">
                        <i class="fab fa-telegram" style="font-size: 18px;"></i>
                      </a>
                      <a href="#" class="contact-socials__link">
                        <i class="fab fa-whatsapp" style="font-size: 18px; color: green;"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="contacts__form">
                <div class="form-card">
                  <h2 class="form-card__title">Напишите нам</h2>
                  <form class="feedback-form" @submit.prevent="handleSubmit">
                    <div class="form-field">
                      <label for="fullname" class="form-field__label">Имя</label>
                      <input type="text" id="fullname" v-model="form.fullname" class="form-field__input" placeholder="Иван Иванов" required>
                    </div>
                    <div class="form-field">
                      <label for="email" class="form-field__label">Email</label>
                      <input type="email" id="email" v-model="form.email" class="form-field__input" placeholder="ivan@example.com" required>
                    </div>
                    <div class="form-field">
                      <label for="topic" class="form-field__label">Тема</label>
                      <select id="topic" v-model="form.topic" class="form-field__select">
                        <option value="" disabled selected>Выберите тему</option>
                        <option>Вопрос о тарифах</option>
                        <option>Техническая поддержка</option>
                        <option>Сотрудничество</option>
                        <option>Предложение по улучшению</option>
                        <option>Другое</option>
                      </select>
                    </div>
                    <div class="form-field">
                      <label for="message" class="form-field__label">Сообщение</label>
                      <textarea id="message" v-model="form.message" class="form-field__textarea" rows="5" placeholder="Опишите ваш вопрос..." required></textarea>
                    </div>
                    <div class="form-field form-field--checkbox">
                      <input type="checkbox" id="consent" v-model="form.consent" class="form-field__checkbox" required>
                      <label for="consent" class="form-field__checkbox-label">Согласен на обработку персональных данных</label>
                    </div>
                    <button type="submit" class="btn btn--primary btn--lg feedback-form__submit">Отправить сообщение</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__container">
        <div class="footer__copyright">© 2026 TimeKeeper. Все права защищены.</div>
        <div class="footer__links">
          <a href="#" class="footer__link">Политика конфиденциальности</a>
          <a href="#" class="footer__link">Пользовательское соглашение</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const menuOpen = ref(false)
const form = ref({
  fullname: '',
  email: '',
  topic: '',
  message: '',
  consent: false
})

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
}

onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.mobile-menu') && !e.target.closest('.burger')) {
      menuOpen.value = false
    }
  })
})
</script>

<style scoped>
</style>