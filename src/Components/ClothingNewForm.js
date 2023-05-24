import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function ClothingNewForm() {
    let navigate = useNavigate();


    const addClothes = (newClothes) => {
        axios
            .post(`${API}/clothing`, newClothes)
            .then(
                () => {
                    navigate(`/clothing`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    };

    const [clothes, setNewClothes] = useState({
        designer_id: 2,
        style: "",
        color: "",
        size: 0,
        material: "",
        price: 0,
        image: "",
    });

    const [designers, setDesigners] = useState([])
    useEffect(() => {
        axios
            .get(`${API}/designers`)
            .then((response) => {
                setDesigners(response.data.allDesigners);
            })
            .catch((error) => {
                console.error("Error fetching designers:", error);
            });
    }, []);
    const brandName = designers.map((d) =>
        d.brand_name
    )
    const handleTextChange = (event) => {
        setNewClothes({ ...clothes, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addClothes(clothes);
    };

    return (
        <div className="Designer">
            <form onSubmit={handleSubmit} className="new-form">

                <label htmlFor="brand-name" className="form-label">
                    Brand Name:
                </label>
                <select
                    className="form-select"
                    id="brand-name"
                    name="brand-name"
                    value={designers.brand_name}
                // onChange={handleTextChange}
                >

                    <option value="">Select Brand Name</option>
                    {brandName.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>

                <label htmlFor="style">Style:</label>
                <input
                    id="style"
                    value={clothes.style}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Style"
                    required
                />
                <label htmlFor="color">Color:</label>
                <input
                    id="color"
                    type="text"
                    required
                    value={clothes.color}
                    placeholder="Color"
                    onChange={handleTextChange}
                />
                <label htmlFor="size">Size:</label>
                <input
                    id="size"
                    type="text"
                    name="size"
                    value={clothes.size}
                    placeholder="Size"
                    onChange={handleTextChange}
                />
                <label htmlFor="material">Material:</label>
                <input
                    id="material"
                    type="text"
                    name="material"
                    value={clothes.material}
                    placeholder="Material"
                    onChange={handleTextChange}
                />
                <label htmlFor="price">Is Recycled:</label>
                <input
                    id="price"
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={clothes.is_recycled_item}
                    onChange={handleTextChange}
                />
                <label htmlFor="price">Ranking:</label>
                <input
                    id="price"
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={clothes.ranking}
                    onChange={handleTextChange}
                />
                <label htmlFor="price">Price:</label>
                <input
                    id="price"
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={clothes.price}
                    onChange={handleTextChange}
                />
                <label htmlFor="image">Image:</label>
                <input
                    id="image"
                    type="text"
                    name="image"
                    placeholder="Image"
                    value={clothes.image}
                    onChange={handleTextChange}
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}
