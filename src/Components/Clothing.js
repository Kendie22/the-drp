import axios from "axios";
import { useState, useEffect } from "react";
import Clothes from "./Clothes";

const API = process.env.REACT_APP_API_URL;

export default function Clothing() {
    const [clothing, setClothing] = useState([]);

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
                <h2>Explore the Captivating World of Black Fashion Designers</h2>
                <p>DRP: Embrace the DRIP, Love the DROP</p>
                <table>

                    <tbody className="map-image">
                        {clothing.map((clothes) => (
                            <Clothes key={clothes.id} clothes={clothes} />
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
