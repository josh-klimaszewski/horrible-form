import { Grid, makeStyles, Theme, Typography, Slide } from "@material-ui/core";
import { FC } from "react";
import { green, red } from "@material-ui/core/colors";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { MetaError } from "./types";

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

type Props = { metaErrors: MetaError[] };

const convertWhiteSpaceToTestId = (label: string): string =>
  label.replaceAll(" ", "-").toLowerCase();

const ErrorRenderer: FC<Props> = ({ metaErrors }) => {
  const { errorContainer, dirtyError, cleanError, icon } = useStyles();

  return (
    <Grid container={true} spacing={3} classes={{ root: errorContainer }}>
      {metaErrors.map(({ error, clean }, index) => {
        return (
          <Slide
            key={index}
            in={true}
            direction="left"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Grid item={true} xs={12}>
              <Typography
                variant="subtitle1"
                classes={{ root: clean ? cleanError : dirtyError }}
                data-testid={`${convertWhiteSpaceToTestId(error)}-meta-error`}
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
        );
      })}
    </Grid>
  );
};

export default ErrorRenderer;
