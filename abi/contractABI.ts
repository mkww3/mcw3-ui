export const ABI = [
  {
    'inputs': [],
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'moderatorAccount',
        'type': 'address'
      }
    ],
    'name': 'addModerator',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'string',
        'name': 'id',
        'type': 'string'
      }
    ],
    'name': 'createProject',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'listProjects',
    'outputs': [
      {
        'components': [
          {
            'internalType': 'string',
            'name': 'id',
            'type': 'string'
          },
          {
            'internalType': 'enum ProjectGate.ProjectStatus',
            'name': 'status',
            'type': 'uint8'
          }
        ],
        'internalType': 'struct ProjectGate.Project[]',
        'name': '',
        'type': 'tuple[]'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'moderator',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'view',
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
    'name': 'projectId',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'projectSize',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      }
    ],
    'name': 'projects',
    'outputs': [
      {
        'internalType': 'string',
        'name': 'id',
        'type': 'string'
      },
      {
        'internalType': 'enum ProjectGate.ProjectStatus',
        'name': 'status',
        'type': 'uint8'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'string',
        'name': 'id',
        'type': 'string'
      },
      {
        'internalType': 'enum ProjectGate.ProjectStatus',
        'name': 'status',
        'type': 'uint8'
      }
    ],
    'name': 'updateStatus',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }
];
