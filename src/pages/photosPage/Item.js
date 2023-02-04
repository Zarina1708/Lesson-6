
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";



export default function Item () {
    const {item} = useSelector(state => state.itemReducer)
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }

    return <div style={{marginTop: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
        <h2>
            
            <button onClick={back} style={{width: '70px', height:'35px', marginRight:'100px',}}>Back</button>  

            Photo

        </h2>
        <hr/>
        <br/>
        <img src={item.url} alt="#" style={{width: '80vh'}}/>

        <h2>{item.title}</h2>

        <br/>

    </div>
}