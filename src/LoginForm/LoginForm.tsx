import { Box, Button, Stack, TextField } from '@mui/material';

function LoginForm() {
  // add LoadingButton in the future
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <Stack spacing={2}>
        <TextField id="login" required label="Login" variant="outlined" />
        <TextField id="password" required label="Password" variant="outlined" />
        <Button size="large" variant="contained">Log in</Button>
      </Stack>
    </Box>
  )
}

export default LoginForm;
