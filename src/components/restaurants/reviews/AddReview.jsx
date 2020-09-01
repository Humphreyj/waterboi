import React,{useState} from 'react';
import {connect,useDispatch} from 'react-redux';
import {addNewReview} from '../../../Redux/actions/restaurantActions';


const AddReview = (props) => {
    const dispatch = useDispatch();
    console.log(props)
    const [newReview, setNewReview] =useState({
        users_id: props.user.id,
        content: '',
        rating: 3
    })

    const handleChange = e => {
        setNewReview({...newReview,[e.target.name]: e.target.value})
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewReview(props.match,newReview))
        setNewReview({
            users_id: props.user.id,
            content: '',
            rating: 3
        })
    }
    return (
        <div>
            <h4 className="title">Leave your review</h4>
            <form onSubmit={handleSubmit}>
                <p>{props.user.display}</p>
                <textarea placeholder='How was it?' onChange={handleChange} name="content" value={newReview.content} id="content" cols="30" rows="10"></textarea>
                <div className="rating-container">
                    <h4 className="rating-title">Rating</h4>
                    <select 
                    name="rating" 
                    id="rating"
                    value={newReview.rating}
                    onChange={handleChange}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button className="submit-button">Submit</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.data,
    }
}

export default connect(mapStateToProps)(AddReview);
