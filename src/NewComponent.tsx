import React from 'react';

export const NewComponent = () => {
    return (
        <>
            <ul>
                {currentMoney.map((moneyArray, index) => {
                    return (
                        <li key={index}>
                            <span>{moneyArray.banknots} -</span>
                            <span>{moneyArray.value} -</span>
                            <span>{moneyArray.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div className={'buttonClass'}>
                <button onClick={() => onClickHandler('Dollars')}>Dollars</button>
                <button onClick={() => onClickHandler('Rubles')}>Rubles</button>
                <button onClick={() => onClickHandler('All')}>All</button>
            </div>
        </>
    );
};
