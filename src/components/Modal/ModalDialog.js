import React from 'react';
import { Modal, Button } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

const ModalDialog = (props) => {

    return (
        <Modal
            title={props.title}
            visible={props.visible}
            onOk={props.handleOk}
            confirmLoading={props.confirmLoading}
            okText="Save"
            onCancel={props.handleCancel}>
            {props.todo && (
                <div>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="Action" onChange={props.handleChange} value={props.todo.action} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DatePicker defaultPickerValue={moment(new Date(), dateFormat)}
                                onChange={props.handleDateChange}
                                placeholder="Action item date"
                                value={props.todo.dateAdded ? moment(props.todo.dateAdded, dateFormat) : ''}
                                format={dateFormat} />
                        </Col>
                    </Row>
                </div>
            )}
            {props.user && (
                <div>
                    <Row>
                        <Col span={24}>
                            <Input name="name" placeholder="Name"
                                value={props.user.name} onChange={props.handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Input placeholder="Email" name="email"
                                value={props.user.email} onChange={props.handleChange} />
                        </Col>
                    </Row>
                </div>
            )}


        </Modal>
    );
}

export default ModalDialog;