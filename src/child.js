import { directive } from "@babel/types"

function ChildComponent(props){
        const {name, age} = props;
    return (
    <div>
        <p>나는 자식이다</p>
        <p>이름은 {name}이고 나이는 {age}입니다!!...</p>
        <h1>안녕하세요!!</h1>
        
    </div>);
}

export default ChildComponent;