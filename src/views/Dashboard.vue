<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <div class="container">
        <div class="dashboard">
          <div class="dashboard__welcome-card">
            <h1 class="dashboard__title">Здравствуйте, {{ userName }}</h1>
            <p>Сегодня {{ formatDate(todayDate) }}</p>
          </div>
          <div class="dashboard__employees">
            <h2 class="dashboard__section-title">Сотрудники</h2>
            <div class="dashboard__employee-list">
              <div
                v-for="emp in employees"
                :key="emp.id"
                class="dashboard__employee-card"
              >
                <div class="dashboard__employee-avatar">
                  {{ emp.name.charAt(0) }}
                </div>
                <div class="dashboard__employee-info">
                  <div class="dashboard__employee-name">{{ emp.name }}</div>
                  <div class="dashboard__employee-dept">{{ getDepartmentName(emp.department) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="container">© 2026 TimeKeeper. Личный кабинет</div>
    </footer>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import TheHeader from '../components/TheHeader.vue'
import { API_ENDPOINTS } from '../api/config.js'

const employees = ref([])
const userName = ref('Сергей')

const todayDate = new Date().toISOString().split('T')[0]

onMounted(async () => {
  try {
    const res = await fetch(API_ENDPOINTS.employees)
    const data = await res.json()
    employees.value = data.employees || []
  } catch (e) {
    console.error('Failed to load employees', e)
  }
})

function getDepartmentName(dept) {
  const names = { it: 'IT', hr: 'HR', sales: 'Продажи' }
  return names[dept] || dept
}


function formatDate(dateStr) {
  const parts = dateStr.split('-')
  return `${parts[2]}.${parts[1]}.${parts[0]}`
}


</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.dashboard__welcome-card {
  background: linear-gradient(135deg, #0d6efd, #0b5ed7);
  color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
.dashboard__title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.dashboard__welcome-card p {
  margin: 0;
}

.dashboard__section-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: #1e293b;
}

.dashboard__employee-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.dashboard__employee-card {
  background: white;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  transition: box-shadow 0.2s;
}
.dashboard__employee-card:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.dashboard__employee-avatar {
  width: 40px;
  height: 40px;
  background: #0d6efd;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-transform: uppercase;
}

.dashboard__employee-info {
  flex: 1;
}
.dashboard__employee-name {
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.3rem;
}
.dashboard__employee-dept {
  font-size: 0.75rem;
  color: #6c757d;
}

@media (max-width: 768px) {
  .dashboard__welcome-card h1 {
    font-size: 1.4rem;
  }
  .dashboard__welcome-card p {
    font-size: 0.9rem;
  }
  .dashboard__employee-avatar {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
  .dashboard__employee-card {
    padding: 0.5rem 0.75rem;
  }
  .dashboard__employee-name {
    font-size: 0.9rem;
  }
  .dashboard__employee-dept {
    font-size: 0.7rem;
  }
  .dashboard__employees h2 {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .dashboard__employee-card {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
  .dashboard__employee-info {
    flex: auto;
    width: 100%;
    text-align: center;
  }
}

</style>