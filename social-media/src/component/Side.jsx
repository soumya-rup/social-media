function Side({ clickc, clickh }) {
  return (
    <div className="sidebar">
      <button className="create-b " onClick={clickh}>
        Home
      </button>
      <button className="create-b" onClick={clickc}>
        Create post
      </button>
    </div>
  );
}
export default Side;
