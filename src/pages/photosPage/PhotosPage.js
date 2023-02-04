import {useDispatch, useSelector} from "react-redux";
import {sayHelloAction, getPhotosAction} from "../../redux/actions";
import Photo from "../../components/photo/Photo";



export default function PhotosPage () {
    const dispatch = useDispatch()
    const {title} = useSelector(state => state.titleReducer)
    const {photos} = useSelector(state => state.photosReducer)

    const sayHello = () => {
        dispatch(sayHelloAction())
    }


    const getPhotos = () => {
        dispatch(getPhotosAction())
    }

    return <>
        <h1>{title}</h1>
        <button onClick={sayHello}>say hello</button>
        <button onClick={getPhotos}>get photos</button>

        {
            photos.slice(0, 10).map(photo =><Photo photoInfo={photo}/> )
        }
    </>
}