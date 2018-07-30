import Grid from '@material-ui/core/Grid';
import Base from './Base';

export default (props) => (
  <Base>
    <Grid
      style={{'minHeight': '100vh'}}
      container
      alignItems='center'
      justify='center'
      direction='column'
      spacing={24}
    >
      <Grid item xs={8} md={4}>
        {props.children}
      </Grid>
    </Grid>
  </Base>
);