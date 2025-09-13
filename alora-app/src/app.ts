import express from 'express';
import router from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use('/api', router);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});