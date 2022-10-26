/** @jsx h */
/** @jsxFrag Fragment */
import React from "https://esm.sh/react";
import { Fragment, h } from "preact";
import { tw, apply, theme } from "@twind";
import { useRef, useState, useEffect } from "preact/hooks";
import autoAnimate from "@formkit/auto-animate";

export default function SectionHello() {
  const [items, setItems] = useState([]);
  const [itemsFirst, setItemsFirst] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);
  const parentRef = useRef();

  const parentRef2 = useRef();

  const sleep = (ms: number | undefined) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  useEffect(() => {
    if (parentRef2.current) {
      autoAnimate(parentRef2.current);
    }
  }, [parentRef2]);

  useEffect(() => {
    setItemsFirst([...itemsFirst, "1"]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (itemsFirst.length < 2 && itemsFirst.length > 0) {
        setItemsFirst([...itemsFirst, "1"]);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [itemsFirst]);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (items.length < 4) {
          addItem();
        } else {
          console.log(itemsFirst);
          setItemsFirst([]);
          setTimeout(() => setItemsFirst(["2", "2"]), 500);
          clearInterval(interval);
        }
      },
      items.length < 4 ? 2000 : 500
    );
    return () => clearInterval(interval);
  }, [items]);

  function addItem() {
    const randomItem = defaultItems[items.length];
    setItems([...items, randomItem]);
  }

  return (
    <div class={tw`flex items-center justify-center h-screen w-screen`}>
      <div class={tw`flex h-[500px] w-[400px] space-y-4 p-5 flex-row `}>
        <div class={tw`h-full flex justify-end flex-col`}>
          <img
            src="https://avatars.githubusercontent.com/u/35420062?v=4"
            class={tw`h-[50px] w-[50px] rounded-full`}
            onClick={addItem}
          />
        </div>
        <div
          class={tw`h-full flex justify-end flex-col overflow-y-hidden overflow-x-hidden p-5`}
        >
          <ul class={tw`space-y-3`} ref={parentRef}>
            {items.map((item, index) => {
              if (index == 0) {
                return <div />;
              } else {
                return (
                  <li
                    class={tw`px-4 py-2 border-2 border-gray-200 break-words w-[200px] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-sm`}
                    key={item}
                  >
                    {item}
                  </li>
                );
              }
            })}
          </ul>

          <ul class={tw`space-y-3`} ref={parentRef2}>
            {itemsFirst.map((item, index) => {
              if (index == 0) {
                return <div />;
              } else {
                if (item == "1") {
                  return (
                    <div
                      class={tw`px-4 items-center  break-all justify-center flex flex-row py-4 border-2 border-gray-200 mt-3 w-[70px]
             gap-x-[2px] rounded-xl`}
                    >
                      <div
                        class={tw`bg-gray-400  w-2 h-2 rounded-full animate-bounce blue-circle`}
                      ></div>
                      <div
                        class={tw`bg-gray-400 w-2 h-2 rounded-full animate-bounce green-circle`}
                      ></div>
                      <div
                        class={tw`bg-gray-400 w-2 h-2 rounded-full animate-bounce red-circle`}
                      ></div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      class={tw`px-4 items-center  break-all justify-center flex flex-row py-4 border-2 border-gray-200 mt-3 w-[200px]
         gap-x-[2px] rounded-bl-xl rounded-tr-xl rounded-br-xl rounded-tl-sm`}
                    >
                      "Buy LaundryasdasdasdasdasdasdasdaBuy
                      Laundryasdasdasdasdasdasdasda"
                    </div>
                  );
                }
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

const defaultItems = [
  "",
  "Hi I'm Angga Nur Prasetya\nWeb Developer",
  "Buy Laundryasdasdasdasdasdasdasda",
  "Fill Up Car",
  "Go To Store",
  "Finish Todo List",
];
