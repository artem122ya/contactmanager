import React, {Component} from 'react';
import Contact from "./Contact";
import { Consumer } from "../../context"

class Contacts extends Component {

    render() {
        return (
            <Consumer>
                {value =>
                    <React.Fragment>
                        <h1 className="display4 mb-2">
                            <span className="text-danger">Contact</span> List
                        </h1>

                        {value.contacts.map(contact =>
                            <Contact
                                key={contact.id}
                                contact={contact}
                            />
                        )}
                    </React.Fragment>
                }
            </Consumer>
        );
    }
}

export default Contacts;