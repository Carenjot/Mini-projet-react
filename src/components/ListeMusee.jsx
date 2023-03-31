import { useState } from "react"



function ListeMusee({name , adress , imgSrc}){
    return(
        
        <li><figure><img src={imgSrc}/><figcaption>{name} : {adress}</figcaption></figure></li>
        
    )
}


export default ListeMusee