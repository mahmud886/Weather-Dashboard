import Header from './components/Header/Header';
import WeatherBoard from './components/Weather/WeatherBoard';

export default function Page() {
  return (
    <>
      <div className='grid place-items-center h-screen'>
        <Header />

        <main>
          <section className=''>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </>
  );
}
