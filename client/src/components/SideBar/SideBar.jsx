import { useEffect, useState } from 'react';
import '../../styles/side-bar.css'
import SideBarItem from './SideBarItem';

function SideBar({tutorial}) {

  const [sideBarData, setSideBarData] = useState();

  useEffect(() => {
    async function loadSidebarContent() {
      try {
          const module = await import(`../..//data/${tutorial}Sidebar.json`);
          setSideBarData(module.default);
      } catch (err) {
          console.error('Error loading sideBar content:', err);
      }
    }

    loadSidebarContent()
  }, [tutorial])

  if (!sideBarData) return <div>Loading...</div>
  return (
    <aside className='sidebar scrollbar'>
      {sideBarData.map((item, index) => (
        <SideBarItem key={index} item={item} />
      ))}
    </aside>
  )
}

export default SideBar;