import express from 'express'
import mongoose from 'mongoose'

const app = express();

const port = 5000;

mongoose.connect('mongodb+srv://vivek:vivek1234@viveksmedia.6gprsge.mongodb.net/aspire', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
  
  // Middleware to parse JSON data
  app.use(express.json());
  
  // Define a schema and model for storing form data in MongoDB
  const formDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
  });
  
  const FormData = mongoose.model('FormData', formDataSchema);
  
  // Define a route to handle form data submission
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
  
      // Create a new FormData document
      const formData = new FormData({
        name,
        email,
        message,
      });
  
      // Save the data to MongoDB
      await formData.save();
  
      res.status(201).json({ message: 'Form data saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });