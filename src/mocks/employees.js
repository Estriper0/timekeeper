// src/mocks/employees.js

// Список сотрудников (5 подчинённых)
export const employees = [
  { id: 1, name: 'Анна Кузнецова', department: 'it' },
  { id: 2, name: 'Иван Петров', department: 'it' },
  { id: 3, name: 'Мария Смирнова', department: 'hr' },
  { id: 4, name: 'Дмитрий Орлов', department: 'sales' },
  { id: 5, name: 'Елена Васнецова', department: 'hr' }
]

// Доступные даты для посещаемости (3 дня)
export const attendanceDates = ['2026-04-28', '2026-04-29', '2026-04-30']

// Данные посещаемости: для каждой даты и сотрудника — статус и время
// Формат: { date, employeeId, checkIn, checkOut, status }
export const attendanceData = [
  // 28 апреля
  { date: '2026-04-28', employeeId: 1, checkIn: '09:05', checkOut: '18:10', status: 'late' },
  { date: '2026-04-28', employeeId: 2, checkIn: '08:58', checkOut: '18:02', status: 'on-time' },
  { date: '2026-04-28', employeeId: 3, checkIn: '09:15', checkOut: '18:05', status: 'late' },
  { date: '2026-04-28', employeeId: 4, checkIn: '09:00', checkOut: '18:00', status: 'on-time' },
  { date: '2026-04-28', employeeId: 5, checkIn: '08:50', checkOut: '17:55', status: 'on-time' },
  // 29 апреля
  { date: '2026-04-29', employeeId: 1, checkIn: '09:02', checkOut: '18:15', status: 'late' },
  { date: '2026-04-29', employeeId: 2, checkIn: '09:00', checkOut: '18:00', status: 'on-time' },
  { date: '2026-04-29', employeeId: 3, checkIn: '09:30', checkOut: '18:20', status: 'late' },
  { date: '2026-04-29', employeeId: 4, checkIn: '—',     checkOut: '—',     status: 'absent' },
  { date: '2026-04-29', employeeId: 5, checkIn: '08:55', checkOut: '17:50', status: 'on-time' },
  // 30 апреля
  { date: '2026-04-30', employeeId: 1, checkIn: '09:00', checkOut: '18:00', status: 'on-time' },
  { date: '2026-04-30', employeeId: 2, checkIn: '09:10', checkOut: '18:05', status: 'late' },
  { date: '2026-04-30', employeeId: 3, checkIn: '09:00', checkOut: '18:00', status: 'on-time' },
  { date: '2026-04-30', employeeId: 4, checkIn: '09:00', checkOut: '18:00', status: 'on-time' },
  { date: '2026-04-30', employeeId: 5, checkIn: '09:00', checkOut: '18:00', status: 'on-time' }
]

// Данные рабочего времени: для каждого сотрудника по дням (3 дня)
// Формат: { employeeId, date, hoursWorked, overtime }
export const workingTimeData = [
  // Анна (id=1)
  { employeeId: 1, date: '2026-04-28', hoursWorked: 8.2, overtime: 0.2 },
  { employeeId: 1, date: '2026-04-29', hoursWorked: 8.3, overtime: 0.3 },
  { employeeId: 1, date: '2026-04-30', hoursWorked: 8.0, overtime: 0 },
  // Иван (id=2)
  { employeeId: 2, date: '2026-04-28', hoursWorked: 8.0, overtime: 0 },
  { employeeId: 2, date: '2026-04-29', hoursWorked: 8.0, overtime: 0 },
  { employeeId: 2, date: '2026-04-30', hoursWorked: 8.2, overtime: 0.2 },
  // Мария (id=3)
  { employeeId: 3, date: '2026-04-28', hoursWorked: 8.1, overtime: 0.1 },
  { employeeId: 3, date: '2026-04-29', hoursWorked: 8.2, overtime: 0.2 },
  { employeeId: 3, date: '2026-04-30', hoursWorked: 8.0, overtime: 0 },
  // Дмитрий (id=4)
  { employeeId: 4, date: '2026-04-28', hoursWorked: 8.0, overtime: 0 },
  { employeeId: 4, date: '2026-04-29', hoursWorked: 0,   overtime: 0 },   // отсутствовал
  { employeeId: 4, date: '2026-04-30', hoursWorked: 8.0, overtime: 0 },
  // Елена (id=5)
  { employeeId: 5, date: '2026-04-28', hoursWorked: 7.9, overtime: -0.1 },
  { employeeId: 5, date: '2026-04-29', hoursWorked: 8.0, overtime: 0 },
  { employeeId: 5, date: '2026-04-30', hoursWorked: 8.0, overtime: 0 }
]