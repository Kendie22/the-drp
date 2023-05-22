import { Link } from "react-router-dom";


export default function Clothes({ clothes }) {
    return (
        <tr key={clothes.id}>
            <td>
                <Link to={`/clothing/${clothes.clothing_id}`}>

                    <article className="clothes-image">
                        <img src={clothes.image} alt="clothes-pic" />
                        <h3>{clothes.style}</h3>
                    </article>
                </Link>
            </td>

        </tr>
    )
}
