const mongoose = require('mongoose')
require('dotenv').config();
//connect mongoose 
mongoose.connect(process.env.DB_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
    .catch(err => console.log('>>>>>>>>> DB Error: ', err));