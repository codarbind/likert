import express from 'express'
import validation from '../validation/question'
import model from '../database/db'
import jwt, { JwtPayload } from 'jsonwebtoken'

const router = express.Router()

router.use(express.urlencoded({extended:true}))
router.use(express.json())

router.get('/',async (req,res)=>{
    let {token} = req.query
    
    let status = await validation.validateGetQuestionSchema({token}) 
  
    if (status.error) return res.status(400).json({success:false, message:'incomplete details'})
    try{
        let payload = await jwt.verify(token as string, process.env.jwt_pass as string) as JwtPayload
        let qs_id = payload.qs_id
        
        let exam = await model.Question_Set_QS.findAll({where:{qsid:qs_id}})
        if (exam.length < 1)  return res.status(400).json({success:false, message:'no matching exam'})

        let rows = exam.map((row,index)=>{
          
            return row.toJSON().qid
            
        })
        let questions = await model.Questions.findAll({where:{id:rows}})
        questions =   questions.map((row,index)=>{
                return row.toJSON().question
            })
        
        return res.status(200).json({success:true, questions:questions})


    }catch(err){
        console.log({err})
        return res.status(500).json({success:false, message:'we too have questions to answer'})
    }


   // res.status(200).json({success:true, message:'a mail has been sent to the organisation', tempURL:`http://localhost:3000/test?token=${cryptedData}`})
})

export default router