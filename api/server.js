const express = require('express')
const cors = require("cors")
const tasks=require('./routes/routes')
const app = express();

//user-/api/ethereum/create-task -> server.js -> routes.js -> controller.js -> tasks.js
app.use(cors())
app.use(express.json())
app.use('/api/ethereum',tasks)

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server Running At PORT ${PORT}`)
})




// const ABI = require("./ABI.json");
// const {Web3}= require("web3");
// const web3 = new Web3("https://crimson-dawn-patina.ethereum-sepolia.discover.quiknode.pro/47d071f4d9ceb04a91320d33bb735897a7691c20/")
// const contractAddress = "0x795e47574f11055806e294f1b95090cd46ececdd";
// const contract = new web3.eth.Contract(ABI,contractAddress);

// const dateclashCheck=async(taskDate)=>{
//     const tasks = await contract.methods.allTask().call();
//     const foundTask = tasks.find(task=>task.date===taskDate);

//     if(foundTask){
//         return foundTask.name;
//     }
//     return "No Task Found";
// }

// const priorityCheck = async(id)=>{
//     const tasks = await contract.methods.allTask().call();
//     const result = tasks[id-1].name.includes("priority")
//     return result;
// }

// app.post("/api/ethereum/create-task",async(req,res)=>{
//    const {taskDate}=req.body; 
//    const task = await dateclashCheck(taskDate);
//    try{
//      if(task!=="No Task Found"){
//         res.status(409).json({status:409,message:"Date clash:Task cannot be added"})
//      }else{
//         res.status(200).json({status:200,message:"Task can be added"})
//      }
//    }catch(error){
//     console.error(error)
//    }
// })

// app.get("/api/ethereum/view-task/:taskId",async(req,res)=>{
//     try{
//         const {taskId}=req.params;
//         const task = await contract.methods.viewTask(taskId).call();
//         const{id,name,date}=task;
//         const numId = Number(id);
//         const taskObj={
//             numId,name,date
//         }
//         res.status(200).json({status:200,taskObj,message:"Task Exist"})
//     }catch(error){
//         res.status(404).json({status:500,message:"Task does not exist"})
//         console.error(error)
//     }
// })

// app.get("/api/ethereum/view-all-task",async(req,res)=>{
//     try{
//         const tasks = await contract.methods.allTask().call();
//         if(tasks.length<0){
//             res.status(404).json({status:404,message:"Task list does not exist"})
//         }else{
//             const taskList = tasks.map(({id,name,date})=>{
//                const taskId=Number(id);
//                return {taskId,name,date}
//             })
//             res.status(200).json({status:200,taskList,message:"Task Exist"})
//         }
//     }catch(error){
//         console.error(error)
//     }
// })

// app.post("/api/ethereum/update-task",async(req,res)=>{
//     const {taskDate}=req.body; 
//     const task = await dateclashCheck(taskDate);
//     try{
//       if(task!=="No Task Found"){
//          res.status(409).json({status:409,message:"Date clash:Task cannot be updated"})
//       }else{
//          res.status(200).json({status:200,message:"Task can be updated"})
//       }
//     }catch(error){
//      console.error(error)
//     }
// })

// app.delete("/api/ethereum/delete-task/:taskId",async(req,res)=>{
//     try{
//       const {taskId}=req.params;
//       const isTrue = await priorityCheck(taskId);
//       if(isTrue){
//         res.status(403).json({status:403,message:"Task cannot be deleted"})
//       }else{
//         res.status(200).json({status:200,message:"Task can be deleted"})
//       }
//     }catch(error){
//       console.error(error)
//     }
// })

