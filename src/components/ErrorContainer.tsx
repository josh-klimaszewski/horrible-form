import { Grid, makeStyles, Theme, Typography, Slide } from "@material-ui/core";
import { FC } from "react";
import { useHorribleErrors } from "../lib/useHorribleErrors";
import { green, red } from "@material-ui/core/colors";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme: Theme) => ({
  errorContainer: {
    paddingTop: theme.spacing(7),
  },
  dirtyError: {
    color: red[400],
    fontWeight: theme.typography.fontWeightBold,
  },
  cleanError: {
    color: green[400],
    fontWeight: theme.typography.fontWeightBold,
    opacity: 0.5,
  },
  icon: {
    paddingTop: theme.spacing(1.5),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const ErrorContainer: FC = () => {
  const { errorContainer, dirtyError, cleanError, icon } = useStyles();
  const metaErrors = useHorribleErrors();

  return (
    <Grid container={true} spacing={3} classes={{ root: errorContainer }}>
      {metaErrors.map(({ error, clean }, index) => (
        <Slide
          in={true}
          direction="left"
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <Grid item={true} key={index} xs={12}>
            <Typography
              variant="subtitle1"
              classes={{ root: clean ? cleanError : dirtyError }}
            >
              <span>
                {clean ? (
                  <CheckIcon className={icon} />
                ) : (
                  <CloseIcon className={icon} />
                )}
              </span>
              {error}
            </Typography>
          </Grid>
        </Slide>
      ))}
    </Grid>
  );
};

export default ErrorContainer;
