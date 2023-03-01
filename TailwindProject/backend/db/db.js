const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://chansovoth:YAhlVRnHvE6vrMMv@cluster0.0y2ngos.mongodb.net/?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));