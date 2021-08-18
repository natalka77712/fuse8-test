import {Link, useParams} from "react-router-dom";

const EstateInfo = () => {
    const { id } = useParams()

    return (
        <div>
            <div style={{padding: '50px'}}>
                <Link to='/'>HOME</Link>
            </div>
            <div>House - '{id}'</div>
        </div>
    )
}

export default EstateInfo;
