"use strict";

var storage = {
  keyContacts: "contacts_1",
  getContacts: function () {
    // get string from local storage
    var storageString = localStorage.getItem(this.keyContacts) || null;
    // convert string to JavaScript object and return, or return empty array if string is null
    return JSON.parse(storageString) || null;
  },
  setContacts: function (value) {
    // convert JavaScript object to string
    let contactStr = JSON.stringify(value);
    // store string in local storage
    localStorage.setItem(this.keyContacts, contactStr);
  },
  clearContacts: function () {
    localStorage.setItem(this.keyContacts, "");
  },
};
