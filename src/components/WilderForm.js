import {useState} from "react";
import axios from "axios";

const WilderForm = ({wilder, onSave}) => {
    const [name, setName] = useState('');
    const handleNameChanged = (e) => {
        setName(e.target.value);
    }


        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                onSave(name);
            }}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={handleNameChanged}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        );
    }

export default WilderForm;