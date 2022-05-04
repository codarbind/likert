import exp from 'constants'
import express from 'express'
import validation from '../validation/question'
import jwt from 'jsonwebtoken'
import model from '../database/db'
import crypt from '../utils/crypt'
import 'dotenv/config'


const router = express.Router()

router.use(express.urlencoded({extended:true}))
router.use(express.json())

let pass = process.env.jwt_pass!

router.post('/create',async (req,res)=>{
    let {org_id, qs_id, respondent_email} = req.body
    let status = await validation.validateQuestionSchema({org_id, qs_id, respondent_email}) 
    
    if (status.error) return res.status(400).json({success:false, message:'incomplete details'})
    //let exp_date
    let exam_id = Math.floor(Math.random()*123458305039)
   
try{    
    
    let token = jwt.sign({org_id, qs_id, exam_id, respondent_email},pass) 
    console.log({token})
    return res.status(200).json({success:true, message:'a mail has been sent to the organisation', tempURL:`http://localhost:3000/test?token=${token}`})
}catch(e){
    console.log({e})
    return res.status(500).json({success:false, message:'we too have questions to answer'})

}

    
})

export default router