const jwt = require("jsonwebtoken")
const SECRET_KEY = "TASKAPI"


const auth = (req, res, next) =>{

    try {
        let token = req.headers.authorization;

        if (token) {
            token = token.split(" ")[1]
            jwt.verify(token, SECRET_KEY, (err,user)=>{
                if(err){

                    if(err.name === 'TokenExpiredError' ){
                        return res.status(401).json({message: "Token has expired"})                  
                    }
                    else{
                        res.status(401).json({message: "Invalid user"})
                    }
                }
                req.userId = user.id    
            })
                    
            
        } 
        else {
            res.status(401).json({message: "Unauthorized user"})
        }

        next();
        
    } 
    
    catch (error) {
        console.log(error)
        res.status(401).json({message: "Unauthorized user"})
        
    }
}

module.exports = auth;