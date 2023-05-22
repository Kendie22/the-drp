import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ClothingEdit() {
    let { id } = useParams();
    const navigate = useNavigate();

    const API = process.env.REACT_APP_API_URL

    const [clothes, setClothes] = useState({
        designer_id: 0,
        style: "",
        color: "",
        size: 0,
        is_recycled_item: "",
        material: "",
        price: 0,
        ranking: 0,
        image: "",
    });

    useEffect(() => {
        axios.get(`${API}/clothing/${id}`).then((response) => {
            setClothes(response.data);
        });
    }, [id]);

    const handleChange = (event) => {
        setClothes({ ...clothes, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put(`${API}/clothing/${id}`, clothes)
            .then((response) => {
                navigate(`/clothing/${id}`);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Style</label>
                    <input
                        type="text"
                        name="style"
                        value={clothes.style}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Color</label>
                    <input
                        type="text"
                        name="color"
                        value={clothes.color}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Size</label>
                    <input
                        type="text"
                        name="size"
                        value={clothes.size}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Is a Recycled Item</label>
                    <input
                        type="text"
                        name="is_available"
                        value={clothes.is_recycled_item}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Material</label>
                    <input
                        type="text"
                        name="material"
                        value={clothes.material}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="text"
                        name="price"
                        value={clothes.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Ranking</label>
                    <input
                        type="text"
                        name="price"
                        value={clothes.ranking}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Image</label>
                    <input
                        type="text"
                        pattern="http[s]*://.+"
                        name="image"
                        value={clothes.image}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}





