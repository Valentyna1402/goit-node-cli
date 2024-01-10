// const fs = require('fs').promises;
// const path = require('path');

// const contactsPath = path.basename('./db/contacts.json');
// const contacts = require(contactsPath);

// export async function listContacts() {
//     const data = await fs.readFile(contactsPath);
//     console.log(data)
//     return data;
//     // ...твій код. Повертає масив контактів.
//   }
  
//   async function getContactById(contactId) {
//     // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
//   }
  
//   async function removeContact(contactId) {
//     // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
//   }
  
//   async function addContact(name, email, phone) {
//     // ...твій код. Повертає об'єкт доданого контакту (з id).
//   }