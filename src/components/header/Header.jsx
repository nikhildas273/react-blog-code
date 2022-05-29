import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg"> Blog </span>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_960_720.jpg"
        alt=""
        className="headerImg"
      />
    </div>
  );
}
