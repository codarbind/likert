import Joi from 'joi'

const questionSchema = Joi.object({
    org_id: Joi.string().required(),
    qs_id: Joi.string().required(),
    respondent_email: Joi.string().email().required()
})

const getQuestionSchema = Joi.object({
    token: Joi.string().required(),
 
})


let validateQuestionSchema = async (body:object)=>{
   let validation = await questionSchema.validate(body)
   return validation
}

let validateGetQuestionSchema = async(body:object)=>{
    return await getQuestionSchema.validate(body)
}



export default {validateQuestionSchema, validateGetQuestionSchema}