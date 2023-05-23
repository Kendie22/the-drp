import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DesignersEdit() {
    let { id } = useParams();
    const navigate = useNavigate();

    const API = process.env.REACT_APP_API_URL;

    const [designer, setDesigner] = useState({
        designer_id: 0,
        first_name: "",
        last_name: "",
        brand_name: "",
        years_in_industry: "",
        material: "",
        price: 0,
        image: "",
    });

    useEffect(() => {
        axios.get(`${API}/designer/${id}`).then((response) => {
            setDesigner(response.data);
        });
    }, [API, id]);

    const handleChange = (event) => {
        setDesigner({ ...designer, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put(`${API}/designer/${id}`, designer)
            .then((response) => {
                navigate(`/designer/${id}`);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        value={designer.first_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        value={designer.last_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="brand_name">Brand Name</label>
                    <input
                        type="text"
                        name="brand_name"
                        value={designer.brand_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="years_in_industry">Years in Industry</label>
                    <input
                        type="text"
                        name="years_in_industry"
                        value={designer.years_in_industry}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="material">Material</label>
                    <input
                        type="text"
                        name="material"
                        value={designer.material}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        name="price"
                        value={designer.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input
                        type="text"
                        pattern="http[s]*://.+"
                        name="image"
                        value={designer.image}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
