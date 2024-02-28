import { useEffect, useState } from 'react';
import './App.css';
import {Header} from './shared/Header';
import {Main} from './shared/Main';
import { Layout } from './shared/Layout';
import { TimerPage } from './shared/Main/TimerPage';
import { Route, Routes } from 'react-router-dom';
import { StatisticPage } from './shared/Main/StatisticPage';

function App() {
  const [ mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  return (
    <>
      {mounted && (
        <Layout>
          <Header />
          <Main >
            <Routes>
              <Route path='/' element={<TimerPage />} />
              <Route path='/stat' element={<StatisticPage />} />
            </Routes>
          </Main>
        </Layout>
      )}
    </>
  )
}

export default App

