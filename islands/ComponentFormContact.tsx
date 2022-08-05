/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from "preact";
import { tw, apply, theme } from "@twind";
import { useState } from "preact/hooks";


interface FormContactProps {
  email: string
}

export default function ComponentFormContact(props: FormContactProps) {

	const [subject, setSubject] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const handleSendEmail = () => {
		window.open(`mailto:${props.email}?subject=${subject}-${name}&body=${message}`)
	}

	return (
		<>
				<div class={tw`mb-4`}>
          <label htmlFor="name" class={tw`block text-sm font-medium text-gray-700 mb-2`}>
            Name
          </label>
            <input
              type="text"
              name="name"
              id="name"
              class={tw`focus:bg-gray-200 block w-full bg-gray-100 sm:text-sm) px-3 py-2`}
              placeholder="Angga"
              onChange={(event) => setName(event.target.value)}
            />
        </div>
        <div class={tw`mb-4`}>
          <label htmlFor="subject" class={tw`block text-sm font-medium text-gray-700 mb-2`}>
            Subject
          </label>
            <input
              type="text"
              name="subject"
              id="subject"
              class={tw`focus:bg-gray-200 block w-full bg-gray-100 sm:text-sm) px-3 py-2`}
              placeholder="Subject"
              onChange={(event) => setSubject(event.target.value)}
            />
        </div>
        <div class={tw`mb-4`}>
          <label htmlFor="message" class={tw`block text-sm font-medium text-gray-700 mb-2`}>
            Message
          </label>
          <textarea
            row={4}
            name="message"
            id="message"
            class={tw`focus:bg-gray-200 block w-full bg-gray-100 sm:text-sm) px-3 py-2`}
            placeholder="Type Message ..."
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <button class={tw`mt-4 inline-flex transition ease-in-out duration-100 cursor-pointer justify-center text-sm py-2 px-3 mt-4 font-bold text-black border(1 black) hover:(border(1 transparent) bg-black text-white)`} onClick={handleSendEmail}>Send Message</button>
		</>
	)
}
