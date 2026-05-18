<template>
  <div class="not-found-page">
    <main>
      <section class="not-found-page__section">
        <div class="not-found-page__container">
          <div class="not-found-page__content">
            <h1 class="not-found-page__code">404</h1>
            <h2 class="not-found-page__title">Страница не найдена</h2>
            <p class="not-found-page__text">
              К сожалению, запрашиваемая страница не существует или была перемещена.
            </p>
            <router-link :to="redirectPath" class="not-found-page__button">
              {{ redirectText }}
            </router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isAuthenticated = computed(() => !!localStorage.getItem('auth_token'))

const redirectPath = computed(() => isAuthenticated.value ? '/dashboard' : '/')

const redirectText = computed(() => isAuthenticated.value ? 'Вернуться на панель управления' : 'Вернуться на главную')

onMounted(() => {
  // Автоматическое перенаправление через 2 секунды
  setTimeout(() => {
    router.push(redirectPath.value)
  }, 2000)
})
</script>

<style scoped>
.not-found-page__section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.not-found-page__container {
  width: 100%;
  max-width: 540px;
  padding: 2rem;
}

.not-found-page__content {
  text-align: center;
}

.not-found-page__code {
  font-size: 6rem;
  font-weight: bold;
  color: #dc3545;
  margin-bottom: 1rem;
}

.not-found-page__title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.not-found-page__text {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.not-found-page__button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #0d6efd;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
}
</style>