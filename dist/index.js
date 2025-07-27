import express, { json } from 'express';
import { authRouter } from './auth/infrastructure/http/routes/authRouter.js';
const app = express();
app.use(json());
app.use('/auth', authRouter);
app.listen(3000, () => {
    console.log('listening...');
});
