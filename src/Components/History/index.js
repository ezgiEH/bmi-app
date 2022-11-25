import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearHistory } from '../../Redux/CalculateSlice'
import { Wrapper, List, ListItem,  ClearButton} from './style'

function History() {

    const dispatch = useDispatch()
    const history = useSelector(state => state.calculate.history)

    const handleClear = (e) => {
        e.preventDefault()
        dispatch(clearHistory())
    }

    useEffect(() => {
        localStorage.getItem("bmi", JSON.stringify(history))
    }, [history])

    return (
        
            <Wrapper>
                <h2>History</h2>
                <List>
                    {history.map((item, index) => (
                        <ListItem key={index}>
                            {item}
                        </ListItem>
                    ))}
                </List>
                {history.length > 0 && (
                <ClearButton onClick={handleClear}>Clear History</ClearButton>)}   
            </Wrapper>     
    )
}

export default History