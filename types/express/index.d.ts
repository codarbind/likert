declare namespace Express {
    export interface Request {
       getToken?: string,
       payload?: JwtPayload,
       data?:object,
       
    }

    export interface Response{
        

    }
 }

 declare namespace pg {
    export interface QueryResultRow{
       userpassword?: string

    }
 }