import React from 'react';

export type NewComponentType = {
    currentMoney: Array<currentMoneyType>
    onClickHandler: (nameButton:string)=>void

}



type onClickHandlerType = {
    setFilter: (nameButton:string) => void
}

type currentMoneyType = {
    banknots: string
    value: number
    number: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((moneyArray, index) => {
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
