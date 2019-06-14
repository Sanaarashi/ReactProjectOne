import React, {Component} from 'react';
import styled from 'styled-components';
import {Button, Input} from 'reactstrap'

const SomeBlock = styled.form`
    display: flex;
    margin-top: 20px;
    Input {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`;

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.text.length > 0) {
            this.props.onAdd(this.state.text);
            this.setState({
                text: ''
            })
        }
    }

    render() {
        return (
            <SomeBlock className="bottom-panel"
                onSubmit={this.onSubmit}>
                <Input
                    type="text"
                    placeholder="О чем вы думаете сейчас"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <Button
                    type="submit"
                    outline
                    className="btn">
                    Добавить</Button>
            </SomeBlock>
        )
    }
}