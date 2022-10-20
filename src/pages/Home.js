import Wilder from '../components/Wilder';
import WilderForm from '../components/WilderForm';
import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {
const [wilders, setWilders] = useState([]);

useEffect(() => {
    const fetchWilders = async () => {
        const response = await axios.get('http://localhost:5000/api/wilders');
        setWilders(response.data);
    }
    fetchWilders();
}, []);
const deleteWilder = async (wilder) => {
    await axios.delete(`http://localhost:5000/api/wilders/${wilder.id}`);
    setWilders(wilders.filter((w) => w.id !== wilder.id));
}
const save = async (name) => {
        const response = await axios.post('http://localhost:5000/api/wilders', {name});
        setWilders([...wilders, response.data]);
    };
return (
        <div>
            <header>
                <div className="container">
                    <h1>Wilders Book</h1>
                </div>
            </header>
            <main className="container">
                <h2>Wilders</h2>
                <WilderForm onSave={save}/>
                <section className="card-row">
                    {
                        wilders.map((wilder) => (
                        <Wilder
                            key={wilder.id}
                            wilderInfos={wilder} onDeleteButtonClicked={() => {
                                deleteWilder(wilder);
                            }
                        }
                        />
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