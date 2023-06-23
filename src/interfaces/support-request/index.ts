import { UserInterface } from 'interfaces/user';
import { MarketplaceInterface } from 'interfaces/marketplace';
import { GetQueryInterface } from 'interfaces';

export interface SupportRequestInterface {
  id?: string;
  title: string;
  description: string;
  status: string;
  user_id?: string;
  marketplace_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  marketplace?: MarketplaceInterface;
  _count?: {};
}

export interface SupportRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
  user_id?: string;
  marketplace_id?: string;
}
