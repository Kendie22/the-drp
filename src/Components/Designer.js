import { Link } from "react-router-dom";


export default function Designer({ designer }) {
    return (
        <tr key={designer.id}>
            <td>
                <Link to={`/designer/${designer.designer_id}`}>

                    <article className="designer-image">
                        <img src={designer.image} alt="designer-pic" />
                        <h3>{designer.brand_name}</h3>
                    </article>
                </Link>
            </td>

        </tr>
    )
}