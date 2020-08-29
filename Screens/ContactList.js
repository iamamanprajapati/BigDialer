import React, { useState, useEffect } from "react";

import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Linking,
  TouchableOpacity
} from "react-native";

import Contacts from "react-native-contacts";
import ListItem from "../components/ListItem";

export const ContactList = () => {
  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (Platform.OS === "android") {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: "Contacts",
        message: "This app would like to view your contacts."
      }).then(() => {
        loadContacts();
      });
    } else {
      loadContacts();
    }
  }, []);

  const loadContacts = () => {
    Contacts.getAll((err, contacts) => {
      contacts.sort((a,b) => a.givenName.toLowerCase() > b.givenName.toLowerCase());
      // console.log('contacts -> ', contacts);
      if (err === "denied") {
        alert("Permission to access contacts was denied");
        console.warn("Permission to access contacts was denied");
      } else {
        setContacts(contacts);
      }
    });
  }

  const search = (text) => {
    const phoneNumberRegex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    if (text === "" || text === null) {
      loadContacts();
    } else if (phoneNumberRegex.test(text)) {
      Contacts.getContactsByPhoneNumber(text, (err, contacts) => {
        contacts.sort((a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase());
        setContacts(contacts);
        console.log('contacts', contacts);
      });
    } else {
      Contacts.getContactsMatchingString(text, (err, contacts) => {
        contacts.sort((a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase());
        setContacts(contacts);
        console.log('contacts', contacts);
      });
    }
  }

  const openContact = (contact) => {
    console.log(JSON.stringify(contact.phoneNumbers[1].number));
    Contacts.openExistingContact(contact, () => { 
    })
  };

  const callToContact = () => {
    console.log('callToContact')
  }

  const longClick = () => {
    console.log('run')
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TextInput
          onChangeText={search}
          placeholder='Search'
          style={styles.searchBar}
        />
        <FlatList
          data={contacts}
          renderItem={(contact) => {
            return (
            <ListItem
              key={contact.item.recordID}
              item={contact.item}
              onPress={callToContact}
              onLongPress={openContact}
            />
            )}}
          keyExtractor={item => item.recordID}
        />
      </View>
    </SafeAreaView>
  );
}
export default ContactList;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBar: {
    backgroundColor: '#f0eded',
    paddingHorizontal: 30,
    paddingVertical: (Platform.OS === "android") ? undefined : 15,
  }
});