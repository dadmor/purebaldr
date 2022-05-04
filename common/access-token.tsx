import * as jwt from 'jsonwebtoken';

type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  dancer_id: string;
  academy_id: string;
};

export type Role = 'dancer' | 'administrator' | 'academy';

const secret = process.env.JWT_SECRET;

export const createAccessToken = (user: User, role: Role) => {
    const tokenContents = {
        sub: user.id.toString(),
        iat: Date.now() / 1000,
        iss: 'http://localhost:3000',
        'https://hasura.io/jwt/claims': {
            'x-hasura-allowed-roles': ['anonymous', role],
            'x-hasura-default-role': role,
            'x-hasura-role': role,
            'x-hasura-user-id': user.id.toString(),
            ...(user.dancer_id ? {'x-hasura-dancer-id': user.dancer_id} : {}),
            ...(user.academy_id ? {'x-hasura-academy-id': user.academy_id} : {})

        },
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60)
    }

    const accessToken = jwt.sign(tokenContents, secret || 'what');

    return accessToken;
};
