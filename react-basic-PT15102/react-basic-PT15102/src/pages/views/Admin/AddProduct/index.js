import React, { useState } from 'react'
import {useHistory} from "react-router-dom"
import { useForm } from "react-hook-form";
import { Editor } from '@tinymce/tinymce-react';
import firebase from './../../../../firebase'
const Addproduct = ({onAdd}) => {
    const { register, handleSubmit, watch, errors } = useForm();
    let history = useHistory();
    const [Desc,setDesc] = useState();
    //     const [valueInput, setValueInput] = React.useState({});
    // const onHandleChange = (e) => {
    //     const {name,imge,price,value} = e.target;
    //     setValueInput(
    //         {...valueInput,[name]: e.target.value},
    //         {...valueInput,[imge]: e.target.value},
    //         {...valueInput,[price]: e.target.value}
    //     );
    // }
    // const onHandleSubmit = (data) => {
    //     // e.preventDefault();
    //     //     onAdd(valueInput);
    //     history.push("/admin/products");
    //     // console.log(e);
    // };
    const onHandleSubmit = (data) => {
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`images/${file.name}`); // tạo folder chứa ảnh trên firesbase
        let uploadTask = storageRef.put(file);// đẩy ảnh lên đường dẫn trên
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED); // thực hiện
        // lấy ảnh từ firestore
        firebase.storage().ref().child(`images/${file.name}`).getDownloadURL().then((url) => {
        // Tạo object mới chứa toàn bộ thông tin từ input
        const newData = {
        id: Math.random().toString(36).substr(2, 9),
        ...data,
        Desc,
        image: url
        }
        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        onAdd(newData);
        history.push("/admin/products")
        });
        }
        const handleEditorChange =(content,Editor) =>
        setDesc(content);
        // console.log();
    return (

        

           
        <div className="left-content">
        <div className="mother-grid-inner"></div>
        <form action="" className="w-50" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="productName"
                        ref={register({ required: true, minLength: 1 })}
                        aria-describedby="nameHelp"
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>Không để trống</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Phải ít nhất 5 ký tự</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Ảnh sản phẩm</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" ref={register} className="custom-file-input" id="inputGroupFile02" name="image"
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                        </div>
                    </div>
                    <small id="imageHelp" className="form-text text-danger">{errors.image && <span>This field is required</span>}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Giá sản phẩm</label>
                    <input
                        type="text"
                        name="price"
                        className="form-control"
                        id="productPrice"
                        ref={register({ required: true })}
                        // ref={register({ register )}
                        aria-describedby="priceHelp"
                    />
                    <small id="priceHelp" className="form-text text-danger">{errors.price && <span>Không được để trống</span>}</small>
                    {errors.price && errors.price.type === "min","max" && <span>Phải là số nguyên dương</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="productDescription">Mô tả chi tiết sản phẩm</label>
                    <Editor
                        init={{
                            height: 500,
                            images_upload_url: 'postAcceptor.php',
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor |  image link\
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help',
                        }}
                        onEditorChange={handleEditorChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
            </form>
        </div>

        
    )
}
Addproduct.propTypes = {
}
export default Addproduct