const PokemonCardDetails = (props) => {
    console.log(props);
    return ( 
        <div className="flip-card">
            <div className="inner-card">
                <div className="front-card"><h2>front</h2></div>
                <div className="back-card"><h2>back</h2></div>
            </div>
        </div> 
     );
}
 
export default PokemonCardDetails;