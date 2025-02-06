// CRUD operations
use("CrudDb");

// CREATE
// db.createCollection("courses");

// db.courses.insertOne({
//     name: "Harrys Web Dev free course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// });

// db.courses.insertMany([
//     {
//       "name": "Frontend Web Development",
//       "price": 0,
//       "assignments": 10,
//       "projects": 20
//     },
//     {
//       "name": "Backend Development with Node.js",
//       "price": 50,
//       "assignments": 15,
//       "projects": 25
//     },
//     {
//       "name": "Full Stack Web Development",
//       "price": 100,
//       "assignments": 20,
//       "projects": 30
//     },
//     {
//       "name": "React & Next.js Masterclass",
//       "price": 75,
//       "assignments": 12,
//       "projects": 18
//     },
//     {
//       "name": "Advanced JavaScript & TypeScript",
//       "price": 60,
//       "assignments": 14,
//       "projects": 22
//     },
//     {
//       "name": "Python for Web Scraping",
//       "price": 40,
//       "assignments": 8,
//       "projects": 12
//     },
//     {
//       "name": "WordPress & CMS Development",
//       "price": 35,
//       "assignments": 10,
//       "projects": 15
//     },
//     {
//       "name": "Mobile App Development with Flutter",
//       "price": 90,
//       "assignments": 18,
//       "projects": 28
//     },
//     {
//       "name": "DevOps & Cloud Deployment",
//       "price": 120,
//       "assignments": 22,
//       "projects": 35
//     },
//     {
//       "name": "Ethical Hacking & Cybersecurity",
//       "price": 150,
//       "assignments": 25,
//       "projects": 40
//     }
//   ]
//   );

// READ
// let a = db.courses.find({price: 0});

// console.log(a.count());

// console.log(a.toArray());

let b = db.courses.findOne({price: 0});

console.log(b);

// UPDATE
db.courses.updateOne({price: 0}, 
    {$set:{price: 100}});

    db.courses.updateMany({price: 0}, 
        {$set:{price: 100}});
    

// DELETE
db.courses.deleteOne({price:100});

db.courses.deleteMany({price: 400});