import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DesignersEdit() {
    let { id } = useParams();
    const navigate = useNavigate();

    const API = process.env.REACT_APP_API_URL

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
    //designer_id  first_name brand_name years_in_industry country   price_point  image 

    useEffect(() => {
        axios.get(`${API}/designer/${id}`).then((response) => {
            setDesigner(response.data);
        });
    }, [id]);

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
                    <label>Name</label>
                    <input
                        type="text"
                        name="style"
                        value={designer.first_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Brand Name</label>
                    <input
                        type="text"
                        name="color"
                        value={designer.brand_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Size</label>
                    <input
                        type="text"
                        name="size"
                        value={designer.size}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Years in Industry</label>
                    <input
                        type="text"
                        name="is_available"
                        value={designer.years_in_industry}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Price Point</label>
                    <input
                        type="text"
                        name="price"
                        value={designer.price_point}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Image</label>
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





