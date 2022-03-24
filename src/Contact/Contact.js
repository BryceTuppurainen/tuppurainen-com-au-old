import React from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = { firstname: "", lastname: "", email: "", content: "" };

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
        this.state.firstname +
        ",\n\nThanks for getting in touch. I'll get back to you at " +
        this.state.email +
        " regarding your enquiry soon.\n\nKind Regards,\nBryce Tuppurainen"
    );
    this.setState({ firstname: "", lastname: "", email: "", content: "" });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <article class="bg-gradient-to-tr from-zinc-800 to-black py-3">
        <div class="ml-9">
          <h2 class="py-6 text-5xl smvp:text-3xl text-slate-100 font-semibold">
            Contact
          </h2>
          <p class="text-2xl smvp:text-xl mb-6">
            <a
              href="mailto:bryce@tuppurainen.com.au"
              class="hover:underline text-slate-100"
            >
              bryce@tuppurainen.com.au
            </a>
          </p>
          <form name="contact" netlify onSubmit={this.handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div class="flex flex-wrap gap-3 w-full">
              <div class="w-full flex gap-3">
                <label class="smvp:w-[5rem] text-slate-100 text-2xl inline-block w-[10rem] ">
                  Name*
                </label>
                <input
                  type="text"
                  class="w-[20rem] smvp:w-[15rem] text-black p-3 border border-black rounded text-lg "
                  onChange={this.handleChange}
                  value={this.state.firstname}
                  name="firstname"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  class="w-[20rem] smvp:w-[15rem] text-black p-3 border border-black rounded text-lg "
                  onChange={this.handleChange}
                  value={this.state.lastname}
                  name="lastname"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div class="w-full flex gap-3">
                <label class="smvp:w-[5rem] text-slate-100 text-2xl inline-block w-[10rem] ">
                  Email*
                </label>
                <input
                  type="text"
                  class="w-[40.75rem] smvp:w-[30.75rem] text-black p-3 border border-black rounded text-lg "
                  onChange={this.handleChange}
                  value={this.state.email}
                  name="email"
                  placeholder="placeholder@example.com"
                  required
                />
              </div>

              <div class="w-full flex gap-3">
                <label class="smvp:w-[5rem] text-slate-100 text-2xl inline-block w-[10rem]  align-top">
                  Enquiry
                </label>
                <textarea
                  class="w-[40.75rem] smvp:w-[30.75rem] text-black p-3 border border-black rounded text-lg h-[20rem]"
                  onChange={this.handleChange}
                  value={this.state.content}
                  name="content"
                  required
                />
              </div>

              <div class="w-full flex gap-3">
                <div class="inline-block w-[10rem] smvp:w-[5rem]"></div>
                <input
                  type="submit"
                  class="text-black p-3 border border-black rounded bg-white hover:bg-zinc-700 hover:border-white hover:text-white hover:cursor-pointer"
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

export default Contact;
