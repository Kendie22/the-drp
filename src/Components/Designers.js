import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Designer from "./Designer";


export default function Designers() {
    const [designers, setDesigners] = useState([]);
    const API = process.env.REACT_APP_API_URL;
    const { clothing_id } = useParams
    useEffect(() => {
        axios
            .get(`${API}/clothing`)
            .then((response) => {
                setDesigners(response.data);
            })
            .catch((error) => {
                console.error("Error fetching designer:", error);
            });
    }, [API]);

    return (

        <div className="Designers">
            <section>
                <h2>Discover Unique and Stylish Designs</h2>
                <p>DRP: Embrace the DRIP, Love the DROP</p>
                <h1>Designers for Clothing {clothing_id}</h1>

                <ul>
                    {designers.map((designer, index) => (
                        <li key={index}>{designer}</li>
                    ))}
                </ul>
                <table>
                    <tbody className="designers-map-image">
                        {designers.map((designer) => (
                            <Designer key={designer.id} designer={designer} />
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
