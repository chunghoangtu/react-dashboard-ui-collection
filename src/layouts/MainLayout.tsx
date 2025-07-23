import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
    <Header />
    <main className='min-h-[80vh]'>
      <Outlet /> {/* Page Content go in here */}
    </main>
    <Footer />
    </>
  )
}

export default MainLayout;