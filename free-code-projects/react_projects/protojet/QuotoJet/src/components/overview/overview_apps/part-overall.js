import { Form, Divider, Accordion, Segment} from 'semantic-ui-react'
import { Baseline } from '../../globals/overview-baseline'
import { matOptions, dimensionPanels, mudOptions, surfaceOptions } from '../../globals/globalVars'

export const PartOverall = (props) => {
    return (
        <section>
            <Baseline title='Part Overall (in)'>
                <Form.Group>
                    <Form.Select
                        fluid
                        label='Tool Material'
                        placeholder='Select Material'
                        options={matOptions}
                    />
                </Form.Group>
                <Accordion as={Form.Field} panels={dimensionPanels} />
                <Form.Group grouped >
                    <Form.Select
                        fluid
                        label='Mud Base'
                        placeholder='Select Material'
                        options={mudOptions}
                    />
                    <Segment basic>
                        <Divider fitted horizontal>Inches <sup>3</sup></Divider>
                        <Segment raised>
                            0  
                        </Segment>
                    </Segment>
                </Form.Group>
                <Form.Field 
                    type='number'
                    label='# of Faces'
                    control='input'
                />
            </Baseline>
            <Baseline title='Surface Finish'>
                <Form.Select
                    fluid
                    label='A-Side Finish'
                    placeholder='Select Material'
                    options={surfaceOptions}
                />
                <Form.Select
                    fluid
                    label='B-Side Finish'
                    placeholder='Select Material'
                    options={surfaceOptions}
                />
                <Segment basic>
                    <Divider fitted horizontal>Subtotal</Divider>
                    <Segment raised>
                        0
                    </Segment>
                </Segment>
            </Baseline>
        </section>
    )
}