import '../../styles/side-bar.css'
import SideBarItem from './SideBarItem';
import data from '../../data/sidebar.json';

function SideBar() {

    return (
        <aside className='sidebar scrollbar'>
            {data.map((item, index) => (
                <SideBarItem key={index} item={item} />
            ))}
        </aside>
    )
}

export default SideBar;