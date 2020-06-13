import React from 'react';
import { Modal, Button } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

const ModalDialog = (props) => {

    const onDateChange = (date, dateString) => {
        console.log(date);
    }

    return (
        <Modal
            title={props.title}
            visible={props.visible}
            onOk={props.handleOk}
            confirmLoading={props.confirmLoading}
            okText="Save"
            onCancel={props.handleCancel}>

            <Row>
                <Col span={24}>
                    <Input placeholder="Action" onChange={props.handleChange} value={props.todo.action} />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <DatePicker defaultValue={moment(props.todo ? props.todo.dateAdded : new Date(), dateFormat)}
                        onChange={onDateChange}
                        format={dateFormat} />
                </Col>
            </Row>
            {/* <Row>
                <Col span={24}>
                    <Input name="name" placeholder="Name"
                        value={props.user.email} onChange={props.handleChange} />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Input placeholder="Email" name="email"
                        value={props.user.email} onChange={props.handleChange} />
                </Col>
            </Row> */}


        </Modal>
    );
}

export default ModalDialog;