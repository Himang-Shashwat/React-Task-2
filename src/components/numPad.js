import { Backspace } from "./icons";
function Numpad({isSun, onButtonClick }){
    const keyPadClass = isSun ? 'keyPad-light' : 'keyPad-dark';
    return (
        <div className={`text-center rounded-bottom-5 row w-100 ${keyPadClass}`}>
            <div className="col d-flex flex-column justify-content-between mt-4">
                <p onClick={() => onButtonClick('7')}>7</p>
                <p onClick={() => onButtonClick('4')}>4</p>
                <p onClick={() => onButtonClick('1')}>1</p>
                <p onClick={() => onButtonClick('0')}>0</p>
            </div>
            <div className="col d-flex flex-column justify-content-between mt-4">
                <p onClick={() => onButtonClick('8')}>8</p>
                <p onClick={() => onButtonClick('5')}>5</p>
                <p onClick={() => onButtonClick('2')}>2</p>
                <p onClick={() => onButtonClick('.')}>.</p>
            </div>
            <div className="col d-flex flex-column justify-content-between mt-4">
                <p onClick={() => onButtonClick('9')}>9</p>
                <p onClick={() => onButtonClick('6')}>6</p>
                <p onClick={() => onButtonClick('3')}>3</p>
                <p onClick={() => onButtonClick('calculate')}>=</p>
            </div>
            <div className="col d-flex flex-column justify-content-between mt-3">
                <p onClick={() => onButtonClick('backspace')}><Backspace toggle={isSun}/></p>
                <p onClick={() => onButtonClick('/')}>÷</p>
                <p onClick={() => onButtonClick('*')}>x</p>
                <p onClick={() => onButtonClick('-')}>-</p>
                <p onClick={() => onButtonClick('+')}>+</p>
            </div>
        </div>
    )
}
export default Numpad