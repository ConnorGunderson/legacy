import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Button, Icon } from 'semantic-ui-react'
import '../../app/css/quotebox.css'
import { changeColor, makeRGB } from '../../features/Globals'
import { updateQuote } from '../../features/QuoteBoxSlice';
import Quotes from 'quotesy'


function QuoteBox(){
    const { quote, color } = useSelector(state => {
        return {quote: state.quote, color: state.color}
    }) 
    const dispatch = useDispatch()
    const newColor = makeRGB()
    return (
        <Container as="section" id={"quote-div"} fluid>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column width={16} id="quote-content">
                        <h1><Icon name='quote right'/>{quote.text}</h1>
                        <p style={{float:'right'}}>{quote.author}</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        {[1, 2]
                            .map(i => <Button 
                                as="a" 
                                style={{backgroundColor: color, color: 'white'}} 
                                key={i}
                                target={'_blank'}
                                href={
                                    i === 1
                                    ? 'https://twitter.com'
                                    : 'https://facebook.com'
                                }
                                content={i === 1 
                                    ? <Icon fitted size="large" name="twitter"/> 
                                    : <Icon fitted size="large" name="facebook"/>
                                    }/>
                        )}
                    </Grid.Column>
                    <Grid.Column>
                        <Button 
                            onClick={() => {
                                    return (
                                        dispatch(changeColor(newColor)),
                                        dispatch(updateQuote(Quotes.random()))
                                    )
                                }
                            } 
                            style={{backgroundColor: color, color: 'white'}} 
                            fitted 
                            size="large" 
                            content="Next Quote"
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default QuoteBox;