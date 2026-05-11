<template>
  <router-view />
</template>

<script setup>
</script>

<style>
  .main-content {
    padding: 2rem 0;
  }
  .app-footer {
    background-color: #212529;
    color: rgba(255,255,255,0.7);
    padding: 2rem 0;
    text-align: center;
    font-size: 0.85rem;
  }
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    .main-content {
      padding: 1rem 0;
    }
    .login-card {
      padding: 1.5rem;
      margin: 0 16px;
    }
    .login-card h2 {
      font-size: 1.4rem;
    }
    .app-footer {
      padding: 1rem 0;
      font-size: 0.75rem;
    }
  }
</style>