import React, { useState } from 'react';
import './App.css';
import { useAppSelector as useSelector, useAppDispatch as useDispatch} from './hooks'
import { increment, decrement, incrementByAmount } from './redux/HogeCounterSlice'
import { increment as increment2, decrement as decrement2, incrementByAmount as incrementByAmount2 } from './redux/FugaCounterSlice'

/*
    Presentationalコンポーネント
*/
const IncrementButtonPresentational = ({ onClick }: { onClick: any }) => {
    const style = {
        width: '50px',
        borderRadius: '10px',
        backgroundColor: 'green',
    }
    return <button style={style} onClick={onClick}>+</button>
}
const DecrementButtonPresentational = ({ onClick }: { onClick: any }) => {
    const style = {
        width: '50px',
        borderRadius: '10px',
        backgroundColor: 'red',
    }
    return <button style={style} onClick={onClick}>-</button>
}

/*
    Hoge関連コンポーネント
*/
const HogeIncrementButton = () => {
    const dispatch = useDispatch()
    return <IncrementButtonPresentational onClick={() => dispatch(increment())} />
}
const HogeDecrementButton = () => {
    const dispatch = useDispatch()
    return <DecrementButtonPresentational onClick={() => dispatch(decrement())} />
}
const HogeAdd = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<number>(10);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const _value = Number(e.target.value)
        isNaN(_value) ? setValue(0) : setValue(_value)
    }
    return (
        <div style={{ padding: '5px', backgroundColor: '#FCBCA3' }}>
            <input type="text" value={value} onChange={onChange} />
            <IncrementButtonPresentational onClick={() => dispatch(incrementByAmount(value))} />
        </div>
    )
}
const Hoge = () => {
    const count = useSelector((state) => state.hoge.value)

    return (
        <div style={{
            backgroundColor: '#F78DB2',
            display: 'inline-block',
            margin: '10px',
            padding: '5px',
        }}>
            <h2>count: {count}</h2>
            <div>
                <HogeIncrementButton />
                <HogeDecrementButton />
            </div>
            <HogeAdd />
        </div>
    )
}

/*
    Hoge関連コンポーネント
*/
const FugaIncrementButton = () => {
    const dispatch = useDispatch()
    return <IncrementButtonPresentational onClick={() => dispatch(increment2())} />
}

const FugaDecrementButton = () => {
    const dispatch = useDispatch()
    return <DecrementButtonPresentational onClick={() => dispatch(decrement2())} />
}

const FugaAdd = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<number>(999);
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const _value = Number(e.target.value)
        isNaN(_value) ? setValue(0) : setValue(_value)
    }
    return (
        <div style={{ padding: '5px', backgroundColor: '#CBECFB' }}>
            <input type="text" value={value} onChange={onChange} />
            <IncrementButtonPresentational onClick={() => dispatch(incrementByAmount2(value))} />
        </div>
    )
}
const Fuga = () => {
    const count = useSelector((state) => state.fuga.value)

    return (
        <div style={{
            backgroundColor: '#55FFBB',
            display: 'inline-block',
            margin: '10px',
            padding: '5px',
        }}>
            <h2>count: {count}</h2>

            <div>
                <FugaIncrementButton />
                <FugaDecrementButton />
            </div>

            <FugaAdd />
        </div>
    )
}

function App() {
    const hogeCount = useSelector((state) => state.hoge.value)
    const fugaCount = useSelector((state) => state.fuga.value)
    
    return (
        <div className="App" style={{ margin: '10px', backgroundColor: '#E3E3E3' }}>
            <h1>hogeCount: {hogeCount}</h1>
            <h1>fugaCount: {fugaCount}</h1>
            <div>
                <Hoge />
                <Fuga />
            </div>
        </div>
    );
}

export default App;