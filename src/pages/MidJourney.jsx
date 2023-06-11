import React, { useEffect, useState } from "react";
import Typing from "../Typing";

function MidJourney() {
  const [title, setTitle] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "d8301610eemsh704521205ee28b6p1b917cjsn5ae4bf8a5797",
        "X-RapidAPI-Host": "openai80.p.rapidapi.com",
      },
      body: `{"prompt":"${title}","n":2,"size":"1024x1024"}`,
    };

    fetch("https://openai80.p.rapidapi.com/images/generations", options)
      .then((response) => response.json())
      .then((response) => {

         const imgs = [];
         response.data.map((item) => {
           imgs.push(item.url);
         });
         const obj = {
           question: title,
           answer: imgs,
         };
         setResult((prev) => [...prev, obj]);
         setIsPending(false);
      })
      .catch((err) => console.error(err));

      setTitle("")
  };

  useEffect(() => {
    const ul = document.querySelector(".ul");
    ul.scrollTo(0, document.querySelector(".ul").scrollHeight);
  }, [title, result]);

  return (
    <div>
      <div className="main w-[80%]   mx-auto pt-10">
        <form
          onSubmit={handleSubmit}
          action=""
          className="text-center my-2 mb-8 flex justify-between "
        >
          <input
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

        <ul className="ul">
          {isPending && (
            <li className="text-red-600 flex items-center gap-2">
              <div className="loader--dot"></div>
              <Typing text="Iltimos biroz kuting!" />
            </li>
          )}

          {result &&
            result.map((item, index) => {
              return (
                <li key={index}>
                  <h1>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png"
                      alt=""
                    />{" "}
                    {item.question}
                  </h1>
                  <div className="flex flex-wrap gap-4 mt-6">
                    <h2>
                      <img src="./assets/gpticon.png" alt="" />
                    </h2>
                    {item.answer.map((img) => {
                      return <img className="img" src={img} alt="" />;
                    })}
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default MidJourney;




          