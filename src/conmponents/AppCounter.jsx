import { memo } from "react";

const AppCounter = memo(
    ({count , increase ,decrease}) => {
    return(
        
            <>
            <div>
                <span>Counter:</span>
                <span>{count}</span>
            </div>
            <div>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
            </>    
    
    )
})

export default AppCounter;