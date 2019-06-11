import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false,
            edit: false,
            edited: true
        }
        this.editedText = this.props.label;
        this.postTime = new Date().toLocaleString();
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }
    
    onEdit() {
        this.setState(({edit, edited}) => ({
            edit: !edit,
            edited: !edited
        }))
        if (this.state.edited === false) {
            this.applyChanges();
        }
    }

    applyChanges() {
        return this.editedText = document.querySelector('.edited-item-value').value; 
    }

    showText = () => {
        return (
            <span className="app-list-item-label"
            onClick={this.onLike}>
                {this.editedText}
            </span>
        )
    }

    editText = () => {
        return (
            <input 
            type="text"
            placeholder={this.editedText}
            className="edited-item-value app-list-item-label"/>
        )
    }

    render () {
        const {important, like, edit} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                {(edit) ? this.editText() : this.showText()}
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-pencil btn-sm"
                        onClick={this.onEdit}>
                        <i className="fa fa-pencil"/>
                    </button>
                    <button 
                        type="button" 
                        className="btn-star btn-sm"
                        onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                    <div>
                        <i className="fa fa-clock-o"></i>
                        {this.postTime}
                    </div>
                </div>
            </div>
        )
    }
}