
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


const API = process.env.REACT_APP_API_URL

export default function DesignersDetails() {
    const [designers, setDesigners] = useState([]);
    const { id } = useParams()
    const navigate = useNavigate()
    console.log(id)

    useEffect(() => {
        axios.get(`${API}/designer/${id}`).then((response) => {
            setDesigners(response.data)
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
        axios.delete(`${API}/designer/${id}`).then(() => {
            navigate(`/designer`)

        })
            .catch((e) => console.error(e)
            )
            .catch((e) => console.warn("catch", e));

    }

    return (
        <div className="designer-detail">
            <img src={designers.image} alt="designer pic" />

            {<h5> Brand Name: {designers.brand_name}, Name: {designers.first_name} {designers.last_name} {designers} Years In Industry: {designers.years_in_industry} Country {designers.country} </h5>}

            {designers.price_point > 150 ? (<h4> This designer creates Luxury products $$$$$</h4>) : (<h4> This is not a High-end Item $$$</h4>)}
            <div className="functionality">
                <Link to={`/designer`}>
                    <button className="edit-button">Back</button>
                </Link>

                <Link to={`/designer/${designers.designer_id}/edit`}>
                    <button className="edit-button">Edit</button>
                </Link>

                <button onClick={() => handleDelete(designers.designer_id)} className="edit-button">Delete</button>
            </div>

        </div>
    )
};