<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <div class="container">
        <div class="working-time">
          <h1 class="working-time__title">Рабочее время сотрудников</h1>

          <div class="working-time__layout">
            <div class="working-time__employees-list">
              <h3 class="working-time__list-title">Сотрудники</h3>
              <ul>
                <li
                  v-for="emp in employees"
                  :key="emp.id"
                  @click="selectedEmployee = emp"
                  class="working-time__employee-item"
                  :class="{ 'working-time__employee-item--active': selectedEmployee?.id === emp.id }"
                >
                  {{ emp.name }}
                </li>
              </ul>
            </div>

            <div class="working-time__details" v-if="selectedEmployee">
              <h2>{{ selectedEmployee.name }}</h2>
              <div class="working-time__table-wrapper">
                <table class="working-time__hours-table">
                  <thead>
                    <tr>
                      <th>Дата</th>
                      <th>Отработано (ч)</th>
                      <th>Переработка (ч)</th>
                      <th>Статус</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="day in employeeWorkDays" :key="day.date">
                      <td>{{ formatDate(day.date) }}</td>
                      <td>{{ day.hoursWorked }}</td>
                      <td :class="{ 'working-time__hours-cell--overtime': day.overtime > 0 }">{{ day.overtime }}</td>
                      <td>
                        <span :class="['working-time__status-badge', day.overtime > 0 ? 'working-time__status-badge--overtime' : 'working-time__status-badge--normal']">
                          {{ day.overtime > 0 ? 'Переработка' : (day.overtime < 0 ? 'Недоработка' : 'Норма') }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                 </table>
              </div>
              <div class="working-time__summary">
                <p><strong>Всего за период:</strong> {{ totalHours }} ч (переработка: {{ totalOvertime }} ч)</p>
              </div>
            </div>
            <div v-else class="no-selection">Выберите сотрудника из списка</div>
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
import { ref, computed } from 'vue'
import TheHeader from '../components/TheHeader.vue'
import { employees, workingTimeData } from '../mocks/employees.js'

const selectedEmployee = ref(null)

const employeeWorkDays = computed(() => {
  if (!selectedEmployee.value) return []
  return workingTimeData
    .filter(item => item.employeeId === selectedEmployee.value.id)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
})

const totalHours = computed(() => {
  return employeeWorkDays.value.reduce((sum, day) => sum + day.hoursWorked, 0).toFixed(1)
})
const totalOvertime = computed(() => {
  return employeeWorkDays.value.reduce((sum, day) => day.overtime > 0 ? sum + day.overtime : sum, 0).toFixed(1)
})

function formatDate(dateStr) {
  const parts = dateStr.split('-')
  return `${parts[2]}.${parts[1]}.${parts[0]}`
}
</script>

<style scoped>
.working-time__title { 
  font-size: 1.8rem; 
  margin-bottom: 1.5rem; 
}
.working-time__layout { 
  display: flex; 
  gap: 2rem; 
  flex-wrap: wrap; 
}
.working-time__employees-list { 
  flex: 1; 
  min-width: 200px; 
  background: white; 
  border-radius: 0.75rem; 
  padding: 1rem; 
  box-shadow: 0 1px 3px rgba(0,0,0,0.1); 
}
.working-time__list-title { 
  margin-top: 0; 
  margin-bottom: 0.5rem;
}
.working-time__employees-list ul { 
  list-style: none; 
  padding: 0; 
  margin: 0;
  display: flex;
  flex-direction: column;  
  gap: 0.5rem;
}
.working-time__employee-item { 
  padding: 0.5rem; 
  cursor: pointer; 
  border-radius: 0.5rem; 
  transition: background 0.2s; 
  white-space: normal;      
}
.working-time__employee-item:hover { 
  background: #e9ecef; 
}
.working-time__employee-item--active { 
  background: #0d6efd; 
  color: white; 
}
.working-time__details { 
  flex: 3; 
  background: white; 
  border-radius: 0.75rem; 
  padding: 1rem; 
  box-shadow: 0 1px 3px rgba(0,0,0,0.1); 
  overflow-x: auto;         
}
.working-time__no-selection { 
  flex: 3; 
  background: white; 
  border-radius: 0.75rem; 
  padding: 2rem; 
  text-align: center; 
  color: #6c757d; 
}
.working-time__table-wrapper { 
  overflow-x: auto; 
}
.working-time__hours-table { 
  width: 100%; 
  border-collapse: collapse; 
  margin-top: 1rem;
}
.working-time__hours-table th, 
.working-time__hours-table td { 
  padding: 0.5rem 1rem; 
  text-align: left; 
  border-bottom: 1px solid #e9ecef; 
}
.working-time__hours-table th { 
  background-color: #f8f9fa; 
}
.working-time__hours-cell--overtime { 
  color: #dc3545; 
  font-weight: 600; 
}
.working-time__status-badge { 
  padding: 0.25rem 0.5rem; 
  border-radius: 2rem; 
  font-size: 0.75rem; 
  font-weight: 600; 
}
.working-time__status-badge--overtime { 
  background-color: #f8d7da; 
  color: #842029; 
}
.working-time__status-badge--normal { 
  background-color: #d1e7dd; 
  color: #0f5132; 
}
.working-time__summary { 
  margin-top: 1rem; 
  padding-top: 1rem; 
  border-top: 1px solid #e9ecef; 
}


@media (max-width: 768px) {
  .working-time__layout {
    flex-direction: column;  
    gap: 1rem;
  }
  .working-time__employees-list {
    width: 100%;
    min-width: unset;
  }
  .working-time__employees-list ul {
    flex-direction: column;
    gap: 0.5rem;
  }
  .working-time__details {
    width: 100%;
  }
  .working-time__hours-table th,
  .working-time__hours-table td {
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;
  }
  .working-time__summary {
    font-size: 0.85rem;
  }
}
</style>