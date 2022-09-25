import { connect } from "react-redux";
import { AddData, DeleteData, EditData } from "../../redux/actions";

const Todo = (props) => {

  const { data, Edit, Delete } = props;
 
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
          <button onClick={() => {Delete(d)}} className='btn delete_btn'>Delete</button>
        </div>
      </div>
    );
  }))
};

const mapStateToProps = ({ data }) => {
  return {
    data,
  };
};

export default connect(mapStateToProps, { AddData, DeleteData, EditData })(Todo);
