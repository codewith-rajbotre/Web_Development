use("CRUDdb")
 console.log(db)
//  create collection
//  db.createCollection("Courses")
 //Inserting Data into a database
//  db.Courses.insertOne({name : "MongoDB",
//     status : "Learning"
//  })

//  db.Courses.insertMany([
//     // Document 1
//     {
//         "name": "Alice",
//         "age": 28,
//         "email": "alice@example.com",
//         "status": "active"
//     },
    
//     // Document 2
//     {
//         "name": "Bob",
//         "age": 34,
//         "email": "bob@example.com",
//         "status": "inactive"
//     },
    
//     // Document 3
//     {
//         "name": "Charlie",
//         "age": 23,
//         "email": "charlie@example.com",
//         "status": "pending"
//     },
    
//     // Document 4
//     {
//         "name": "David",
//         "age": 45,
//         "email": "david@example.com",
//         "status": "active"
//     },
    
//     // Document 5
//     {
//         "name": "Eve",
//         "age": 29,
//         "email": "eve@example.com",
//         "status": "inactive"
//     },
    
//     // Document 6
//     {
//         "name": "Frank",
//         "age": 38,
//         "email": "frank@example.com",
//         "status": "active"
//     },
    
//     // Document 7
//     {
//         "name": "Grace",
//         "age": 31,
//         "email": "grace@example.com",
//         "status": "pending"
//     },
    
//     // Document 8
//     {
//         "name": "Henry",
//         "age": 27,
//         "email": "henry@example.com",
//         "status": "active"
//     },
    
//     // Document 9
//     {
//         "name": "Ivy",
//         "age": 26,
//         "email": "ivy@example.com",
//         "status": "inactive"
//     },
    
//     // Document 10
//     {
//         "name": "Jack",
//         "age": 35,
//         "email": "jack@example.com",
//         "status": "pending"
//     }
//     ])

    //To read the data from the database
    
    //db.Courses.find()//This query gives you all the documents 

    //db.Courses.findOne()//This query results in only one document as an output

    //By using diffrent condition
    db.Courses.find({"name":"Jack"})
let a = db.Courses.find()
console.log(a.count())
db.Courses.deleteMany({
    "age":45
})