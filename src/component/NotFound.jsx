import notFound from "../data/notFound.jpg"
const NotFound = () => {
    return ( 
        <div className="not-found">
           <img src={notFound} alt="notFound" className="not-found-img"/>
        </div>
     );
}
 
export default NotFound;