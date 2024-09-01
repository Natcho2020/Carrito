import express from 'express';
import { engine } from 'express-handlebars'
import { router as users } from './routes/users.js'

const app = express()

app.use(express.json())
app.use(express.static('static'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use("/", users)


app.listen(5050, () => { console.log("App escuchando el puerto 5050") })