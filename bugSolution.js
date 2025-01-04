```javascript
const query = { name: { $regex: 'John', $options: 'i' } }; // Correct case-insensitive search

const cursor = db.collection('users').find(query);

cursor.forEach((doc) => {
  console.log(doc);
});
```