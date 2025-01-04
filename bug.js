```javascript
const query = { name: /John/i }; // Case-insensitive search

const cursor = db.collection('users').find(query);

cursor.forEach((doc) => {
  console.log(doc);
});
```