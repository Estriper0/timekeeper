<template>
  <header class="app-header">
    <div class="container header-container">
      <div class="logo">
        <span>⏱️</span> TimeKeeper
      </div>

      <!-- Бургер-кнопка (только на мобильных) -->
      <button
        class="burger-btn"
        :class="{ active: isMenuOpen }"
        @click="toggleMenu"
        aria-label="Меню"
      >
        <span></span><span></span><span></span>
      </button>

      <!-- Десктопная навигация (слева) -->
      <nav class="desktop-nav">
        <ul class="nav-list">
          <li>
            <router-link
              to="/dashboard"
              class="nav-link"
              active-class="nav-link--active"
              exact-active-class="nav-link--active"
            >
              Панель
            </router-link>
          </li>
          <li>
            <router-link
              to="/attendance"
              class="nav-link"
              active-class="nav-link--active"
            >
              Посещаемость
            </router-link>
          </li>
          <li>
            <router-link
              to="/working-time"
              class="nav-link"
              active-class="nav-link--active"
            >
              Рабочее время
            </router-link>
          </li>
          <li>
            <router-link
              to="/support"
              class="nav-link"
              active-class="nav-link--active"
            >
              Поддержка
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Кнопка выхода прижата к правому краю -->
      <button @click="logout" class="btn btn--outline desktop-logout">Выйти</button>

      <!-- Мобильное меню (выпадающее) -->
      <transition name="slide">
        <div v-if="isMenuOpen" class="mobile-menu">
          <ul class="mobile-nav-list">
            <li>
              <router-link
                to="/dashboard"
                class="mobile-nav-link"
              >
                Панель
              </router-link>
            </li>
            <li>
              <router-link
                to="/attendance"
                class="mobile-nav-link"
              >
                Посещаемость
              </router-link>
            </li>
            <li>
              <router-link
                to="/working-time"
                class="mobile-nav-link"
              >
                Рабочее время
              </router-link>
            </li>
            <li>
              <router-link
                to="/support"
                class="mobile-nav-link"
              >
                Поддержка
              </router-link>
            </li>
          </ul>
          <button @click="logout" class="btn btn--outline mobile-logout">Выйти</button>
        </div>
      </transition>
    </div>
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
.app-header {
  background-color: #212529;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}
.header-container {
  display: flex;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
}
.logo {
  font-size: 1.4rem;
  font-weight: 800;
  color: #0d6efd;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 2rem;   
}


.desktop-nav {
  display: flex;
  align-items: center;
}
.nav-list {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-link {
  background: none;
  border: none;
  color: rgba(255,255,255,0.85);
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0.25rem 0;
  transition: all 0.2s;
}
.nav-link:hover {
  color: white;
}
.nav-link.active {
  color: white;
  font-weight: 600;
  border-bottom: 2px solid #0d6efd;
}

/* Кнопка выхода прижата к правому краю */
.desktop-logout {
  margin-left: auto;
  margin-right: 1rem;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.5);
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}
.desktop-logout:hover {
  background: rgba(255,255,255,0.1);
  border-color: white;
}


.burger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
  margin-right: 1rem;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
}
.burger-btn span {
  width: 100%;
  height: 2px;
  background-color: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}
.burger-btn.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}
.burger-btn.active span:nth-child(2) {
  opacity: 0;
}
.burger-btn.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}


.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #212529;
  padding: 1rem 24px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  border-top: 1px solid rgba(255,255,255,0.1);
  z-index: 100;
}
.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.mobile-nav-link {
  background: none;
  border: none;
  color: rgba(255,255,255,0.85);
  font-size: 1rem;
  padding: 0.5rem 0;
  width: 100%;
  text-align: left;
  cursor: pointer;
}
.mobile-nav-link.active {
  color: white;
  font-weight: 600;
}
.mobile-logout {
  width: 100%;
  text-align: center;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.5);
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
}


.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}


@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  .desktop-logout {
    display: none;
  }
  .burger-btn {
    display: flex;
  }
  .header-container {
    padding: 0 16px;
  }
}
</style>