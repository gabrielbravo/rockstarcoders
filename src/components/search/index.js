import React from 'react'
import {  Input } from "antd";

const index = ({ titleSearch, handleTitle }) => {
    
    return (
        <Input style={{ width: '50%'}} value={titleSearch} onChange={handleTitle} />
    )
}

export default index;