import { LightningElement } from "lwc";

export default class ContactListParent extends LightningElement {
  selectedContact;
  contacts = [
    {
      id: 1,
      name: "Giuseppe Wolf",
      email: "derek.lehner@yahoo.com",
      phone: "1-864-598-1710",
      description:
        "Officiis ratione voluptatem a maiores quia voluptates delectus recusandae. Excepturi veritatis dolorum eos laboriosam. Possimus animi eaque cumque soluta ut iste."
    },
    {
      id: 2,
      name: "Leila Adams",
      email: "lera.rodriguez@yahoo.com",
      phone: "507.753.8762",
      description:
        "Voluptate in cum eum nemo sequi voluptatem totam. Consectetur qui eos et. Pariatur aliquam in totam modi ex. Quis autem iste provident provident eveniet."
    },
    {
      id: 3,
      name: "Demetrius Parker",
      email: "conn.dameon@hotmail.com",
      phone: "1-954-549-3843",
      description:
        "Vitae inventore quibusdam dignissimos aliquid ullam nostrum quis. Autem sed ut aliquid dolores nam consequatur voluptate. Aspernatur reprehenderit blanditiis praesentium quia magnam."
    },
    {
      id: 4,
      name: "Mr. Trenton Romaguera I",
      email: "jasmin54@yahoo.com",
      phone: "319-531-4302",
      description:
        "Doloribus quo perferendis possimus nostrum corporis. Inventore qui minima vel ullam vel. Voluptas id eos velit. Quae velit odit ut et nobis."
    }
  ];

  contactHandler(event) {
    console.log(event.target.dataset.id);
    const contactId = event.target.dataset.id;
    this.selectedContact = this.contacts.find(
      (con) => con.id === Number(contactId)
    );
  }
}
