"use client"
import React from 'react';
import { Select, Slider } from 'antd';
import "../../styles/globals.css"
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

export default function Home() {
    return (
        <main className='container mx-auto mt-20' style={{maxWidth : "1000px"}}>
            <Select
                defaultValue="lucy"
                showSearch={true}
                style={{ width: 200 }}
                onChange={handleChange}
                // suffixIcon={
                //     <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Artboard 2</title><path d="M460.8 307.2v153.6H307.2V307.2h153.6zm-153.6 384h153.6V537.6H307.2v153.6zm230.4-230.4h153.6V307.2H537.6v153.6zm153.6 76.8H537.6v153.6h153.6V537.6z" fill="#000000" fill-rule="evenodd"></path></g></svg>
                // }
                options={[
                    {
                        label: <span>manager</span>,
                        title: 'manager',
                        options: [
                            { label: <span>Jack</span>, value: 'Jack' },
                            { label: <span>Lucy</span>, value: 'Lucy' },
                        ],
                    },
                    {
                        label: <span>engineer</span>,
                        title: 'engineer',
                        options: [
                            { label: <span>Chloe</span>, value: 'Chloe' },
                            { label: <span>Lucas</span>, value: 'Lucas' },
                        ],
                    },
                ]}
            />
            <Slider range   defaultValue={[20, 50]} disabled={false} />
        </main>
    )
}

