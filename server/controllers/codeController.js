const codeService = require('../services/codeService');
const {validationResult} = require('express-validator');

module.exports.postCode = async (req, res) =>
{
const validationErrors= validationResult(req).array();
if(validationErrors.length>0)
{
    const firstError = validationErrors[0];
    return res.status(422).send({
        error:firstError.msg
    });
}
    const data ={ 
        sourceCode: req.body.sourceCode
    };
    try
    {
        const createdCode = await codeService.postCodeService(data);
       
        return res.status(201).send(
            {
                msg: "code uploaded successfully!",
                codeID: createdCode._id,
                
            });
            // console.log(req.body.sourceCode));
            
    }
    catch(err)
    {
           //return res.status(500).send({error: err.message});
        console.log(err);
    }
};



module.exports.getCode = async(req,res) =>{
    try{
        const code = await codeService.find();
        res.send({code});

    } catch(err){
        res.status(500);
        res.send({
            error:err
        });
    }
};


module.exports.covertCodeToJS = async(req,res) =>{
    const data ={ 
        sourceCode: req.body.sourceCode
    };
    try
    {
        const plato = await codeService.covertCodeService(data);
       
        return res.status(201).send(
            {
                msg: "code saved into file successfully!",
                plato
                
            });
            // console.log(req.body.sourceCode));
            
    }
    catch(err)
    {
        
        console.log(err);
    }
};

module.exports.EslinterController = async(req,res) =>
{
    const data ={
        sourceCode: req.body.sourceCode
    };
   
    try{
        const results = await codeService.EsLinterService(data);
        return res.status(201).send(
            {
                msg: "code linted",
                results
                
            });
              
    }
    
    catch(err)
    {
        
           //return res.status(500).send({error: err.message});
        console.log(err);
    }
    
};

module.exports.testCodeController = async(req,res) =>
{
    const data ={
        sourceCode: req.body.sourceCode
    };
   
    try{
        const isSuccess = await codeService.testCodeService(data);
        console.log(isSuccess);
        return res.status(201).send(
            {
                isSuccess
                
            });
              
    }
    
    catch(err)
    {
        
           //return res.status(500).send({error: err.message});
        console.log(err);
    }
    
};

module.exports.testCodeController2 = async(req,res) =>
{
    const data ={
        sourceCode: req.body.sourceCode
    };
   
    try{
        const isSuccess = await codeService.testCodeService2(data);
        console.log(isSuccess);
        return res.status(201).send(
            {
                isSuccess
                
            });
              
    }
    
    catch(err)
    {
        
           //return res.status(500).send({error: err.message});
        console.log(err);
    }
    
};

module.exports.testCodeController3 = async(req,res) =>
{
    const data ={
        sourceCode: req.body.sourceCode
    };
   
    try{
        const isSuccess = await codeService.testCodeService3(data);
        console.log(isSuccess);
        return res.status(201).send(
            {
                isSuccess
                
            });
              
    }
    
    catch(err)
    {
        
           //return res.status(500).send({error: err.message});
        console.log(err);
    }
    
};












