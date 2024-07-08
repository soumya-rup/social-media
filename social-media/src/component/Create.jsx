import { useState } from "react";
function Create({ click }) {
  const [name, setname] = useState("");
  const [con, setcon] = useState("");
  const [id, setid] = useState("");
  const handelname = (event) => {
    console.log(event.target.value);
    setname(event.target.value);
  };
  const handelcon = (event) => {
    console.log(event.target.value);
    setcon(event.target.value);
  };
  const handelid = (event) => {
    console.log(event.target.value);
    setid(event.target.value);
  };
  const handelclick = () => {
    click(name, con, id);
    setcon("");
    setname("");
    setid("");
  };
  return (
    <div>
      <p>Create your new post</p>
      <p>Enter your details</p>
      <input
        type="text"
        value={name}
        placeholder="Enter user name"
        onChange={handelname}
      />
      <p>What's on your mind</p>
      <input
        type="text"
        value={con}
        placeholder="Enter your massage"
        onChange={handelcon}
      />
      <p>Enter your id</p>
      <input
        type="text"
        value={id}
        placeholder="Enter your id"
        onChange={handelid}
      />
      <button onClick={handelclick}>Submit</button>
    </div>
  );
}
export default Create;
