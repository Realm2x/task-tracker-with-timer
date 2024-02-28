import './main.css';

interface IMain {
  children?: React.ReactNode;
}

export function Main({children}: IMain) {

  return (
    <main className='main'>
      {children}
    </main>
  );
}
