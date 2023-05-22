import axios from "axios";
import { useState, useEffect } from "react";
import Designer from "./Designer";

const API = process.env.REACT_APP_API_URL;

export default function Designers() {
    const [designers, setDesigners] = useState([]);

    useEffect(() => {
        axios
            .get(`${API}/clothing`)
            .then((response) => {
                setDesigners(response.data);
            })
            .catch((error) => {
                console.error("Error fetching designer:", error);
            });
    }, []);

    return (
        <div className="Designers">
            <section>
                <h2>Discover Unique and Stylish Designs</h2>
                <p>DRP: Embrace the DRIP, Love the DROP</p>
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
