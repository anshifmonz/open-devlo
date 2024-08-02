import { useState } from 'react';


function SideBarItem({item}) {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className={ isOpen ? "side-bar-item open" : "side-bar-item" }>
            <div className="side-bar-title" onClick={() => { setOpen(!isOpen) }}>
                { item.path ? <a href={item.path}>{item.title}</a> : <p>{item.title}</p> }
                { item.childrens && <img src="assets/dropdown.png" alt="dropdown icons"/>}
            </div>

            {item.childrens && 
                <div className='side-bar-content'>
                    { item.childrens.map((child, index) => <a href={child.path} key={index} className="side-bar-item open">{child.title}</a>)}
                </div>
            }
        </div>
    )
}

export default SideBarItem;