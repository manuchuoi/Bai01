function calculate(operation){
    const A = parseFloat(document.getElementById('inputA').value);
    const B = parseFloat(document.getElementById('inputB').value);
    if (isNaN(A) || isNaN(B)){
        document.getElementById('result').textContent = 'Please enter valid number';
        return;
    }
    let result;
        switch(operation){
            case 'sum':
                result=A+B;
                break;
            
            case 'subtract':
                result=A-B;
                break;
            
            case 'multiply':
                result=A*B;
                break;
            
            case 'divide':
                result=B!==0? A/B: 'Cannot divide by zero';
                break;
            
            default:
                result = 'Invalid operation'
        }
        document.getElementById('result').textContent = `Result: ${result}`;
}
function reset(){
    document.getElementById('inputA').value = '';
    document.getElementById('inputB').value = '';
    document.getElementById('result').textContent = '';
}