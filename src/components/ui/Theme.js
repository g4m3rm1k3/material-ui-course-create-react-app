import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#4169E1';
const arcOrange = '#EC5800';

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
  },
});
