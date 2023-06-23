import { UserInterface } from 'interfaces/user';
import { MarketplaceInterface } from 'interfaces/marketplace';
import { GetQueryInterface } from 'interfaces';

export interface DomainInterface {
  id?: string;
  name: string;
  price: number;
  status: string;
  seller_id?: string;
  buyer_id?: string;
  marketplace_id?: string;
  created_at?: any;
  updated_at?: any;

  user_domain_seller_idTouser?: UserInterface;
  user_domain_buyer_idTouser?: UserInterface;
  marketplace?: MarketplaceInterface;
  _count?: {};
}

export interface DomainGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  seller_id?: string;
  buyer_id?: string;
  marketplace_id?: string;
}
