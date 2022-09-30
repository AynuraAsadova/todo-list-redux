import { useState } from 'react'
import Todo from './Todo'
import { AddData, DeleteData, EditData } from "../../redux/actions";
import { connect } from 'react-redux';

const Todos = (props) => {

    const { AddData, EditData, DeleteData } = props;

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [id, setId] = useState(undefined)
    const [requiredStyle, setRequiredStyle] = useState("none")

    const Edit = (d) => {
        setTitle(d.title)
        setDescription(d.description)
        setId(d.id)
    }

    const Delete = (id) => {
        DeleteData(id)
        setTitle("")
        setDescription("")
        setId(undefined)
    }

    const Save = () => {
        if(id){
            EditData(id, title, description)
            setTitle("")
            setDescription("")
            setId(undefined)
            setRequiredStyle("none")
        }
        else if (title !== "" && description !== ""){
            AddData(title, description)
            setTitle("")
            setDescription("")
            setRequiredStyle("none")
        }
        else{
            setRequiredStyle("block")
        }
    }

  return (
    <div className='Todos'>
        <div className='row align-items-center justify-content-between mb-2'>
            <div className='col-md-9 input_group d-flex flex-wrap'>
                <div className="mb-3 me-2">
                    <label className="form-label">Todo name</label>
                    <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" className="form-control"/>
                    <small className='required_input' style={{display: requiredStyle}}>Add todo name</small>
                </div>
                <div className="mb-3">
                    <label className="form-label">Todo description</label>
                    <input value={description} onChange={(e) => {setDescription(e.target.value)}} type="text" className="form-control"/>
                    <small className='required_input' style={{display: requiredStyle}}>Add todo description</small>
                </div>
            </div>
            <div className='col-md-3 text-end'>
                <button onClick={() => Save()} className='btn add_btn'>{id ? "Edit Todo" : "Add Todo"}</button>
            </div>
            
        </div>
        <Todo Edit={Edit} Delete={Delete}/> 
    </div>
  )
}

const mapStateToProps = ({ data }) => {
    return {
      data,
    };
};
  
export default connect(mapStateToProps, { AddData, EditData, DeleteData })(Todos);
