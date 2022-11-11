// TODO: create a component that displays a single bakery item
export default function BakeryItem({item, updateFunction}){
    return(
    <div class = "BakeryItem"> 
        <p>{item.name}</p>
        <img src = {item.image}/>
        <p>{item.price}</p>
        <p>{item.description}</p>
        <button onClick = {() => updateFunction(item)}>Add to Cart</button>
    </div>)
}
