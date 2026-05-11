<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <div class="container">
        <div class="working-time">
          <h1 class="page-title">Рабочее время сотрудников</h1>

          <div class="wt-layout">
            <!-- Список сотрудников -->
            <div class="employees-list">
              <h3>Сотрудники</h3>
              <ul>
                <li
                  v-for="emp in employees"
                  :key="emp.id"
                  @click="selectedEmployee = emp"
                  :class="{ active: selectedEmployee?.id === emp.id }"
                >
                  {{ emp.name }}
                </li>
              </ul>
            </div>

            <!-- Детальная таблица по выбранному сотруднику -->
            <div class="employee-details" v-if="selectedEmployee">
              <h2>{{ selectedEmployee.name }}</h2>
              <div class="table-wrapper">
                <table class="hours-table">
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
                      <td :class="{ overtime: day.overtime > 0 }">{{ day.overtime }}</td>
                      <td>
                        <span :class="['status-badge', day.overtime > 0 ? 'overtime' : 'normal']">
                          {{ day.overtime > 0 ? 'Переработка' : (day.overtime < 0 ? 'Недоработка' : 'Норма') }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                 </table>
              </div>
              <div class="summary">
                <p><strong>Всего за период:</strong> {{ totalHours }} ч (переработка: {{ totalOvertime }} ч)</p>
              </div>
            </div>
            <div v-else class="no-selection">Выберите сотрудника из списка</div>
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
import { ref, computed } from 'vue'
import TheHeader from '../components/TheHeader.vue'
import { employees, workingTimeData } from '../mocks/employees.js'

const selectedEmployee = ref(null)

// Получить рабочие дни выбранного сотрудника (отсортированные по дате)
const employeeWorkDays = computed(() => {
  if (!selectedEmployee.value) return []
  return workingTimeData
    .filter(item => item.employeeId === selectedEmployee.value.id)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
})

// Суммарные часы и переработка
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
.page-title { 
  font-size: 1.8rem; 
  margin-bottom: 1.5rem; 
}
.wt-layout { 
  display: flex; 
  gap: 2rem; 
  flex-wrap: wrap; 
}
.employees-list { 
  flex: 1; 
  min-width: 200px; 
  background: white; 
  border-radius: 0.75rem; 
  padding: 1rem; 
  box-shadow: 0 1px 3px rgba(0,0,0,0.1); 
}
.employees-list h3 { 
  margin-top: 0; 
  margin-bottom: 0.5rem;
}
.employees-list ul { 
  list-style: none; 
  padding: 0; 
  margin: 0;
  display: flex;
  flex-direction: column;  
  gap: 0.5rem;
}
.employees-list li { 
  padding: 0.5rem; 
  cursor: pointer; 
  border-radius: 0.5rem; 
  transition: background 0.2s; 
  white-space: normal;      
}
.employees-list li:hover { 
  background: #e9ecef; 
}
.employees-list li.active { 
  background: #0d6efd; 
  color: white; 
}
.employee-details { 
  flex: 3; 
  background: white; 
  border-radius: 0.75rem; 
  padding: 1rem; 
  box-shadow: 0 1px 3px rgba(0,0,0,0.1); 
  overflow-x: auto;         
}
.no-selection { 
  flex: 3; 
  background: white; 
  border-radius: 0.75rem; 
  padding: 2rem; 
  text-align: center; 
  color: #6c757d; 
}
.table-wrapper { 
  overflow-x: auto; 
}
.hours-table { 
  width: 100%; 
  border-collapse: collapse; 
  margin-top: 1rem;
}
.hours-table th, 
.hours-table td { 
  padding: 0.5rem 1rem; 
  text-align: left; 
  border-bottom: 1px solid #e9ecef; 
}
.hours-table th { 
  background-color: #f8f9fa; 
}
.overtime { 
  color: #dc3545; 
  font-weight: 600; 
}
.status-badge { 
  padding: 0.25rem 0.5rem; 
  border-radius: 2rem; 
  font-size: 0.75rem; 
  font-weight: 600; 
}
.status-badge.overtime { 
  background-color: #f8d7da; 
  color: #842029; 
}
.status-badge.normal { 
  background-color: #d1e7dd; 
  color: #0f5132; 
}
.summary { 
  margin-top: 1rem; 
  padding-top: 1rem; 
  border-top: 1px solid #e9ecef; 
}


@media (max-width: 768px) {
  .wt-layout {
    flex-direction: column;  
    gap: 1rem;
  }
  .employees-list {
    width: 100%;
    min-width: unset;
  }
  .employees-list ul {
    flex-direction: column;
    gap: 0.5rem;
  }
  .employee-details {
    width: 100%;
  }
  .hours-table th,
  .hours-table td {
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;
  }
  .summary {
    font-size: 0.85rem;
  }
}
</style>