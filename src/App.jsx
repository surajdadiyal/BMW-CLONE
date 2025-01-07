import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppRoutes from './routes/AppRoutes';

AOS.init({
  offset: 120,
  delay: 0,
  duration: 400,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom'
})

function App() {
  return (
    <AppRoutes />
  );
}

export default App;
