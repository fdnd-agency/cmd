import * as dotenv from 'dotenv';
dotenv.config();

import { GraphQLClient } from 'graphql-request';
import { getSdkWithHooks } from './generated/sdk';

const gqlClient = new GraphQLClient(process.env.HYGRAPH_URL as string);

export const kitClient = getSdkWithHooks(gqlClient);
