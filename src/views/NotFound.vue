<template>
  <div>
    <main>
      <section class="section section--404">
        <div class="container">
          <div class="error-404">
            <h1 class="error-404__code">404</h1>
            <h2 class="error-404__title">Страница не найдена</h2>
            <p class="error-404__text">
              К сожалению, запрашиваемая страница не существует или была перемещена.
            </p>
            <router-link to="/" class="btn btn--primary btn--lg error-404__button">
              Вернуться на главную
            </router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// Простой компонент без логики
</script>

<style scoped>
/* Стили для 404 */
.section--404 {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-404 {
  text-align: center;
}

.error-404__code {
  font-size: 6rem;
  font-weight: bold;
  color: #dc3545;
  margin-bottom: 1rem;
}

.error-404__title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.error-404__text {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.error-404__button {
  padding: 1rem 2rem;
}
</style>