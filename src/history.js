import {useHistory} from 'react-router-dom';
function History() {
  const history = useHistory();
  console.log(useHistory(),"here");
    return <>
    <button onClick={history.goBack}>Backward</button>
    <button onClick={history.goForward}>Forward</button>
    </>
}
export default History;