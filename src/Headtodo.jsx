import { useState } from "react";
import { RiBallPenFill } from "react-icons/ri";
import { RiSpam3Fill } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";

function Headtodo() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(" ");

  const [isEdit, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(0);

  function submit(e) {
    e.preventDefault();
    if (title) {
      if (isEdit) {
        dispatch({ type: "edit", storo: { id: editingId, title: title } });
        setIsEditing(false);
        setEditingId(0);
      } else {
        dispatch({ type: "add", storo: { id: Date.now(), title: title } });
      }
      setTitle("");
    }
  }

  function edit(title, id) {
    setIsEditing(true);
    setTitle(title);
    setEditingId(id);
  }

  function delett(id) {
    dispatch({ type: "delet", storo: { id: id } });
  }

  return (
    <div>
      <form className="grid grid-cols-[1fr_auto] gap-4 p-5 " onSubmit={submit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" outline-black rounded-md bg-slate-900 p-3"
        />
        <button className=" p-4 font-bold bg-slate-900 rounded-lg">
          {isEdit ? "Edit" : "Add"}
        </button>
      </form>
      <div
        className={`${
          state.todo ? "bg-slate-900 p-5 mt-4" : "hidden"
        }  rounded-md items-center `}
      >
        {state.todo?.map((todoo) => (
          <p
            key={todoo.id}
            className=" mb-2 p-3  hover:shadow-xl  transition text-xl bg-slate-800 flex justify-between items-center text-white rounded-md"
          >
            <span>{todoo.title}</span>{" "}
            <span className="flex gap-4">
              {" "}
              <RiBallPenFill
                className=" cursor-pointer"
                onClick={() => edit(todoo.title, todoo.id)}
              />
              <RiSpam3Fill
                className=" cursor-pointer"
                onClick={() => delett(todoo.id)}
              />{" "}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Headtodo;
