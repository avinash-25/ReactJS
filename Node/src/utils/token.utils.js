import jwt from "jsonwebtoken";

export const generateAccessToken = ({_id,email},secret)=>{

 return   jwt.sign({
               id:_id,
               email
            },
            secret,
            {expiresIn: '5m'}
        );
}

export const generateRefreshToken = (payload,secret)=>{

 return   jwt.sign({
               id:_id               
            },
            secret,
            {expiresIn: '7d'}
        );
}


export const verifyAccessToken = (token,secret) =>{
    return jwt.verify(token,secret);
}

export const verifyRefreshToken = (token,secret) =>{
    return jwt.verify(token,secret);
}