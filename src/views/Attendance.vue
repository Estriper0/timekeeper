<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <div class="container">
        <div class="attendance">
          <h1 class="attendance__title">Посещаемость сотрудников</h1>

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

          <div class="attendance__filter-bar">
            <label class="attendance__filter-label" for="attendance-date">Выберите дату:</label>
            <input
              id="attendance-date"
              type="date"
              v-model="selectedDate"
              class="attendance__filter-select"
            />
          </div>

          <div class="attendance__table-wrapper">
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
                    <span :class="['attendance__status-badge', `attendance__status-badge--${getRecord(emp.id)?.status || 'absent'}`]">
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
    <footer class="footer">
      <div class="container">© 2026 TimeKeeper. Личный кабинет</div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TheHeader from '../components/TheHeader.vue'
import { employees, attendanceData } from '../mocks/employees.js'

const selectedDate = ref(new Date().toISOString().slice(0, 10))

function getRecord(employeeId) {
  return attendanceData.find(record => record.date === selectedDate.value && record.employeeId === employeeId)
}

const recordsForDate = computed(() => attendanceData.filter(r => r.date === selectedDate.value))

const presentCount = computed(() => recordsForDate.value.filter(r => r.status !== 'absent').length)
const lateCount = computed(() => recordsForDate.value.filter(r => r.status === 'late').length)
const absentCount = computed(() => recordsForDate.value.filter(r => r.status === 'absent').length)

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
.attendance__title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.attendance__filter-bar {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.attendance__filter-label {
  margin-top: 0.4rem;
}

.attendance__filter-select {
  padding: 0.5rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
  font-family: inherit;
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

.attendance__table-wrapper {
  overflow-x: auto;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.attendance-table {
  width: 100%;
  min-width: 680px;
  max-width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  table-layout: fixed;
}

.attendance-table th,
.attendance-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.attendance-table th:nth-child(1),
.attendance-table td:nth-child(1) {
  width: 28%;
  min-width: 160px;
}

.attendance-table th:nth-child(2),
.attendance-table td:nth-child(2) {
  width: 22%;
  min-width: 130px;
}

.attendance-table th:nth-child(3),
.attendance-table td:nth-child(3),
.attendance-table th:nth-child(4),
.attendance-table td:nth-child(4) {
  width: 12%;
  min-width: 100px;
}

.attendance-table th:nth-child(5),
.attendance-table td:nth-child(5) {
  width: 18%;
  min-width: 120px;
}

.attendance-table th {
  background-color: #f8f9fa;
  font-weight: 600;
}

.attendance__status-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.attendance__status-badge--on-time {
  background-color: #d1e7dd;
  color: #0f5132;
}

.attendance__status-badge--late {
  background-color: #f8d7da;
  color: #842029;
}

.attendance__status-badge--absent {
  background-color: #fff3cd;
  color: #664d03;
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
  .attendance__title {
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
  .attendance__filter-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .attendance__filter-label {
    margin-top: 0;
  }
  .attendance__filter-select {
    width: 100%;
  }
  .attendance-table th,
  .attendance-table td {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
  }
}

</style>