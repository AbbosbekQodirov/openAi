import React, { useEffect, useState } from "react";
import Typing from "../Typing";

function ChatGpt() {
  const [title, setTitle] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    setIsPending(true);
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "d8301610eemsh704521205ee28b6p1b917cjsn5ae4bf8a5797",
        "X-RapidAPI-Host": "openai80.p.rapidapi.com",
      },
      body: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${title}"}]}`,
    };

    fetch("https://openai80.p.rapidapi.com/chat/completions", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const obj = {
          question: title,
          answer: response.choices[0].message.content,
        };

        setResult((prev) => [...prev, obj]);
        setIsPending(false);
      })
      .catch((err) => console.error(err));

    setTitle("");
  };

  useEffect(() => {
    const ul = document.querySelector(".ul");
    ul.scrollTo(0, document.querySelector(".ul").scrollHeight);
  }, [title, result]);

  return (
    <>
      <div className="main w-[80%]   mx-auto pt-10">
        <ul className="ul">
          {result &&
            result.map((item, index) => {
              return (
                <li key={index}>
                  <h1>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png"
                      alt=""
                    />{" "}
                    {item.question}.
                  </h1>
                  <h2>
                    <img src="./assets/gpticon.png" alt="" />
                    <Typing text={item.answer} />
                  </h2>
                </li>
              );
            })}
          {isPending && (
            <li className="text-red-600 flex items-center gap-2">
              <div className="loader--dot"></div>
              <Typing text="Iltimos biroz kuting!" />
            </li>
          )}
        </ul>

        <form
          onSubmit={handleSubmit}
          action=""
          className="text-center my-2 mb-8 flex justify-between "
        >
          <input
            placeholder="Savolingizni yozing..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="w-[90%] border border-green-950 border-2 rounded text-2xl pl-3 p-2"
            type="text"
          />
          <button className="bg-slate-700 text-white px-4 py-3 rounded">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}

export default ChatGpt;
