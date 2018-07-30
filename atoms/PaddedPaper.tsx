import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3
    }
})

const PaddedPaper = ({children, classes}) => (
    <Paper className={classes.root}>
        {children}
    </Paper>
)

export default withStyles(styles)(PaddedPaper);