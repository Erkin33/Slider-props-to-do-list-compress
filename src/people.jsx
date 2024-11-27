export default function People({type, ispeople}){
    if(ispeople == true){
      return(
        <div className="ifonly">
            <p>
          {type}
        </p>
        </div>
        
      )
    }
    else {
        return(
        <div className="ifonlyNot">
            <p>
                {type}
            </p>
        </div>
        )
        
    }
  }