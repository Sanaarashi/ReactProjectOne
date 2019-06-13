import React from 'react';
import styled from 'styled-components';
import {Button, Input} from 'reactstrap'

const SomeBlock = styled.div`
    display: flex;
    margin-top: 20px;
    Input {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`;

const PostAddForm = ({onAdd}) => {
    return (
        <SomeBlock className="bottom-panel">
            <Input
                type="text"
                placeholder="О чем вы думаете сейчас"
                className="form-control new-post-label"
            />
            <Button
                type="submit"
                outline
                className="btn"
                onClick={() => onAdd('Hello')}>
                Добавить</Button>
        </SomeBlock>
    )
}

export default PostAddForm;