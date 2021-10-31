import React from 'react'
import './counter.css'
const Counter = () =>{
    return(
        <>
        <div className="flex-box">
                 <Counter start="0" end="5" dura="2" title="Open Mic" />
                <Counter start="0" end="5" dura="2" title="Contest" />
                <Counter start="0" end="6" dura="2" title="Journal" />
                <Counter start="0" end="8" dura="2" title="Members" />
        </div>
        </>
    );
}
export default Counter;