import './sidebar.css';

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_960_720.jpg"
          alt=""
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ex,
          deserunt quaerat ipsa nisi debitis.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Technology</li>
          <li className="sidebarListItem">Education</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <ul className="sidebarSocial">
          <i className="sideBarIcon fa-brands fa-facebook"></i>
          <i className="sideBarIcon fa-brands fa-twitter-square"></i>
          <i className="sideBarIcon fa-brands fa-pinterest"></i>
          <i className="sideBarIcon fa-brands fa-instagram-square"></i>
        </ul>
      </div>
    </div>
  );
}
