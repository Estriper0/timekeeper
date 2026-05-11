<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <div class="container">
        <div class="dashboard">
          <!-- Приветствие -->
          <div class="welcome-card">
            <h1>Здравствуйте, {{ userName }}</h1>
            <p>Сегодня {{ formatDate(todayDate) }}</p>
          </div>

          <!-- Список сотрудников -->
          <div class="employees-section">
            <h2>Сотрудники</h2>
            <div class="employee-list">
              <div
                v-for="emp in employees"
                :key="emp.id"
                class="employee-card"
              >
                <div class="employee-avatar">
                  {{ emp.name.charAt(0) }}
                </div>
                <div class="employee-info">
                  <div class="employee-name">{{ emp.name }}</div>
                  <div class="employee-dept">{{ getDepartmentName(emp.department) }}</div>
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
import { computed, ref } from 'vue'
import TheHeader from '../components/TheHeader.vue'
import { employees, attendanceData, attendanceDates } from '../mocks/employees.js'

// Имя пользователя
const userName = ref('Сергей')

// Текущая дата (последняя из доступных в моках)
const todayDate = attendanceDates[attendanceDates.length - 1] //

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

.welcome-card {
  background: linear-gradient(135deg, #0d6efd, #0b5ed7);
  color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
.welcome-card h1 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.employees-section h2,
.tasks-section h2 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: #1e293b;
}

.employee-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.employee-card {
  background: white;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  transition: box-shadow 0.2s;
}
.employee-card:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.employee-avatar {
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

.employee-info {
  flex: 1;
}
.employee-name {
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.3rem;
}
.employee-dept {
  font-size: 0.75rem;
  color: #6c757d;
}

@media (max-width: 768px) {
  .welcome-card h1 {
    font-size: 1.4rem;
  }
  .welcome-card p {
    font-size: 0.9rem;
  }
  .employee-avatar {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
  .employee-card {
    padding: 0.5rem 0.75rem;
  }
  .employee-name {
    font-size: 0.9rem;
  }
  .employee-dept {
    font-size: 0.7rem;
  }
  .employees-section h2 {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .employee-card {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
  .employee-info {
    flex: auto;
    width: 100%;
    text-align: center;
  }
}

</style>