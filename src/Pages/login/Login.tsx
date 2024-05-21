// Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import { TextField, Button, Container, Typography, Box, Grid,Paper, styled, Link, Divider, makeStyles, AppBar, Toolbar, Avatar, ButtonProps, createTheme } from '@mui/material';
import imagem1 from "../../shared/images/Carteira.png";
import imagem2 from "../../shared/images/logo-aurum.png";
import "./Login.css";
import { yellow } from '@mui/material/colors';

interface Props {}

const Login = (props: Props) => {
  const { login } = useAuth();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Fake credentials
    const fakeUsername = 'user';
    const fakePassword = 'password';

    if (username === fakeUsername && password === fakePassword) {
      login();
      navigate('/home');
      // Redirect to home or another authenticated route
    }else if (!username || !password) {
      setError("Preencha todos os campos");
      return false;
    }else {
      setError('Invalid username or password');
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    logo: {
      maxWidth: 40,
      marginRight: '10px'
    }
  }));
  const theme = createTheme();
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    '&:hover': {
      backgroundColor: yellow[700],
    },
  }));


  return (
  <Container>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={16}>
        <Grid item xs={12} md={12}>
          <AppBar sx={{bgcolor : "black"}}>
            <Toolbar>
              <Item>Gold Investing(mudar)</Item>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <img src={imagem1} className="logo-login" alt="logo" />
            <Typography variant="h4" gutterBottom>
              A melhor plataforma para acompanhar seus investimentos...
            </Typography>
            <Typography variant="h5" gutterBottom>
              Notícias, Cotações, Simulações, Rentabilidade, e muito mais...
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Senha"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
            />
            {error && (
              <Typography color="error" variant="body2" gutterBottom>
                {error}
              </Typography>
            )}
            <ColorButton
              fullWidth
              sx={{marginY:2}}
              onClick={handleLogin}
            >
              Entrar
            </ColorButton>
            <Link href="#" variant="body2" style={{ marginBottom: '16px' }}>
              Esqueceu a senha?
            </Link>
            <Link href="/registration" variant="body2">
              Não tem conta? Registrar agora
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
    
  );
};

export default Login;
