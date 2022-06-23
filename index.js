const express = require('express')
const app = express()
const helmet = require('helmet')
const PORT = 7777
// const PORT = process.env.PORT || 7777
const cors = require('cors')

app.use(helmet());
app.use(cors())
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ));

app.use("/api/hourly", require("./routes/hourly"))
app.use("/api/daily", require("./routes/daily"))
app.use("/api/monthly", require("./routes/monthly"))
app.use("/api/hourlyLNG", require("./routes/hourlyLNG"))
app.use("/api/dailyLNG", require("./routes/dailyLNG"))
app.use("/api/monthlyLNG", require("./routes/monthlyLNG"))

app.get('/try', (req,res)=>{
  res.send('Hello')
})
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}...`))