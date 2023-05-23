import axios from "axios";
import { useState, useEffect } from "react";
import Clothes from "./Clothes";


export default function Clothing() {
    const [clothing, setClothing] = useState([]);
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios
            .get(`${API}/clothing`)
            .then((response) => {
                setClothing(response.data);
            })
            .catch((error) => {
                console.error("Error fetching clothing:", error);
            });
    }, []);

    return (
        <div className="Clothing">
            <section>
                <h2>Explore the World of Black Fashion Designers</h2>
                <h3>DRP: Embrace the DRIP, Love the DROP</h3>
                <table>
                    <thead>
                        <tr>
                            <th className="message">Discover Unique and Stylish Designs</th>
                        </tr>
                    </thead>
                    <tbody className="map-image">
                        {Array.isArray(clothing) && clothing.map((clothes) => (
                            <Clothes key={clothes.id} clothes={clothes} />
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}