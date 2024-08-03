import { useState } from 'react';

function SideBarItem({ item }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={isOpen ? "side-bar-item open" : "side-bar-item"}>
            <div className="side-bar-title" onClick={() => setOpen(!isOpen)}>
                {item.path ? <a href={item.path}>{item.title}</a> : <p>{item.title}</p>}
                {item.childrens && (
                    <img 
                        src="assets/dropdown.png" 
                        alt="dropdown icon" 
                        className={isOpen ? "dropdown open" : ""} 
                    />
                )}
            </div>

            { item.childrens && 
                <div className='side-bar-content'>
                    {item.childrens.map((child, index) => (
                        <SideBarItem item={child} key={index} />
                    ))}
                </div>
            }
        </div>
    );
}

export default SideBarItem;
