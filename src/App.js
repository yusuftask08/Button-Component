import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button';

function App() {

  const handleClickXlarge = () => {
    alert('xlarge butona tıklandı')
  }

  const onMouseEnterXlarge = () => {
    alert('xlarge butonun üzerine geldi')
  }

  const onMouseLeaveXlarge = () => {
    alert('xlarge butonun üzerinden ayrıldı')
  }

  const handleClickLarge = () => {
    alert('large butona tıklandı')
  }

  const handleClickMedium = () => {
    alert('medium butona tıklandı')
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Software Adventures - Button Component</code>
        </p>
        <Button size={'small'} disabled={true} innerText={'Disabled'} />
        <Button size={'medium'} color={'primary'} innerText={'Medium'} onClick={handleClickMedium} />
        <Button size={'large'} color={'success'} innerText={'Large'} onClick={handleClickLarge} />
        <Button size={'xLarge'} color={'danger'} innerText={'xLarge'} onClick={handleClickXlarge} onMouseEnter={onMouseEnterXlarge} onMouseLeave={onMouseLeaveXlarge} />
      </div>
    </div>
  );
}

export default App;
