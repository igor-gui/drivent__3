import app from '@/app';
import httpStatus from 'http-status';
import * as jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { createUser } from '../factories';

const server = supertest(app)

describe("/GET hotels", () => {
    
    it('should return status 401 when invalid token', async () => {
        const userWithoutSession = await createUser({});
        const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);
        const response = await server.get('hotels').set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(httpStatus.CREATED)
        console.log(response.status)

    });
});