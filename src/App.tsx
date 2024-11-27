import Hero from './components/Hero';
import ComparisonTable from './components/Compare-table';
import Features from './components/Features/Features';
import Footer from './components/Footer';
import Faq from './components/Faq';

function App() {
  return (
    <>
      <body className='bg-primary'>
        <Hero />
        <ComparisonTable />
        <Features />
        <Faq/>
        <Footer />
      </body>
    </>
  );
}

export default App;