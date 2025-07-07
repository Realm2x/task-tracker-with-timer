# Pomidoro Task Tracker 🍅⏱️  

**Task manager with Pomodoro timer, productivity stats, and customizable UI.**  
[![Live Demo](https://img.shields.io/badge/demo-live-green?style=for-the-badge)](https://task-tracker-with-timer.netlify.app/)  

---

## 🚀 Features  
- **Task Management**  
  - Add/edit/delete tasks with drag-and-drop sorting ([@dnd-kit](https://dndkit.com/)).  
  - Pomodoro timer (work/break intervals).  
- **Productivity Analytics**  
  - Charts ([Chart.js](https://www.chartjs.org/)) for completed tasks, total time, pauses.  
  - Track stops, idle time, and session history.  
- **Customization**  
  - Light/dark theme toggle.  
  - Animations ([Framer Motion](https://www.framer.com/motion/)).  
  - Sound notifications ([use-sound](https://github.com/joshwcomeau/use-sound)).  

---

## 🛠 Tech Stack  
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

## 📦 Installation  
1. Clone the repo:  
   git clone https://github.com/your-username/pomidoro-project.git
   
3. Install dependencies:

    npm install

3. Run dev server:

    npm run dev

4. Build for production:

    npm run build
