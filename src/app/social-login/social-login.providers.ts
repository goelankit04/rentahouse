export interface IProvider {
  clientId: string;
  apiVersion?: string;
}

export interface IProviders {
  [ provider: string ]: IProvider;
}
