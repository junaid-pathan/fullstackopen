const Numbers = ({persons,deleteItem}) => { 
    console.log(persons)
    return ( 
        <div>
        {persons.map(person => 
            <div key={person.id}> 
            {person.name} {person.number}
            <button onClick={()=> deleteItem(person)}>delete</button>
            </div> )}
        </div>
    )
}
export default Numbers 