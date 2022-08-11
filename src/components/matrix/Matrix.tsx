import React  from "react";

interface Iprops {
    matrix: number[][];
    handleChange: (value:number, id: number, idx: number) => void;
}

export const Matrix = ({ matrix, handleChange }:Iprops) => {
    const totalResult = () => {
        let total = 0;
        matrix.forEach((items:number[]) => {
            const sumOfArray =
                items.reduce((acc: number, value: number) => {
                    return acc + Number(value)
                })
            total+=sumOfArray;
        });
        return total;
    }

    return (
        <div className='matrix'>
            {!!matrix.length ? matrix.map((items: number[], idx:number) => (
                <div className='inputContainer' key={`${idx}`}>
                    <div className='inputWrapper'>
                        {items && items.map((item, index) => (
                            <input
                                className="cell"
                                type="number"
                                key={`${idx}${index}`}
                                onChange={(e) => handleChange(+e.target.value, idx, index)}
                                value={item}
                                onFocus={(e) => e.target.select()}
                            />
                        ))}
                    </div>
                    <div className='resultRowContainer'>
                        <p className='resultRow'>{items.reduce((acc: number, value: number) => {
                            return acc + Number(value)
                        })}</p>
                        {idx === matrix.length - 1 && <p className="totalResult">{totalResult()}</p>}
                    </div>
                </div>
            )) : <p>No result</p>}
        </div>
    )
}
