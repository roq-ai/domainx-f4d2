import { DomainInterface } from 'interfaces/domain';
import { SupportRequestInterface } from 'interfaces/support-request';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MarketplaceInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  domain?: DomainInterface[];
  support_request?: SupportRequestInterface[];
  user?: UserInterface;
  _count?: {
    domain?: number;
    support_request?: number;
  };
}

export interface MarketplaceGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
