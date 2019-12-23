import React,{useContext,useState,useEffect} from 'react';
import {httpContext} from '../../context/httpOperationContext';
import './task.css';
import {InputGroup,Button, FormLabel,Col,FormGroup,Tabs,Tab} from 'react-bootstrap';

function Task(props){

    let httpContextData =useContext(httpContext);
    let getTask={}; 
    const [task,setTask]=useState({
        cook:[]
    });

    const getCookTask=()=>{
        httpContextData.operation.getCookTask().then(res=>{
            console.log(res.data)
            let defaultVal={...task};
            defaultVal['cook']=res.data;
            setTask(defaultVal);
          
        },err=>console.log(err));
        console.log(httpContextData)
    }

    const getWaterTask=()=>{
        httpContextData.operation.getWaterTask().then(res=>{
            console.log(res.data)
            let defaultVal={...task};
            defaultVal['water']=res.data;
            setTask(defaultVal);
          
        },err=>console.log(err));

    }





    useEffect(()=>{
        getCookTask();
        getWaterTask();
    },[])


    return(
        <>
        <div className="container-fluid">

        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="User Entry" >
            <div className="row">
                {/* {JSON.stringify(task)} */}

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
                            task['cook'].map((v,i)=>{
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