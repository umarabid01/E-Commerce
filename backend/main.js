const {Client}=require("pg")

const con=new Client({
    host:"pg-shopme-multitalent-209b.j.aivencloud.com",
    user:"avnadmin",
    port:24362,
    password:"AVNS_bD8sPah1REtwoNtXfZU",
    database:"defaultdb",
    ssl:{rejectUnauthorized:false } 

})

con.connect().then(()=> console.log("connnected"))

con.query('select * from product ',(err,res)=>{
    if(!err){
        console.log(res.rows)
    }
    else{
        console.log(err.message)

    }
    con.end()
}  )

