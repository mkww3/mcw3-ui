export const crowdfundABI = [
  {
    'inputs': [
      {
        'internalType': 'string',
        'name': 'name',
        'type': 'string'
      },
      {
        'internalType': 'string',
        'name': 'description',
        'type': 'string'
      }
    ],
    'name': 'createFunding',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'fundings',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'listFundings',
    'outputs': [
      {
        'components': [
          {
            'internalType': 'address',
            'name': 'contractAddress',
            'type': 'address'
          },
          {
            'internalType': 'string',
            'name': 'name',
            'type': 'string'
          },
          {
            'internalType': 'string',
            'name': 'description',
            'type': 'string'
          },
          {
            'internalType': 'uint256',
            'name': 'totalCotributtion',
            'type': 'uint256'
          }
        ],
        'internalType': 'struct FundingData[]',
        'name': '',
        'type': 'tuple[]'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  }
];
