import AppCounter from "./conmponents/AppCounter";
import AppWithLogger from "./conmponents/AppWithLogger";
import useCounter from "./use-counter";

const AppLoggerCounter = AppWithLogger(AppCounter)

export default function App(){
    const [count , incrementHandler , decrementHandler] = useCounter(19);
    return(
        <>
        <AppLoggerCounter count={count} increase={incrementHandler} decrease={decrementHandler} />
        </>
    )
}