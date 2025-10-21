import Input from './components/Input'
import Button from './components/Button'

import {Container, Content, Row} from './styles';
import {useState} from 'react';

const App = () => {
  const [formula, setFormula] = useState('0');
  
  const handleAddNumber = (number) => {
    setFormula(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  const handleOnClear = () => {
    setFormula('0');
  }

  const handleSumNumber = () => {
    if(formula !== '0' && !isNaN(formula.slice(-1))){
      setFormula(formula + '+');
    }
  }

  const handleSubNumber = () => {
    if(formula !== '0' && !isNaN(formula.slice(-1))){
      setFormula(formula + '-');
    }
  }

  const handleMultNumber = () => {
    if(formula !== '0' && !isNaN(formula.slice(-1))){
      setFormula(formula + '*');
    }
  }

  const handleDivNumber = () => {
    if(formula !== '0' && !isNaN(formula.slice(-1))){
      setFormula(formula + '÷');
    }
  }

  const handleEquals = () => {
    
    var firstNum = 0;
    var currentNum = '';
    var operation = '+';

    for (const element of (formula + '=')){
      if (!isNaN(element)){
        currentNum = currentNum + element;
        continue;
      }
      switch (operation){
        case '+':
          firstNum = firstNum + Number(currentNum);
          operation = element;
          currentNum = '';
        break;
        case '-':
          firstNum = firstNum - Number(currentNum);
          operation = element;
          currentNum = '';
        break;
        case '*':
          firstNum = firstNum * Number(currentNum);
          operation = element;
          currentNum = '';
        break;
        case '÷':
          firstNum = parseInt(firstNum / Number(currentNum));
          operation = element;
          currentNum = '';
        break;
        default:
          firstNum = firstNum + Number(currentNum);
        break;
      }
    }

    setFormula(String(firstNum));
  }

  return (
    <Container>
      <Content>
        <Input value = {formula}/>
        <Row>
          <Button label="7" onclick={()=>handleAddNumber('7')}/>
          <Button label="8" onclick={()=>handleAddNumber('8')}/>
          <Button label="9" onclick={()=>handleAddNumber('9')}/>
          <Button label="*" onclick={()=>handleMultNumber()}/>
        </Row>
        <Row>
          <Button label="4" onclick={()=>handleAddNumber('4')}/>
          <Button label="5" onclick={()=>handleAddNumber('5')}/>
          <Button label="6" onclick={()=>handleAddNumber('6')}/>
          <Button label="-" onclick={()=>handleSubNumber()}/>
        </Row>
        <Row>
          <Button label="1" onclick={()=>handleAddNumber('1')}/>
          <Button label="2" onclick={()=>handleAddNumber('2')}/>
          <Button label="3" onclick={()=>handleAddNumber('3')}/>
          <Button label="+" onclick={()=>handleSumNumber()}/>
        </Row>
        <Row>
          <Button label="÷" onclick={()=>handleDivNumber()}/>
          <Button label="0" onclick={()=>handleAddNumber('0')}/>
          <Button label="C" onclick={()=>handleOnClear()}/>
          <Button label="=" onclick={()=>handleEquals()}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
