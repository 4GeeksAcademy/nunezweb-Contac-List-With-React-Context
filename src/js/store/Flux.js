const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      apiUrl: "https://playground.4geeks.com/contact/agendas",
      user: "nunezweb",
    },
    actions: {
      createContactList: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}/${store.user}`, {
            method: "POST",
          });
          console.log(response);
          const data = await response.json();
          if (response.ok) {
            console.log(data);
            return true;
          }
          console.log(data);
          return false;
        } catch (error) {
          console.log(error);
          return false;
        }
      },
      getContacts: async () => {
        const store = getStore();
        try {
          const response = await fetch(
            `${store.apiUrl}/${store.user}/contacts`
          );
          console.log(response);
          const data = await response.json();
          if (response.ok) {
            console.log(data);
            setStore({ contacts: data.contacts });
            return true;
          }
          console.log(data);
          setStore({ contacts: false });
          return false;
        } catch (error) {
          console.log(error);
          setStore({ contacts: false });
          return false;
        }
      },
      addContact: async (contact) => {
        const store = getStore();
        const actions = getActions();
        try {
          const response = await fetch(
            `${store.apiUrl}/${store.user}/contacts`,
            {
              method: "POST",
              body: JSON.stringify(contact),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(response);
          const data = await response.json();
          if (response.ok) {
            console.log(data);
            actions.getContacts();
            return true;
          }
          console.log(data);
          return false;
        } catch (error) {
          console.log(error);
          return false;
        }
      },
      editContact: async (contact, id) => {
        const store = getStore();
        const actions = getActions();

        try {
          const response = await fetch(
            `${store.apiUrl}/${store.user}/contacts/${id}`,
            {
              method: "PUT",
              body: JSON.stringify(contact),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(response);
          const data = await response.json();
          if (response.ok) {
            console.log(data);
            actions.getContacts();
            return true;
          }
          console.log(data);
          return false;
        } catch (error) {
          console.log(error);
          return false;
        }
      },
      deleteContact: async (id) => {
        const store = getStore();
        const actions = getActions();

        try {
          const response = await fetch(
            `${store.apiUrl}/${store.user}/contacts/${id}`,
            { method: "DELETE" }
          );
          console.log(response);
          const data = await response;
          if (response.ok) {
            console.log(data);
            actions.getContacts();
            return true;
          }
          console.log(data);
          return false;
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      // Use getActions to call a function within a fuction
      //  getContacts: () => {
      // 	const store = getStore();
      //  	fetch('https://playground.4geeks.com/contact/agendas/nunezweb')
      // 	.then((response)=> response.json() )
      // 	.then((data)=> setStore({contacts: data.contacts}))
      // 	console.log(contacts)
      //  },
    },
  };
};

export default getState;
