//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient
//const ObectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

const id = new ObjectID()
console.log(id)

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
  if(error){
    return console.log('unable to connect to db')
  }
  const db = client.db(databaseName)

  /***
   * 
   * inset just one document
   * 
   * db.collection('users').insertOne({
    name: "aaron",
    age: 21
  }, (error, result) => {
    if(error){
      return console.log('unable to insert user')
    }
    console.log(result.ops) 
  }) */

  /***
   * 
   * inset just one document
  db.collection('tasks').insertMany([
    {
      description: "Writing an assay on how beautiful the world is",
      completed: true
    },
    {
      description: "Clean up de dishwasher",
      completed: false
    }
    ,
    {
      description: "Donate money to a charity",
      completed: false
    }
  ], (error, result) => {
    if(error){
      return console.log('unable to insert user')
    }
    console.log(result.ops) 
  })*/

  
})

