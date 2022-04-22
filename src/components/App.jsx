import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Notiflix from "notiflix";
export class App extends Component {
  loginInputId = nanoid();

  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  handelChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handelChangeTel = (e) => {
    this.setState({
      number: e.target.value,
    });
  };
  saveChange = () => {
    const name = this.state.name;
    const number = this.state.number;
    let cont = this.state.contacts;
    if (name === undefined || number === undefined) {
      return Notiflix.Notify.warning("Write name or number");
    }
    for (let i = 0; i < cont.length; i++) {
      if (cont[i].name === name) {
        return Notiflix.Notify.info(`${name} is already is contacts`);
      }
    }
    cont.push({
      id: this.loginInputId,
      name: this.state.name,
      number: this.state.number,
    });
    return this.setState({
      contacts: cont,
      name: "",
      number: "",
    });
  };
  handleFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };
  filterName = (name) => {
    return name.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1;
  };
  deleteContacts = (e) => {
    // console.log(cont);
    // console.log(index);
    console.log(e.target.id);
    let deleteCont = [...this.state.contacts];

    for (let i = 0; i < this.state.contacts.length; i++) {
      if (e.target.id === this.state.contacts[i].id) {
        deleteCont.splice(i, 1);
      }
    }
    this.setState({ contacts: deleteCont });
  };
  render() {
    const contacts = this.state.contacts;
    const filter = this.state.filter;
    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm
          handelChangeName={this.handelChangeName}
          handelChangeTel={this.handelChangeTel}
          name={contacts}
          tel={contacts}
          saveChange={this.saveChange}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} handelFilter={this.handleFilter} />
        <ContactList
          contacts={contacts}
          filterName={this.filterName}
          deleteContacts={this.deleteContacts}
        />
      </div>
    );
  }
}
