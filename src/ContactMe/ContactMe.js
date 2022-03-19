import React from "react";

class ContactMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", email: "", content: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(
      "Hi " +
        this.state.name.split(" ")[0] +
        ",\n\nThanks for getting in touch. I'll get back to you at " +
        this.state.email +
        " regarding your enquiry soon.\n\nKind Regards,\nBryce Tuppurainen"
    );
    this.setState({ name: "", email: "", content: "" });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handleContentChange(e) {
    this.setState({ content: e.target.content });
  }

  render() {
    return (
      <article class=" bg-gradient-to-br from-zinc-700 via-zinc-800 to-black border-t-2 border-orange-400">
        <div class="ml-9">
          <h2 class="py-6 text-5xl text-slate-100 font-bold">Contact</h2>
          <p class="text-2xl mb-6">
            <a
              href="mailto:bryce@tuppurainen.com.au"
              class="hover:underline text-slate-100"
            >
              bryce@tuppurainen.com.au
            </a>
          </p>
          <form name="contact" netlify onSubmit={this.handleSubmit}>
            <input type="hidden" name="contact" value="contact" />
            <div class="flex flex-wrap w-1/2 p-3">
              <div class="w-full my-3">
                <label class="text-slate-100 text-2xl inline-block w-[10rem] font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  class="w-1/2 text-black p-3 border border-black rounded text-lg font-semibold"
                  onChange={this.handleNameChange}
                  value={this.state.name}
                  placeholder="Please enter your name..."
                  required
                />
              </div>

              <div class="w-full my-3">
                <label class="text-slate-100 text-2xl inline-block w-[10rem] font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  class="w-1/2 text-black p-3 border border-black rounded text-lg font-semibold"
                  onChange={this.handleEmailChange}
                  value={this.state.email}
                  placeholder="Please enter your email address..."
                  required
                />
              </div>

              <div class="w-full my-3">
                <label class="text-slate-100 text-2xl inline-block w-[10rem] font-semibold align-top">
                  Enquiry
                </label>
                <textarea
                  class="w-1/2 text-black p-3 border border-black rounded text-lg h-[20rem]"
                  onChange={this.handleContentChange}
                  value={this.state.content}
                  placeholder="Email contents..."
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
