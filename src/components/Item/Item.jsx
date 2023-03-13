
function Item({dado}){
    return(
        <li>
            <p>{`${dado.id} - ${dado.name}`}</p>
        </li>
    )
}

export default Item;