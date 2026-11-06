const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const contactRoutes = require('./routes/contact');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.set('trust proxy', 1);
app.use(cors());
app.use(express.json({ limit: '16kb' }));

app.use('/api/contact', contactRoutes);

if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '../frontend/dist');
  app.use(express.static(distPath));

  app.get('/{*splat}', (req, res) => {
    const cleanPath = req.path.replace(/^\/+|\/+$/g, '');
    if (cleanPath) {
      const candidateHtml = path.join(distPath, cleanPath, 'index.html');
      if (fs.existsSync(candidateHtml)) {
        return res.sendFile(candidateHtml);
      }
    }
    return res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
