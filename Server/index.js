const express = require('express')
const mongoose = require('mongoose')

const authRouter = require('./routes/auth')

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://pdwg:Never123@final-project.jbuc1.mongodb.net/final-project?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex:true,
            //useFindAndModify: false
    
        })
        
        console.log(`MongoDB connected `)
    }
    catch (error){
        console.log(error.message)
        process.exit(1);
    }
}

connectDB()

const app = express()

//app.get('/',(req,res) => res.send('Hello world'))

app.use('/api/auth', authRouter)


const PORT = 5000

app.listen(PORT, () => console.log(`Server start on ${PORT}`))