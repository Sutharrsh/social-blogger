import React, { useState } from 'react'
import {Button, Table,Modal,Input,Anchor} from 'antd'
import { EditOutlined ,DeleteOutline} from '@mui/icons-material'
function Trainee() {
    const [IsEdit,setEdit]=useState(false);
    
    const [EditTask,setTask]=useState("");
    const [dataSource,setDatasource]=useState([
        {
            id:1,
            Task:'Nothing'

        },
        {
            id:2,
            Task:'Nothing'
        },
        {
            id:3,
            Task:'Nothing'
        },
    ])
    const Todo=[
        {
                key:'1',
                title:'id',
                dataIndex:'id'
        },
        {
            key:'2',
            title:'Task',
            dataIndex:'Task'
        },
        {
            key:'3',
            title:'Action',
                render:(record)=>{
                return <>
                <EditOutlined onClick={()=>onEdit(record)}/>
                <DeleteOutline onClick={()=>onDel(record)}/>
                </>
            }   
         }
    ]
    const onEdit=(record)=>{
        setEdit(true);
        setTask({...record});
    }
    const onTask =()=>{
        const newTask={
            id:parseInt(Math.random()*1000),
            Task:'Random'
        }
        setDatasource((e)=>{
            return [...e,newTask]
        })
    }
    const handleOk = () => {
        setEdit(false);
        setDatasource(pre=>{
            return pre.map(Task=>{
                if(Task.id===EditTask.id){
                    return EditTask
                }
                else{
                    return Task
                }
            })
        })
      };
      const handleCancel = () => {
        setEdit(false);
      };
     
    const onDel=(record)=>{
        Modal.confirm({
            title:'Want Delete This Record?',
            onOk:()=>{

        
        setDatasource((e)=>{
           return e.filter(deldata=> deldata.id!==record.id)
        })}
    })
}
  return (
    <div className='App' style={{background:'#eee'}}>

        <Anchor direction='horizontal' items={[{
            key:1,
            href:'#Table',
            title:'Explore List'
        }]} style={{padding:'1rem',background:'#fff'}}>

        </Anchor>
        <Button onClick={onTask} style={{margin:'1rem'}}>Add Task</Button>
      <Table  columns={Todo} dataSource={dataSource} style={{margin:'1rem'}}>
        
      </Table>
      <Modal
        title="Edit Task"
        open={IsEdit}
        onOk={handleOk} onCancel={handleCancel}
        >
            <Input defaultValue={EditTask?.Task} onChange={(e)=>{
                setTask((pre)=>{
                    return {...pre,Task:e.target.value}
                })
            }}/>
            
        </Modal>
    </div>
  )
}

export default Trainee
