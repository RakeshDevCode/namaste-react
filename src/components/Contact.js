import { Button } from "./Button";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-4 p-4">Conatct us </h1>
      <form>
        <input
          type="text"
          className="border border-black m-2 p2 "
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border border-black m-2 p2 "
          placeholder="message"
        ></input>
        <button className="border border-black m-2 p2 bg-black text-white rounded-lg hover:cursor-pointer">
          Submit
        </button>
      </form>
      <h2>Address: india </h2>
      <h2>phone +91 9898989898</h2>
    </div>
  );
};

export default Contact;
