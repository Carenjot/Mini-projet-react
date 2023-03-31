function ListeMusee({name , adress , imgSrc}){
    return(
        <li><figure><img src={imgSrc}/><figcaption><h4>{name}</h4> <p> {adress}</p></figcaption></figure></li> 
    )
}


export default ListeMusee