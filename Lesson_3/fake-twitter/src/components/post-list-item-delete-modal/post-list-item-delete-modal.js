import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class DeleteModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
  
    render() {
        const {onDelete} = this.props;
        return (
            <div>
            <button className="btn-trash btn-sm" onClick={this.toggle}>{this.props.buttonLabel}
            <i className="fa fa-trash-o"></i>
            </button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Удалить сообщение</ModalHeader>
                <ModalBody>
                Вы точно хотите удалить это сообщение?
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={onDelete}>Удалить</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Отмена</Button>
                </ModalFooter>
            </Modal>
            </div>
        );
    }
}