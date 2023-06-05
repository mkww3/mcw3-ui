import { ZkConnectClientConfig, ZkConnect, ZkConnectClient, ZkConnectResponse } from '@sismo-core/zk-connect-client';
import axios, { Axios } from 'axios';

export class ZkConnectService {
  zkConnect: ZkConnectClient;

  constructor() {
    const zkConnectConfig: ZkConnectClientConfig = {
      appId: '0x95dd8a09402e738d35f9dd98cf700ddb',
      devMode: {
        enabled: true
      }
      // dataRequest: {
      //   groupId: '0x3862151ae3e1a8aadd79ee38846f9ada' 
      // }
    };

    this.zkConnect = ZkConnect(zkConnectConfig);
  }

  async verify(data: (ZkConnectResponse | null) | undefined): Promise<any> {
    const response = await axios.post('/api/verify', data);

    return response.data;
  }
}
