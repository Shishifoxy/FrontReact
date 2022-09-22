import wildersData from '../data/wildersData';
import Wilder from '../components/Wilder';

const Home = () => {
    console.log(wildersData);
    return (
        <div>
            <header>
                <div className="container">
                    <h1>Wilders Book</h1>
                </div>
            </header>
            <main className="container">
                <h2>Wilders</h2>
                <section className="card-row">
                    {
                        wildersData.map((wilder) => (
                        <Wilder key={wilder.name} wilderInfos={wilder} />
                    ))
                    }

                </section>
            </main>
            <footer>
                <div className="container">
                    <p>&copy; 2022 Wild Code School</p>
                </div>
            </footer>
        </div>
    );
}
export default Home;