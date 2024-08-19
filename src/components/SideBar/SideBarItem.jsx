import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {Link} from 'react-router-dom'

function SideBarItem({ item }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={isOpen ? "side-bar-item open" : "side-bar-item"}>
            <div className="side-bar-title" onClick={() => setOpen(!isOpen)}>
                {item.path ? <Link to={item.path}>{item.title}</Link> : <p>{item.title}</p>}
                {item.childrens && (
                    <ChevronDown width={20} height={15}/>
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
