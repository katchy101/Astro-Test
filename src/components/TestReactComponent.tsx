import React, { useEffect, useState } from "react";


const TestComponent = () => {
    const [compState, setCompState] = useState<any>(null);
    useEffect(() => {
        setCompState('Hello')
    },[])
    return <>
        <h1 >Hello</h1>
        <br />
        <button onClick={() => setCompState('Hello Alex')}>{compState}</button></>
    
}

export default TestComponent;