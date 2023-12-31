import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { marketplaceValidationSchema } from 'validationSchema/marketplaces';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getMarketplaces();
    case 'POST':
      return createMarketplace();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getMarketplaces() {
    const data = await prisma.marketplace
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'marketplace'));
    return res.status(200).json(data);
  }

  async function createMarketplace() {
    await marketplaceValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.domain?.length > 0) {
      const create_domain = body.domain;
      body.domain = {
        create: create_domain,
      };
    } else {
      delete body.domain;
    }
    if (body?.support_request?.length > 0) {
      const create_support_request = body.support_request;
      body.support_request = {
        create: create_support_request,
      };
    } else {
      delete body.support_request;
    }
    const data = await prisma.marketplace.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
