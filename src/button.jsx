export default function Button({children, type}){

    return(
        <button onClick={()=>{
            console.log(children)
        }}> {type}</button>
    )
}