const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = "mongodb+srv://ty_mongouser:csis3380g2@atlascluster.hp3vha1.mongodb.net/CSIS3380_CLASS?retryWrites=true&w=majority&appName=AtlasCluster";

// const uri = "mongodb+srv://ty_mongouser:csis3380g2@atlascluster.hp3vha1.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster/"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true   })
const connection = mongoose.connection;
connection.prependOnceListener('open', () => {
    console.log('Mongo DB database connection established successfully')
})

const activityRouter = require('./routes/activities');

app.use('/activity', activityRouter);
app.listen(port, () => {
    console.log(`Server is ruuning on port: ${port}`)
})