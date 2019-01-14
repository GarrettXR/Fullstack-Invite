const express = require('express')
const Router = express.Router()
const axios = require('axios')

var contacts = []

  axios.get('https://randomuser.me/api/?results=100').then( resp => {
     contacts = resp.data.results.map( (data, i) => (
      {
        id: i + 1,
        fname: data.name.first,
        lname: data.name.last,
        phone: data.phone,
        email: data.email,
        image: data.picture.large,
        status: "pending"
     } 
    )
  )
    data.contacts = contacts
  })

Router.get('/invites', (req, res, next) => {
  res.json({
    contacts: contacts.find(contacts => contacts.status === "pending")
  })   
})

Router.get('/going', (req,res,next) => {
const contactsGoing = contacts.filter(contacts => contacts.status === "going")
res.json(contactsGoing)
})

Router.get('/notgoing', (req,res,next) => {
const contactsNotGoing = people.filter(contacts => contacts.status === "notgoing")
res.json(contactsNotGoing)
})

Router.patch('/invites/', (req,res,next) => {

const id = req.body.id;
const status = req.body.status;

contacts = contacts.map(contact => {
  if (contact.id == id) {
    return {...contact, status}
  } else {
    return contact
  }
});

// console.log(data.contacts);

res.json(contacts);
})


module.exports = Router