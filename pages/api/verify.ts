import { ZkConnect, ZkConnectServerConfig, DataRequest } from '@sismo-core/zk-connect-server';
import axios, { Axios } from 'axios';

const zkConnectConfig: ZkConnectServerConfig = {
  appId: '0x95dd8a09402e738d35f9dd98cf700ddb',
  devMode: {
    enabled: true,
  }
};
const zkConnect = ZkConnect(zkConnectConfig);

export default async function handler(req: Request, res: any) {
  const { vaultId } = await zkConnect.verify(
    req.body
  );

  console.log({vaultId});

  const response = await axios.post('http://localhost:8080/api/login', {
    vaultId
  });

  console.log('backend', response.data);

  res.status(200).json(response.data);
}

