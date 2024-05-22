import React, {useState} from 'react';
import './App.css';

type FilterType = 'All' | 'Dollars' | 'Rubles'

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('All')

    // let currentMoney = money.filter(filteredMoney=>filteredMoney.banknots==='Dollars')
    let currentMoney = money

    if (filter === 'Dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'Rubles') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
    }

    const onClickHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
       <div>

       </div>
    );
}

export default App;
