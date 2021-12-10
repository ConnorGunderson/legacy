import { Grid } from "semantic-ui-react";

export const ResContainer = (props:any) => {
    return (
        <Grid.Column textAlign={props.ta ? props.ta : "left" } verticalAlign={props.vAlign} style={{padding: "5px",textAlign: props.ta ? props.ta : 'left', ...props.style}} widescreen={5}  largeScreen={5} computer={5}  tablet={5} mobile={16} >
            {props.children}
        </Grid.Column>
    )
}