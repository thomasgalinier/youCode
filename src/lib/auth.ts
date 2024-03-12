import {GetServerSidePropsContext, NextApiRequest, NextApiResponse} from 'next';
import {getServerSession} from 'next-auth';
import {authOptions} from '../../pages/api/auth/[...nextauth]';

type ParametersGetServerSession =
    | []
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse];

export const getAuthSession = async (...parameters: ParametersGetServerSession) => {
    return await getServerSession(...parameters, authOptions);
};