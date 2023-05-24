import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Designers() {
    const [designers, setDesigners] = useState([]);
    const [filter, setFilter] = useState("");

    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios
            .get(`${API}/designers`)
            .then((response) => {
                setDesigners(response.data.allDesigners);
            })
            .catch((error) => {
                console.error("Error fetching designers:", error);
            });
    }, [API]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };
    // change filter useState variable name
    //filter designers by first character of their name (sting is an array of characters)
    const getDesigners = designers.filter((designer) => {
        const fullName = `${designer.first_name} ${designer.last_name}`;
        return (
            fullName.toLowerCase().includes(filter.toLowerCase()) || // Customize the filter condition
            designer.brand_name.toLowerCase().includes(filter.toLowerCase())
        );
    });

    return (
        <div className="Designers">
            <section>
                <h2>Discover Unique and Stylish Designs</h2>
                <p>DRP: Embrace the DRIP, Love the DROP</p>
                <h1>Designers for Clothing</h1>

                <input
                    type="text"
                    placeholder="Filter by name or brand"
                    value={filter}
                    onChange={handleFilterChange}
                />

                <ul>
                    {getDesigners.map((designer, index) => (
                        <div key={index}>
                            <Link to={`/designer/${designer.designer_id}`}>
                                <img
                                    src={designer.image}
                                    alt="designer pic"
                                    className="designer-image"
                                    style={{ maxWidth: "150px", maxHeight: "200px" }}
                                />
                            </Link>
                            <p>{`Name: ${designer.first_name} ${designer.last_name}`}</p>
                            <p>Brand Name: {designer.brand_name}</p>
                            <p>Years in Industry: {designer.years_in_industry}</p>
                            <p>Is Sustainable: {designer.is_sustainable ? "Yes" : "No"}</p>
                            <p>Country: {designer.country}</p>
                            <p>Price Point: {designer.price_point}</p>
                        </div>
                    ))}
                </ul>
            </section>
        </div>
    );
}
