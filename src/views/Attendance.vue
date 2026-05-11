<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <div class="container">
        <div class="attendance">
          <h1 class="page-title">Посещаемость сотрудников</h1>

          <!-- Карточки-сводки за выбранную дату -->
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-card__icon"></div>
              <div class="stat-card__content">
                <p class="stat-card__label">Всего сотрудников</p>
                <p class="stat-card__value">{{ employees.length }}</p>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-card__icon"></div>
              <div class="stat-card__content">
                <p class="stat-card__label">На работе</p>
                <p class="stat-card__value">{{ presentCount }}</p>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-card__icon"></div>
              <div class="stat-card__content">
                <p class="stat-card__label">Опоздания</p>
                <p class="stat-card__value stat-card__value--warning">{{ lateCount }}</p>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-card__icon"></div>
              <div class="stat-card__content">
                <p class="stat-card__label">Отсутствуют</p>
                <p class="stat-card__value">{{ absentCount }}</p>
              </div>
            </div>
          </div>

          <!-- Выбор даты -->
          <div class="filter-bar">
            <label><p class="filter-bar--label">Выберите дату: </p></label>
            <select v-model="selectedDate" class="filter-select">
              <option v-for="date in attendanceDates" :key="date" :value="date">
                {{ formatDate(date) }}
              </option>
            </select>
          </div>

          <!-- Таблица посещаемости за выбранную дату -->
          <div class="table-wrapper">
            <table class="attendance-table">
              <thead>
                <tr>
                  <th>Сотрудник</th>
                  <th>Отдел</th>
                  <th>Приход</th>
                  <th>Уход</th>
                  <th>Статус</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="emp in employees" :key="emp.id">
                  <td>{{ emp.name }}</td>
                  <td>{{ getDepartmentName(emp.department) }}</td>
                  <td>{{ getRecord(emp.id)?.checkIn || '—' }}</td>
                  <td>{{ getRecord(emp.id)?.checkOut || '—' }}</td>
                  <td>
                    <span :class="['status-badge', getRecord(emp.id)?.status || 'absent']">
                      {{ getStatusText(getRecord(emp.id)?.status) }}
                    </span>
                  </td>
                </tr>
              </tbody>
             </table>
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
import { employees, attendanceDates, attendanceData } from '../mocks/employees.js'

// Выбранная дата (по умолчанию последняя из трёх)
const selectedDate = ref(attendanceDates[attendanceDates.length - 1])

// Получить запись посещаемости для сотрудника по выбранной дате
function getRecord(employeeId) {
  return attendanceData.find(record => record.date === selectedDate.value && record.employeeId === employeeId)
}

// Статистика по выбранной дате
const recordsForDate = computed(() => attendanceData.filter(r => r.date === selectedDate.value))

const presentCount = computed(() => recordsForDate.value.filter(r => r.status !== 'absent').length)
const lateCount = computed(() => recordsForDate.value.filter(r => r.status === 'late').length)
const absentCount = computed(() => recordsForDate.value.filter(r => r.status === 'absent').length)

// Вспомогательные функции
function getDepartmentName(dept) {
  const names = { it: 'IT', hr: 'HR', sales: 'Продажи' }
  return names[dept] || dept
}

function getStatusText(status) {
  switch(status) {
    case 'on-time': return 'Вовремя'
    case 'late': return 'Опоздал'
    case 'absent': return 'Отсутствовал'
    default: return 'Нет данных'
  }
}

function formatDate(dateStr) {
  const parts = dateStr.split('-')
  return `${parts[2]}.${parts[1]}.${parts[0]}`
}
</script>


<style scoped>
.page-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.stat-card__icon {
  font-size: 2rem;
}

.stat-card__label {
  font-size: 0.8rem;
  color: #6c757d;
}

.stat-card__value {
  font-size: 1.6rem;
  font-weight: 700;
  color: #0d6efd;
}

.stat-card__value--warning {
  color: #dc3545;
}

.filter-bar {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.filter-bar--label{
    margin-top: 0.4rem;
}

.search-input, .filter-select {
  padding: 0.5rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
  font-family: inherit;
}

.search-input {
  flex: 1;
}

.table-wrapper {
  overflow-x: auto;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.attendance-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.attendance-table th,
.attendance-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
}

.attendance-table th {
  background-color: #f8f9fa;
  font-weight: 600;
}

.status-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-badge.on-time {
  background-color: #d1e7dd;
  color: #0f5132;
}

.status-badge.late {
  background-color: #f8d7da;
  color: #842029;
}

.status-badge.absent {
  background-color: #e2e3e5;
  color: #41464b;
}

.empty-row {
  text-align: center;
  padding: 2rem;
  color: #6c757d;
}


@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .page-title {
    font-size: 1.5rem;
  }
}


@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  .stat-card {
    padding: 0.75rem;
  }
  .stat-card__value {
    font-size: 1.3rem;
  }
  .filter-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .filter-bar--label {
    margin-top: 0;
  }
  .filter-select {
    width: 100%;
  }
  .attendance-table th,
  .attendance-table td {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
  }
}

</style>