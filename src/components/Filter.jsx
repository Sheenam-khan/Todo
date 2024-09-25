import React from 'react';
import { Radio } from 'antd';

const Filter = ({ setFilter, filter }) => {
    const options = [
        {
            value: 'all',
            label: 'All'
        },
        {
            value: 'pending',
            label: 'Pending'
        },
        {
            value: 'completed',
            label: 'Completed'
        }
    ]
    return (
        <div style={{ marginBottom: '20px' }}>
            <Radio.Group value={filter} onChange={(e) => setFilter(e.target?.value)}>
                {options?.map((item, index) =>
                    <Radio.Button key={index} value={item?.value} style={{ marginRight: '10px' }}>{item.label}</Radio.Button>
                )}
            </Radio.Group>
        </div>
    );
};

export default Filter;