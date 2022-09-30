import { connect } from "react-redux";
import { AddData, DeleteData, EditData, getData } from "../../redux/actions";
import { Popconfirm } from 'antd';
import { useEffect } from 'react';


const Todo = (props) => {


  const { data, Edit, Delete, getData } = props;

  const confirm = (d) => {
    Delete(d.id) 
  };

  useEffect(() => {
    getData()
  }, [getData])


  return (
    data.map((d, i) => {
    return (
      <div key={d.id} className='Todo_item d-flex flex-wrap justify-content-between align-items-center mt-1'>
        <div>
          <h4 className='task_title'>{d.title}</h4>
          <p className='task_description'>{d.description}</p>
        </div>
        <div className='btn_wrapper d-flex align-items-center'>
          <button onClick={() => Edit(d)} className='btn edit_btn me-2'>Edit</button>
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => {confirm(d)}}
            placement="top"
            okText="Yes"
            cancelText="No"
          >
            <button className='btn delete_btn'>Delete</button>
          </Popconfirm>
        </div>
      </div>
    );
  })
  )
};

const mapStateToProps = ({ state }) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, { AddData, DeleteData, EditData, getData })(Todo);
