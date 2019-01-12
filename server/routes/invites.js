const express = require('express')
const Router = express.Router()
const axios = require('axios')

const data = {
  contacts: [],
  invited: [],
  notinvited: []
}

Router.get('/invites', (req, res, next) => {
  axios.get('https://randomuser.me/api/?results=100').then( resp => {
    const contacts = resp.data.results.map( (data, i) => {
      return{
        id: i + 1,
        fname: data.name.first,
        lname: data.name.last,
        phone: data.phone,
        email: data.email,
        image: data.picture.large,
        status: ""
     } 
    })
    data.contacts = contacts
    res.json(contacts)
  })
})

Router.get('/invited', (req, res , next) => {
  res.json(data.invited)
})

Router.get('/notinvited', (req, res , next) => {
  res.json(data.notinvited)
})

Router.patch('/invited', (req, res, next) => {
  const id = req.body.id

  const contactIsInvited = data.invited.filter(person => id == person.id).length !== 0
  const contactIsNotInvited = data.notinvited.filter(person => id == person.id).length !== 0
  const contactIsPending = data.contacts.filter(person => id == person.id).length !== 0

  if (contactIsPending) {
    const contact = data.contacts.find(person => id == person.id)
    data.contacts = data.contacts.filter(person => id != person.id)
    data.invited.push(contact)
  }

  if (contactIsNotInvited) {
    const contact = data.notinvited.find(person => id == person.id)
    data.notinvited = data.notinvited.filter(person => id != person.id)
    data.invited.push(contact)
  }

  res.json(data.invited)
})

Router.patch('/notinvited', (req, res, next) => {
  const id = req.body.id

  const contactIsInvited = data.invited.filter(person => id == person.id).length !== 0
  const contactIsNotInvited = data.notinvited.filter(person => id == person.id).length !== 0
  const contactIsPending = data.contacts.filter(person => id == person.id).length !== 0

  if (contactIsPending) {
    const contact = data.contacts.find(person => id == person.id)
    data.contacts = data.contacts.filter(person => id != person.id)
    data.notinvited.push(contact)
  }

  if (contactIsInvited) {
    const contact = data.invited.find(person => id == person.id)
    data.invited = data.invited.filter(person => id != person.id)
    data.notinvited.push(contact)
  }

  res.json(data.notinvited)
})

module.exports = Router