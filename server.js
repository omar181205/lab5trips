const {app}=require('./index')
const port = 3000;
app.listen(port,()=>{
    console.log(`server i running on port ${port}`)
});