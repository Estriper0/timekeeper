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
            <li class="nav__item">
              <router-link to="/" class="nav__link" active-class="nav__link--active" exact-active-class="nav__link--active">Главная</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/contact" class="nav__link" active-class="nav__link--active">Контакты</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/faq" class="nav__link" active-class="nav__link--active">FAQ</router-link>
            </li>
          </ul>
        </nav>

        <!-- Десктопные кнопки -->
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

      <!-- Мобильное меню (выезжает справа) - теперь внутри header -->
      <div class="mobile-menu" :class="{ open: menuOpen }">
        <div class="mobile-menu__inner">
          <nav class="mobile-nav">
            <ul class="mobile-nav__list">
              <li class="mobile-nav__item">
                <router-link to="/" class="mobile-nav__link" active-class="mobile-nav__link--active" exact-active-class="mobile-nav__link--active">Главная</router-link>
              </li>
              <li class="mobile-nav__item">
                <router-link to="/contact" class="mobile-nav__link" active-class="mobile-nav__link--active">Контакты</router-link>
              </li>
              <li class="mobile-nav__item">
                <router-link to="/faq" class="mobile-nav__link" active-class="mobile-nav__link--active">FAQ</router-link>
              </li>
            </ul>
          </nav>
          <div class="mobile-buttons">
            <router-link to="/login" class="btn btn--outline-light mobile-btn">Вход</router-link>
            <router-link to="/register" class="btn btn--success mobile-btn">Регистрация</router-link>
          </div>
        </div>
      </div>
    </header>

    <main class="main-content">
      <section class="hero">
        <div class="container hero__grid">
          <div class="hero__content">
            <h1 class="hero__title">Учет рабочего времени для тех, <span class="hero__title-accent">кто устал от Excel</span></h1>
            <div class="hero__buttons">
              <router-link to="/register" class="btn btn--primary btn--lg">Начать бесплатно</router-link>
              <a href="#features" class="btn btn--outline-dark btn--lg">Смотреть демо</a>
            </div>
          </div>
          <div class="hero__visual">
            <div class="hero__icon">
              <span class="material-symbols-outlined" style="font-size: 350px;">finance_mode</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--light">
        <div class="container">
          <h2 class="section__title">С этими проблемами сталкивается каждый руководитель</h2>
          <div class="grid-3">
            <div class="problem-card">
              <div class="problem-card__icon">
                <span class="material-symbols-outlined" style="font-size: 72px; color: red;">timer</span>
              </div>
              <h3 class="problem-card__title">Опоздания и прогулы</h3>
              <p class="problem-card__text">Сотрудники опаздывают, уходят раньше, а вы узнаете об этом только в конце месяца из зарплатной ведомости.</p>
            </div>
            <div class="problem-card">
              <div class="problem-card__icon">
                <span class="material-symbols-outlined" style="font-size: 72px; color: rgb(179, 176, 2);">error</span>
              </div>
              <h3 class="problem-card__title">Excel-таблицы путаются</h3>
              <p class="problem-card__text">Десятки файлов, забытые пароли, случайно удаленные строки — и вот уже непонятно, кому сколько платить.</p>
            </div>
            <div class="problem-card">
              <div class="problem-card__icon">
                <span class="material-symbols-outlined" style="font-size: 72px; color: rgb(2, 68, 23);">sentiment_dissatisfied</span>
              </div>
              <h3 class="problem-card__title">Споры с сотрудниками</h3>
              <p class="problem-card__text">"Я же работал в субботу!", "Почему мне не оплатили переработку?" — вечные конфликты без четкой системы учета.</p>
            </div>
          </div>
          <div class="lead-text"><strong class="lead-text__strong">TimeKeeper</strong> решает все эти проблемы автоматически</div>
        </div>
      </section>

      <section class="section" id="features">
        <div class="container">
          <h2 class="section__title">Функции нашего сервиса</h2>
          <div class="grid-3">
            <div class="feature-card">
              <div class="feature-card__icon">📅</div>
              <h3 class="feature-card__title">Посещаемость</h3>
              <p class="feature-card__text">Полный контроль приходов и уходов. Кто опоздал, кто ушел раньше — вся информация в одном месте.</p>
              <ul class="feature-list">
                <li class="feature-list__item">✓ Отметки о приходе/уходе</li>
                <li class="feature-list__item">✓ Автоматические опоздания</li>
                <li class="feature-list__item">✓ Календарь отсутствий</li>
                <li class="feature-list__item">✓ Графики работы</li>
              </ul>
            </div>
            <div class="feature-card feature-card--success">
              <div class="feature-card__icon">⏱️</div>
              <h3 class="feature-card__title">Рабочее время</h3>
              <p class="feature-card__text">Учет отработанных часов с точностью до минуты. Автоматический подсчет переработок.</p>
              <ul class="feature-list">
                <li class="feature-list__item">✓ Таймер начала/конца дня</li>
                <li class="feature-list__item">✓ Учет перерывов и обеда</li>
                <li class="feature-list__item">✓ Расчет переработок</li>
                <li class="feature-list__item">✓ Отчеты по часам</li>
              </ul>
            </div>
            <div class="feature-card feature-card--info">
              <div class="feature-card__icon">🎧</div>
              <h3 class="feature-card__title">Поддержка</h3>
              <p class="feature-card__text">Помощь всегда рядом. База знаний и прямая связь с командой.</p>
              <ul class="feature-list">
                <li class="feature-list__item">✓ Чат с поддержкой 24/7</li>
                <li class="feature-list__item">✓ База знаний и статьи</li>
                <li class="feature-list__item">✓ Часто задаваемые вопросы</li>
                <li class="feature-list__item">✓ Обучающие видео</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--light">
        <div class="container">
          <h2 class="section__title">Максимально простая настройка</h2>
          <div class="steps">
            <div class="step">
              <div class="step__number">1</div>
              <h3 class="step__title">Регистрация компании</h3>
              <p class="step__text">Создайте аккаунт. Укажите название компании и свои данные</p>
            </div>
            <div class="step">
              <div class="step__number">2</div>
              <h3 class="step__title">Добавьте сотрудников</h3>
              <p class="step__text">Загрузите список сотрудников. Каждый получит доступ к личному кабинету.</p>
            </div>
            <div class="step">
              <div class="step__number">3</div>
              <h3 class="step__title">Контролируйте время</h3>
              <p class="step__text">Сотрудники отмечают начало/конец дня, а вы получаете отчеты.</p>
            </div>
          </div>
          <div class="steps-cta">
            <p class="steps-cta__text">Никаких сложных настроек — просто начните работать</p>
            <router-link to="/register" class="btn btn--primary btn--lg">Начать бесплатно</router-link>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="section__title">Выберите свой тариф</h2>
          <div class="pricing-grid">
            <div class="tariff-card">
              <div class="tariff-card__badge">Стартовый</div>
              <div class="tariff-card__price">Бесплатно</div>
              <div class="tariff-card__period">для небольших команд</div>
              <ul class="tariff-features">
                <li class="tariff-features__item">✓ До 5 сотрудников</li>
                <li class="tariff-features__item">✓ Учет посещаемости</li>
                <li class="tariff-features__item">✓ Базовые отчеты</li>
                <li class="tariff-features__item">✓ Поддержка по email</li>
                <li class="tariff-features__item tariff-features__item--disabled">✗ Расчет зарплаты</li>
                <li class="tariff-features__item tariff-features__item--disabled">✗ Интеграция с 1С</li>
              </ul>
              <router-link to="/register" class="btn btn--outline-primary tariff-card__btn">Выбрать тариф</router-link>
            </div>
            <div class="tariff-card tariff-card--popular">
              <div class="popular-badge">Популярный</div>
              <div class="tariff-card__badge tariff-card__badge--primary">Бизнес</div>
              <div class="tariff-card__price">2 990 ₽</div>
              <div class="tariff-card__period">в месяц</div>
              <ul class="tariff-features">
                <li class="tariff-features__item">✓ До 50 сотрудников</li>
                <li class="tariff-features__item">✓ Полный учет времени</li>
                <li class="tariff-features__item">✓ Расчет зарплаты</li>
                <li class="tariff-features__item">✓ Расширенные отчеты</li>
                <li class="tariff-features__item">✓ Приоритетная поддержка</li>
                <li class="tariff-features__item">✓ Интеграция с 1С</li>
              </ul>
              <router-link to="/register" class="btn btn--primary tariff-card__btn">Выбрать тариф</router-link>
            </div>
            <div class="tariff-card">
              <div class="tariff-card__badge tariff-card__badge--dark">Корпоративный</div>
              <div class="tariff-card__price">7 990 ₽</div>
              <div class="tariff-card__period">в месяц</div>
              <ul class="tariff-features">
                <li class="tariff-features__item">✓ Неограниченно сотрудников</li>
                <li class="tariff-features__item">✓ Все функции бизнес</li>
                <li class="tariff-features__item">✓ API доступ</li>
                <li class="tariff-features__item">✓ Персональный менеджер</li>
                <li class="tariff-features__item">✓ Индивидуальные настройки</li>
                <li class="tariff-features__item">✓ Своя база данных</li>
              </ul>
              <router-link to="/register" class="btn btn--outline-dark tariff-card__btn">Выбрать тариф</router-link>
            </div>
          </div>
          <div class="pricing-footer">
            <p>🔒 Все тарифы включают SSL-шифрование и ежедневное резервное копирование</p>
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

    <!-- Кнопка "Наверх" для мобильных -->
    <button id="scrollToTopBtn" class="scroll-to-top" :class="{ show: showScrollBtn }" @click="scrollToTop" aria-label="Наверх">
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const showScrollBtn = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const handleScroll = () => {
  showScrollBtn.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.mobile-menu') && !e.target.closest('.burger')) {
      menuOpen.value = false
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
@import '../style.css';
</style>