<template>
  <div>
    <header class="header">
      <div class="container header__container">
        <router-link to="/" class="logo">
          <span class="logo__icon">⏱️</span> TimeKeeper
        </router-link>

        <!-- Десктопная навигация (видна только на больших экранах) -->
        <nav class="nav nav--desktop">
          <ul class="nav__list">
            <li class="nav__item"><router-link to="/" class="nav__link">Главная</router-link></li>
            <li class="nav__item"><router-link to="/contact" class="nav__link">Контакты</router-link></li>
            <li class="nav__item"><router-link to="/faq" class="nav__link nav__link--active">FAQ</router-link></li>
          </ul>
        </nav>

        <!-- Десктопные кнопки (видимы только на больших экранах) -->
        <div class="header-buttons header-buttons--desktop">
          <router-link to="/login" class="btn btn--outline-light">Вход</router-link>
          <router-link to="/register" class="btn btn--success">Регистрация</router-link>
        </div>

        <!-- Бургер-кнопка (видна только на мобильных) -->
        <button class="burger" @click="toggleMenu" aria-label="Меню">
          <span class="burger__line"></span>
          <span class="burger__line"></span>
          <span class="burger__line"></span>
        </button>
      </div>

      <!-- Мобильное меню (выезжающее) -->
      <div class="mobile-menu" :class="{ open: menuOpen }">
        <div class="mobile-menu__inner">
          <nav class="mobile-nav">
            <ul class="mobile-nav__list">
              <li class="mobile-nav__item"><router-link to="/" class="mobile-nav__link">Главная</router-link></li>
              <li class="mobile-nav__item"><router-link to="/contact" class="mobile-nav__link">Контакты</router-link></li>
              <li class="mobile-nav__item"><router-link to="/faq" class="mobile-nav__link mobile-nav__link--active">FAQ</router-link></li>
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
      <section class="section section--faq">
        <div class="container">
          <div class="faq">
            <div class="faq__header">
              <h1 class="faq__title">Часто задаваемые вопросы</h1>
            </div>
            <div class="faq__list">
              <!-- Вопрос 1 -->
              <div class="faq-item">
                <input type="checkbox" id="faq1" class="faq-item__checkbox">
                <label for="faq1" class="faq-item__question">
                  <span class="faq-item__question-text">Как начать работу с TimeKeeper?</span>
                  <span class="faq-item__icon material-symbols-outlined">expand_more</span>
                </label>
                <div class="faq-item__answer">
                  <p>Зарегистрируйтесь на нашем сайте, добавьте сотрудников — и можно приступать к учёту времени. Первые 5 сотрудников бесплатно.</p>
                </div>
              </div>
              <!-- Вопрос 2 -->
              <div class="faq-item">
                <input type="checkbox" id="faq2" class="faq-item__checkbox">
                <label for="faq2" class="faq-item__question">
                  <span class="faq-item__question-text">Как сотрудники отмечают начало и конец дня?</span>
                  <span class="faq-item__icon material-symbols-outlined">expand_more</span>
                </label>
                <div class="faq-item__answer">
                  <p>После входа в личный кабинет сотрудник нажимает кнопку «Начать работу». В конце дня — «Завершить». Все отметки фиксируются автоматически.</p>
                </div>
              </div>
              <!-- Вопрос 3 -->
              <div class="faq-item">
                <input type="checkbox" id="faq3" class="faq-item__checkbox">
                <label for="faq3" class="faq-item__question">
                  <span class="faq-item__question-text">Можно ли исправить отметку, если сотрудник забыл её сделать?</span>
                  <span class="faq-item__icon material-symbols-outlined">expand_more</span>
                </label>
                <div class="faq-item__answer">
                  <p>Да, руководитель может отредактировать время прихода/ухода в разделе «Посещаемость».</p>
                </div>
              </div>
              <!-- Вопрос 4 -->
              <div class="faq-item">
                <input type="checkbox" id="faq4" class="faq-item__checkbox">
                <label for="faq4" class="faq-item__question">
                  <span class="faq-item__question-text">Как формируются отчёты?</span>
                  <span class="faq-item__icon material-symbols-outlined">expand_more</span>
                </label>
                <div class="faq-item__answer">
                  <p>Отчёты доступны в разделе «Рабочее время». Вы можете выгрузить данные в Excel или PDF за любой период.</p>
                </div>
              </div>
              <!-- Вопрос 5 -->
              <div class="faq-item">
                <input type="checkbox" id="faq5" class="faq-item__checkbox">
                <label for="faq5" class="faq-item__question">
                  <span class="faq-item__question-text">Есть ли интеграция с 1С?</span>
                  <span class="faq-item__icon material-symbols-outlined">expand_more</span>
                </label>
                <div class="faq-item__answer">
                  <p>Да, в тарифах «Бизнес» и «Корпоративный» предусмотрена интеграция с 1С: Зарплата и Управление Персоналом.</p>
                </div>
              </div>
              <!-- Вопрос 6 -->
              <div class="faq-item">
                <input type="checkbox" id="faq6" class="faq-item__checkbox">
                <label for="faq6" class="faq-item__question">
                  <span class="faq-item__question-text">Что делать, если у меня возникла техническая проблема?</span>
                  <span class="faq-item__icon material-symbols-outlined">expand_more</span>
                </label>
                <div class="faq-item__answer">
                  <p>Напишите в службу поддержки через форму на странице <router-link to="/contact">Контакты</router-link> или по email support@timekeeper.ru. Мы ответим в течение часа.</p>
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

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
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
/* Стили аналогично Home.vue */
</style>