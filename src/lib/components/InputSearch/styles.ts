import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  serchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: theme.palette.background.paper,
    paddingBottom: theme.spacing(0),
    marginBottom: theme.spacing(1),
    position: 'sticky',
    top: 62,
    zIndex: theme.zIndex.appBar,
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      top: 52,
    },
  },
  search: {
    margin: 0,
    minWidth: 250,
    marginBottom: 8,
    marginTop: 8,
    [theme.breakpoints.down('sm')]: {
      flex: 1,
      minWidth: 'auto',
    },
  },
}));
