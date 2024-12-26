const  http = require('http')

//This is like a form of react router and does same purpose but it is not REACT ROUTER!!!
//req=request       res= response
const server = http.createServer((req,res) => {
    if(req.url === '/'){
       return res.end('Welcome to our home page bro')
    }

    if(req.url === '/about'){
      return  res.end('You don enter about page')
    }

   return res.end(
         `
        <h1>Oops! </h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back to home</a>
        `
    )

})
server.listen(5000)