import React, {memo, useEffect} from "react";

function AboutItem({completed, isCheck, id, title, delItem, toggleCompleted,checked}) {
    useEffect(() => {
        console.log('rerendered AboutItem');
    })
    return (
        <div className="component" key={id}>
                              <div className="title">
                                <h2 style={{color: completed && 'rgba(32, 65, 250, 0.514)'}}>{title}</h2>
                                  <div className="btns">
                                      <input className='Check' checked={isCheck} onChange={(e) => checked(id, e.target.checked)} type="checkbox" name="" id="" />
                                      <button onClick={() => delItem(id)} className="del">Del</button> 
                                      <button onClick={() => toggleCompleted(id)} className="selText" style={{color: completed && "red"}}>select text</button>
                                  </div>
                              </div>
                          </div>
    )
}

export default memo(AboutItem)