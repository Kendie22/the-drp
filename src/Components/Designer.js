import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Designer() {
    const API = process.env.REACT_APP_API_URL;
    const { id } = useParams();
    const [designer, setDesigner] = useState(null);

    useEffect(() => {
        axios
            .get(`${API}/designers/${id}`)
            .then((response) => {
                setDesigner(response.data);
            })
            .catch((error) => {
                console.error("Error fetching designer:", error);
            });
    }, [API, id]);

    if (!designer) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Designer Details</h1>
            <p>Designer ID: {designer.designer_id}</p>
            <p>First Name: {designer.first_name}</p>
            <p>Last Name: {designer.last_name}</p>
            <p>Brand Name: {designer.brand_name}</p>
            <p>Years in Industry: {designer.years_in_industry}</p>
            <p>Is Sustainable: {designer.is_sustainable ? "Yes" : "No"}</p>
            <p>Country: {designer.country}</p>
            <p>Price Point: {designer.price_point}</p>
            <img src={designer.image} alt="designer-pic" style={{ maxWidth: "150px", maxHeight: "200px" }} />

            <Link to="/designers">Go Back to Designers</Link>
        </div>
    );
}
