import { Container, Form } from 'semantic-ui-react'


export function SettingsApp(props) {
    return (
        <Container id={props.id}>
            <h1 id='settingsHeader'>Global Application Settings</h1>
            <Form size='large'>
                <Form.Group unstackable widths={1}>
                    <Form.Input label='Injection Molding Rate' required />
                    <Form.Input label='Estimate Cost Multiplier' required />
                </Form.Group>
                <Form.Group unstackable widths={1}>
                    <Form.Input label='Injection Molding Rate' required />
                    <Form.Input label='Estimate Cost Multiplier' required />
                </Form.Group>
                <Form.Group unstackable widths={1}>
                    <Form.Input label='Injection Molding Rate' required />
                    <Form.Input label='Estimate Cost Multiplier' required />
                </Form.Group>
            </Form>
        </Container>
    )
}