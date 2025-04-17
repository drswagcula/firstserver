const express = require('express');
/* const path = require('path'); */

const app = express();
const PORT = 3000;

// Set up view engine and views directory for rendering HTML
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route for /api - sends JSON data
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from the API!' });
});

// Route for /html - makes an API call and renders HTML
app.get('/api/hello', async (req, res) => {
  try {
    const apiResponse = await axios.get('http://localhost:3000/api');
    const apiData = apiResponse.data;
    res.render('index', { title: 'HTML Page', data: apiData });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error occurred');
  }
});

/* app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 */