# Pomidoro Task Tracker 🍅⏱️  

**Менеджер задач с Pomodoro-таймером, статистикой продуктивности и настраиваемым интерфейсом.**  
[![Live Demo](https://img.shields.io/badge/demo-live-green?style=for-the-badge)](https://task-tracker-with-timer.netlify.app/)  

[![pomidoro.png](https://i.postimg.cc/BQD9qJm2/pomidoro.png)](https://postimg.cc/4mJFPRk3)

---

## 🚀 Возможности  
- **Управление задачами**  
  - Добавление/редактирование/удаление задач с сортировкой перетаскиванием ([@dnd-kit](https://dndkit.com/)).  
  - Pomodoro-таймер (работа/перерывы)..  
- **Аналитика продуктивности**  
  - Графики ([Chart.js](https://www.chartjs.org/)) для завершённых задач, общего времени, пауз. 
  - Отслеживание остановок, времени простоя и истории сессий.  
- **Кастомизация**  
  - Переключение светлой/тёмной темы.  
  - Анимации ([Framer Motion](https://www.framer.com/motion/)).  
  - Звуковые уведомления ([use-sound](https://github.com/joshwcomeau/use-sound)).  

---

## 🛠 Технологии
**Frontend**  
- React 18 + TypeScript  
- State: Redux Toolkit + Thunk  
- Routing: React Router  
- Styling: CSS Modules
- Build: Vite  

**Backend**  
- SSR: Express  

**Libraries**  
- UI: `framer-motion`, `react-hook-form`  
- Charts: `chart.js`, `react-chartjs-2`  
- Utils: `uuid`, `use-sound`  

---

## 📦 Установка
1. Клонируйте репозиторий:
   git clone https://github.com/your-username/pomidoro-project.git
   
3. Установите зависимости:

    npm install

3. Запустите сервер для разработки:

    npm run dev

4. Соберите проект для production:

    npm run build
