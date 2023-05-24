import React, { useState, useEffect } from "react";
import axios from "axios";
import Clothes from "./Clothes";

export default function Clothing() {
    const [clothing, setClothing] = useState([]);
    const [filter, setFilter] = useState("");
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
    }, [API]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredClothing = clothing.filter((clothes) => {
        const price = String(clothes.price).toLowerCase();
        const style = clothes.style ? clothes.style.toLowerCase() : "";

        return (
            price.includes(filter.toLowerCase()) || style.includes(filter.toLowerCase())
        );
    });


    return (
        <div className="Clothing">
            <section>
                <h2>Explore the World of Black Fashion Designers</h2>
                <h3>DRP: Embrace the DRIP, Love the DROP</h3>

                <input
                    type="text"
                    placeholder="Filter by style or price"
                    value={filter}
                    onChange={handleFilterChange}
                />

                <table>
                    <thead>
                        <tr>
                            <th className="message">Discover Unique and Stylish Designs</th>
                        </tr>
                    </thead>
                    <tbody className="map-image">
                        {Array.isArray(filteredClothing) &&
                            filteredClothing.map((clothes) => (
                                <Clothes key={clothes.id} clothes={clothes} />
                            ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
