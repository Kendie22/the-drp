
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


const API = process.env.REACT_APP_API_URL

export default function ClothingDetails() {
    const [clothing, setClothing] = useState([]);
    const { id } = useParams()
    const navigate = useNavigate()
    console.log(id)

    useEffect(() => {
        axios.get(`${API}/clothing/${id}`).then((response) => {
            setClothing(response.data)
        }).catch((e) => {
            console.warn("catch", e);
        });
    }, [id])

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete?")) {
            deleteClothing()
        }


    }
    const deleteClothing = () => {
        axios.delete(`${API}/clothing/${id}`).then(() => {
            navigate(`/clothing`)

        })
            .catch((e) => console.error(e)
            )
            .catch((e) => console.warn("catch", e));

    }

    return (
        <div className="clothing-inventory" >
            <img src={clothing.image} alt="clothing pic" style={{ maxWidth: "150px", maxHeight: "200px" }} />

            {<h5> Brand Name: {clothing.brand_name}, Style: {clothing.style}, Size: {clothing.size}, Color: {clothing.color}, Material: {clothing.material}, Price: ${clothing.price}, {" "} {clothing.is_recycled_item ? "Ranking" : "Not Ranking"} </h5>}

            {clothing.price > 150 ? (<h4> This is a Luxury Item $$$$$</h4>) : (<h4> This is not a Luxury Item $$$</h4>)}
            <div className="functionality">
                <Link to={`/clothing`}>
                    <button className="edit-button">Back</button>
                </Link>

                <Link to={`/clothing/${clothing.clothing_id}/edit`}>
                    <button className="edit-button">Edit</button>
                </Link>

                <button onClick={() => handleDelete(clothing.clothing_id)} className="edit-button">Delete</button>
            </div>
        </div>
    )
};
