import React from 'react';

export type NewComponentType = {
    onClickHandler: (nameButton: string) => void
    currentMoney: Array<CurrentMoneyType>
}

export type CurrentMoneyType = {
    banknots: string
    value: number
    number: string
}

export const NewComponent = (props: NewComponentType) => {
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
                <button onClick={() => props.onClickHandler('Dollars')}>Dollars</button>
                <button onClick={() => props.onClickHandler('Rubles')}>Rubles</button>
                <button onClick={() => props.onClickHandler('All')}>All</button>
            </div>
        </>
    );
};
