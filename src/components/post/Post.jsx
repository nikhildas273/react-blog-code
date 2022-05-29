import './post.css';

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_960_720.jpg"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
        mollitia fugit, nemo recusandae aperiam voluptatum magnam doloribus
        ullam necessitatibus itaque voluptates autem totam debitis soluta. Alias
        temporibus qui cum esse?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
        mollitia fugit, nemo recusandae aperiam voluptatum magnam doloribus
        ullam necessitatibus itaque voluptates autem totam debitis soluta. Alias
        temporibus qui cum esse?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
        mollitia fugit, nemo recusandae aperiam voluptatum magnam doloribus
        ullam necessitatibus itaque voluptates autem totam debitis soluta. Alias
        temporibus qui cum esse?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
        mollitia fugit, nemo recusandae aperiam voluptatum magnam doloribus
        ullam necessitatibus itaque voluptates autem totam debitis soluta. Alias
        temporibus qui cum esse?
      </p>
    </div>
  );
}
