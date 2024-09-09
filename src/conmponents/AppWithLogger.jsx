import { useEffect } from "react"

export default function AppWithLogger(Component){
    return function WithLoggerComponent({...props}){
useEffect(() => {
    console.log(`render ${Component.displayName}`);
    
});
return <Component {...props} />;
    }
}