export default function Fruits() {
    //const fruits  =["apple","banana","mango","orange"];
    const fruits = [
        {name:"Apple", price: 10},
        {name:"Mango", price: 12},
        {name:"Orange", price: 2},
        {name:"Pneapple", price: 8}
    ]
    return (
        <div>
            <ul>
            {fruits.map((fruit=>
                <li key={fruit.name}>{fruit.name} ${fruit.price}</li>
            ))}
            </ul>
        </div>
    );
}