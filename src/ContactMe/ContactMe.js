import React from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", email: "", content: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    }).catch((error) => alert(error));

    alert(
      "Hi " +
        this.state.name.split(" ")[0] +
        ",\n\nThanks for getting in touch. I'll get back to you at " +
        this.state.email +
        " regarding your enquiry soon.\n\nKind Regards,\nBryce Tuppurainen"
    );
    this.setState({ name: "", email: "", content: "" });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <article class=" bg-gradient-to-br from-zinc-700 via-zinc-800 to-black border-t-2 border-orange-400">
        <div class="ml-9">
          <h2 class="py-6 text-5xl text-slate-100 font-bold smvp:text-3xl">
            Contact
          </h2>
          <p class="text-2xl mb-6">
            <a
              href="mailto:bryce@tuppurainen.com.au"
              class="hover:underline text-slate-100"
            >
              bryce@tuppurainen.com.au
            </a>
          </p>
          <form name="contact" netlify onSubmit={this.handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div class="flex flex-wrap w-1/2 p-3">
              <div class="w-full my-3">
                <label class="text-slate-100 text-2xl inline-block w-[10rem] font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  class="w-[35rem] smvp:w-[20rem] text-black p-3 border border-black rounded text-lg font-semibold"
                  onChange={this.handleChange}
                  value={this.state.name}
                  placeholder="Please enter your name..."
                  name="name"
                  required
                />
              </div>

              <div class="w-full my-3">
                <label class="text-slate-100 text-2xl inline-block w-[10rem] font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  class="w-[35rem] smvp:w-[20rem] text-black p-3 border border-black rounded text-lg font-semibold"
                  onChange={this.handleChange}
                  value={this.state.email}
                  placeholder="Please enter your email address..."
                  name="email"
                  required
                />
              </div>

              <div class="w-full my-3">
                <label class="text-slate-100 text-2xl inline-block w-[10rem] font-semibold align-top">
                  Enquiry
                </label>
                <textarea
                  class="w-[35rem] smvp:w-[20rem] text-black p-3 border border-black rounded text-lg h-[20rem]"
                  onChange={this.handleChange}
                  value={this.state.content}
                  placeholder="Email contents..."
                  name="content"
                  required
                />
              </div>

              <div class="w-full my-3">
                <div class="inline-block w-[10rem]"></div>
                <input
                  type="submit"
                  class="text-black p-3 border border-black rounded bg-white hover:bg-slate-600 hover:border-white hover:text-white"
                  value="Send Message"
                />
              </div>
            </div>
          </form>
        </div>
      </article>
    );
  }
}

export default ContactMe;
