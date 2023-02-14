declare module 'coinmarketcap-api' {
    export default class CoinMarketCap {
      constructor(apiKey: string, options?: Options);
      getTickers(args: TickersArgs): Promise<TickersResponse>;
      getGlobal(args?: GlobalArgs): Promise<GlobalResponse>;
      getMetadata(args: MetadataArgs): Promise<MetadataResponse>;
    }
  
    interface Options {
      version?: string;
      fetcher?: (...args: any[]) => any;
      config?: any;
    }
  
    interface TickersArgs {
      id?: number[] | number | string;
      symbol?: string[] | string;
      convert?: string;
      limit?: number;
      start?: number;
      sort?: 'id' | 'name' | 'symbol' | 'rank' | 'price' | 'market_cap' | 'volume_24h' | 'percent_change_1h' | 'percent_change_24h' | 'percent_change_7d';
    }
  
    interface TickersResponse {
      data: Ticker[];
      metadata: Metadata;
    }
  
    interface Ticker {
      id: number;
      name: string;
      symbol: string;
      rank: number;
      quote: {
        [key: string]: {
          price: number;
          volume_24h: number;
          market_cap: number;
          percent_change_1h: number;
          percent_change_24h: number;
          percent_change_7d: number;
        }
      };
    }
  
    interface GlobalArgs {
      convert?: string;
    }
  
    interface GlobalResponse {
      data: GlobalData;
      metadata: Metadata;
    }
  
    interface GlobalData {
        active_cryptocurrencies: number;
        active_market_pairs: number;
        active_exchanges: number;
        bitcoin_percentage_of_market_cap: number;
        quotes: {
          [key: string]: {
            total_market_cap: number;
            total_volume_24h: number;
            last_updated: number;
          }
        };
      }
      interface Metadata {
        timestamp: number;
        error?: any;
      }
      
      interface MetadataArgs {
        id?: number[] | number | string;
        symbol?: string[] | string;
      }
      
      interface MetadataResponse {
        data: {
          [key: string]: {
            id: number;
            name: string;
            symbol: string;
            website_slug: string;
            rank: number;
            circulating_supply: number;
            total_supply: number;
            max_supply: number;
            quotes: {
              [key: string]: {
                price: number;
                volume_24h: number;
                market_cap: number;
                percent_change_1h: number;
                percent_change_24h: number;
                percent_change_7d: number;
              }
            };
            last_updated: number;
          }
        };
        metadata: Metadata;
      }
    }