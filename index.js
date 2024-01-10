// import { program } from "commander";
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse();

// const options = program.opts();

// // TODO: рефакторити
// async function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       // ...
//       break;

//     case "get":
//       // ... id
//       break;

//     case "add":
//       // ... name email phone
//       break;

//     case "remove":
//       // ... id
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(options);


import { nanoid } from 'nanoid';

import { promises as fs } from 'fs';
import { join } from 'path';


const contactsPath = join('db', 'contacts.json');


 async function listContacts() {
    const data = (await fs.readFile(contactsPath)).toString();
    return(data);
  }
  
  async function getContactById(contactId) {
    const data = (await fs.readFile(contactsPath)).toString();
    const parsedData = JSON.parse(data);
    return parsedData.map(item => {
        if (item.id === contactId) {
           return item; 
        } else {
            return null;
        }})
  }
  
  async function removeContact(contactId) {
    const data = (await fs.readFile(contactsPath)).toString();
    const parsedData = JSON.parse(data);
    return parsedData.map(item => {
        if (item.id === contactId) {
           return item; 
        } else {
            return null;
        }})
  }
  
  async function addContact(name, email, phone) {
    const newContact = {id: nanoid(), name, email, phone};
    const newContactString = JSON.stringify(newContact);
    const data = await fs.writeFile(contactsPath, newContactString, (err) => {
        if (err) throw err;
        console.log('The file has been saved!')
    })
    console.log(data)
    return data;
    //console.log(data)
   // return fs.writeFile(contactsPath, newContact)
    // ...твій код. Повертає об'єкт доданого контакту (з id).
  }

  addContact('name', 'email', 'phone')