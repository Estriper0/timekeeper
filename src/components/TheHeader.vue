<template>
  <header class="header">
    <div class="container header__container">
      <router-link to="/" class="logo">
        <span class="logo__icon">⏱️</span> TimeKeeper
      </router-link>

      <nav class="nav nav--desktop">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link
              to="/dashboard"
              class="nav__link"
              active-class="nav__link--active"
              exact-active-class="nav__link--active"
            >
              Панель
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              to="/attendance"
              class="nav__link"
              active-class="nav__link--active"
            >
              Посещаемость
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              to="/working-time"
              class="nav__link"
              active-class="nav__link--active"
            >
              Рабочее время
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              to="/support"
              class="nav__link"
              active-class="nav__link--active"
            >
              Поддержка
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="header-buttons header-buttons--desktop">
        <button @click="logout" class="btn btn--outline-light header-buttons__button">Выйти</button>
      </div>

      <button
        class="burger"
        :class="{ 'burger--open': isMenuOpen }"
        @click="toggleMenu"
        aria-label="Меню"
      >
        <span class="burger__line"></span>
        <span class="burger__line"></span>
        <span class="burger__line"></span>
      </button>
    </div>

    <transition name="slide">
      <div
        v-if="isMenuOpen"
        class="mobile-menu"
        :class="{ 'mobile-menu--open': isMenuOpen }"
      >
        <div class="mobile-menu__inner">
          <nav class="mobile-nav">
            <ul class="mobile-nav__list">
              <li class="mobile-nav__item">
                <router-link
                  to="/dashboard"
                  class="mobile-nav__link"
                  active-class="mobile-nav__link--active"
                >
                  Панель
                </router-link>
              </li>
              <li class="mobile-nav__item">
                <router-link
                  to="/attendance"
                  class="mobile-nav__link"
                  active-class="mobile-nav__link--active"
                >
                  Посещаемость
                </router-link>
              </li>
              <li class="mobile-nav__item">
                <router-link
                  to="/working-time"
                  class="mobile-nav__link"
                  active-class="mobile-nav__link--active"
                >
                  Рабочее время
                </router-link>
              </li>
              <li class="mobile-nav__item">
                <router-link
                  to="/support"
                  class="mobile-nav__link"
                  active-class="mobile-nav__link--active"
                >
                  Поддержка
                </router-link>
              </li>
            </ul>
          </nav>
          <div class="mobile-buttons">
            <button @click="logout" class="btn btn--outline-light mobile-btn">Выйти</button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const logout = () => {
  localStorage.removeItem('auth_token')
  router.push('/')
  isMenuOpen.value = false
}
</script>

<style scoped>
.header {
  background-color: #212529;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}
.header__container {
  display: flex;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  gap: 1.5rem;
}
.header-buttons__button {
  border: 1px solid rgba(255,255,255,0.5);
}

@media (max-width: 768px) {
  .header__container {
    padding: 0 16px;
  }
}
</style>