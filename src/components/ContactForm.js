"use client";

export default function ContactForm() {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "YOUR_ACCESS_KEY_HERE",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-16 py-16"
      >
        <div>
          <input
            className="w-full text-2xl mb-2"
            type="text"
            name="name"
            required
            placeholder="Name"
          />
          <hr className="border-black" />
        </div>
        <div>
          <input
            className="w-full text-2xl mb-2"
            type="email"
            name="email"
            required
            placeholder="Email"
          />
          <hr className="border-black" />
        </div>
        <div>
          <textarea
            className="w-full text-2xl mb-2"
            name="message"
            required
            rows="3"
            placeholder="Message"
          ></textarea>
          <hr className="border-black" />
        </div>
        <button
          className="self-end text-2xl group transition-all duration-500 ease-in-out"
          type="submit"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:20%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
            Submit
          </span>
        </button>
      </form>
    </section>
  );
}
