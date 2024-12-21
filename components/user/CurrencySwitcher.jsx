// components/CurrencySwitcher.js
"use client";

import Image from "next/image";
import { useState } from "react";

const CurrencySwitcher = () => {
    const [active, setActive] = useState("AZN");

    const currencies = [
        {
            "logo": "USA.svg",
            "text": "USD"
        },
        {
            "logo": "euro.svg",
            "text": "EUR",
        },
        {
            "logo": "azerbaijan.svg",
            "text": "AZN",
        }
    ]

    const handleCurrencyChange = (currencyCode) => {
        setCurrency(currencyCode);
    };

    return (
        <div className="relative inline-block">
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1 bg-accent ">
                    {
                        currencies.find(item => item.text === active) && (
                            <Image src={`/icons/${currencies.find(item => item.text === active).logo}`} width={20} height={20}
                                alt={currencies.find(item => item.text === active).text} />
                        )
                    }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-40  shadow-md hover:bg-slate-100">
                    {
                        currencies.map((item, idx) => (
                            <li className="gap-1 p-1" key={idx} onClick={() => handleCurrencyChange(item.text)}>
                                <div className="flex items-center gap-2">
                                    <Image src={`/icons/${item.logo}`} width={24} height={24} alt={item.text} />
                                    <span className="text-sm font-semibold"> {item.text} </span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>


        </div>
    );
};

export default CurrencySwitcher;
