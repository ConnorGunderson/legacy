import { useDispatch, useSelector } from 'react-redux';
import { Segment, Label} from 'semantic-ui-react';
import { updatePreviewer } from '../../features/editorReducer';
const _ = require('lodash')

export const WindowComp = (props) => {
    const inputText = useSelector(state => state.editor)
    const dispatch = useDispatch()
    return (
        <Segment >
            <Label attached='top' content={_.capitalize(props.id)}/>
            {
                props.id === 'editor'
                    ?   <textarea 
                            id={props.id} 
                            onChange={(e) => {
                                    dispatch(updatePreviewer(e.target.value))
                                    }
                                }
                            placeholder='Insert HTML markup'
                        />
                    :   <div                                                            
                            dangerouslySetInnerHTML={{__html: inputText}}
                            id={props.id}


                        />
            }
            
        </Segment>
    )
}