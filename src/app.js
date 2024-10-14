import express from 'express';
import maintenanceRouter from './routers/maintenanceRouter.js';
import vehicleRouter from './routers/vehicleRouter.js';
import workshopRouter from './routers/workshopRouter.js';
import db from './config/db.js';

db();

const app = express();
app.use(express.json());

app.use('/maintenances', maintenanceRouter);
app.use('/vehicles', vehicleRouter);
app.use('/workshops', workshopRouter);

app.listen(4000, () => console.log('Server is running on port 4000'));

