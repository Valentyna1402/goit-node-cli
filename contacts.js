import { nanoid } from "nanoid";

import { promises as fs } from "fs";
import { join } from "path";

const contactsPath = join("db", "contacts.json");

export async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error(error);
  }
}

export async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contact = contacts.find(({ id }) => id === contactId);
    return contact || null;
  } catch (error) {
    console.error(error);
  }
}

async function updateContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
}

export async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex((contact) => contact.id === contactId);
    if (idx === -1) {
      return null;
    }
    const deletedContact = contacts.splice(idx, 1);
    await updateContacts(contacts);
    return deletedContact;
  } catch (error) {
    console.error(err);
  }
}

export async function addContact(name, email, phone) {
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  try {
    const contacts = await listContacts();
    contacts.push(newContact);
    updateContacts(contacts);
    return newContact;
  } catch (err) {
    console.error(err);
  }
}
