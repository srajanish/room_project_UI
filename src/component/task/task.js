import React,{useContext,useState,useEffect} from 'react';
import {httpContext} from '../../context/httpOperationContext';
import './task.css';
import {InputGroup,Button, FormLabel,Col,FormGroup,Tabs,Tab} from 'react-bootstrap';

function Task(props){

    let httpContextData =useContext(httpContext);
    let getTask={}; 
    let [task,setTask]=useState({
        cook:[],
        water:[]
    });
    const [water,setWater] = useState([])

    let getCookTask=()=>{
        httpContextData.operation.getCookTask().then(result=>{
            let defaultVal={...task};
            defaultVal['cook']=result.data;
            setTask(preVal=>({...preVal,cook:result.data}));
        },err=>console.log(err));
        console.log(httpContextData)

        
    }

    let getWaterTask=()=>{
        httpContextData.operation.getWaterTask().then(res=>{
   
            setTask(preVal=>({...preVal,water:res.data}));
            console.log(task)
        },err=>console.log(err));
       

    }





    useEffect(()=>{
      console.log(task)

            getCookTask();
           getWaterTask();

    },[])
    // useEffect(()=>{
       

    // },[])


    return(
        <>
        <div className="container-fluid">
{JSON.stringify(task)}
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="User Entry" >
            <div className="row">
                

                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Task</th>
                            <th>user</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            task.cook.map((v,i)=>{
                                console.log(v)
                            return(
                                <tr>
                                     <td>{v.date}</td>
                                     <td>{v.taskName}</td>
                                     <td>{v.email}</td>
                                </tr>
                            )
                            })
                        }
                    </tbody>
                </table>  
            </div>
            </Tab>




            </Tabs>
        </div>
            
        </>
    )
}

export default Task;