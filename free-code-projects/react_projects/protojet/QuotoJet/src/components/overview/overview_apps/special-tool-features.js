import { Checkbox, Form, Segment } from 'semantic-ui-react'
import { Baseline } from '../../globals/overview-baseline'
import { useState } from 'react'
import { fromPairs } from 'lodash';

export const SpecTools = () => {
    const [value, setValue] = useState('');
    return (
        <section>
            <Baseline title='Special Tool Features'>
                <Form.Group grouped>
                    <Checkbox 
                        label='Heated Tool?'
                        value={'heated'}
                        onClick={value !== 'heated' ? () => setValue('heated') : setValue('')}
                    />
                    <Form.Input 
                        label='Heated Tool Total'
                    />
                    <Form.Input
                        label='Misc. Costs'
                    />
                    <Form.TextArea 
                        label="Description"
                    />
                </Form.Group>
            </Baseline>
        </section>
    )
}