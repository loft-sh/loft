/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  adminSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'category',
          label: '1. Installation',
          collapsible: false,
          items: [
            {
              type: 'doc',
              id: 'getting-started/install/cli',
            },
            {
              type: 'doc',
              id: 'getting-started/domain',
            },
            {
              type: 'doc',
              id: 'getting-started/single-sign-on',
            },
            { /* Troubleshooting */
              type: 'doc',
              id: 'getting-started/install/troubleshooting',
              className: 'troubleshooting',
            },
          ],
        },
        { /* 2. Configure Cluster Access */
          /* Because this is a doc, the title has to be defined in the .mdx */
          type: 'doc',
          id: 'getting-started/cluster-access',
        },
        {
          type: 'category',
          label: '3. Explore Loft',
          collapsible: false,
          items: [
            'getting-started/explore/spaces',
            'getting-started/explore/virtual-clusters',
            'getting-started/explore/sleep-mode',
            'getting-started/explore/restricting-access',
            'getting-started/explore/apps',
            'getting-started/explore/secrets',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Spaces',
      items: [
        {
          type: 'doc',
          id: 'spaces/spaces',
        },
        {
          type: 'doc',
          id: 'spaces/templates',
        },
        {
          type: 'doc',
          id: 'spaces/sleep-mode',
        },
      ],
    },
    {
      type: 'category',
      label: 'Virtual Clusters',
      items: [
        {
          type: 'doc',
          id: 'virtual-clusters/vclusters',
        },
        {
          type: 'doc',
          id: 'virtual-clusters/templates',
        },
        {
          type: 'doc',
          id: 'virtual-clusters/sleep-mode',
        },
      ],
    },
    {
      type: 'category',
      label: 'Clusters',
      items: [
        {
          type: 'doc',
          id: 'clusters/clusters',
        },
        {
          type: 'category',
          label: 'Cluster Access',
          items: [
            {
              type: 'doc',
              id: 'clusters/access/cluster-access',
            },
            {
              type: 'doc',
              id: 'clusters/access/cluster-roles',
            },
            {
              type: 'doc',
              id: 'clusters/access/space-constraints',
            },
          ],
        },
        {
          type: 'category',
          label: 'Guides',
          collapsible: false,
          items: [
            {
              type: 'doc',
              id: 'clusters/guides/policies',
            },
            {
              type: 'doc',
              id: 'clusters/guides/monitoring',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Apps',
      items: [
        'apps/apps',
      ],
    },
    {
      type: 'category',
      label: 'Secrets',
      items: [
        'secrets/secrets',
        'secrets/encryption',
      ],
    },
    {
      type: 'category',
      label: 'Users + Teams',
      items: [
        'users/users',
        'users/teams',
        'users/management-roles',
        'users/impersonation',
        {
          type: 'category',
          label: 'Guides',
          collapsible: false,
          items: [
            'users/guides/admin',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Audit',
      items: [
        'auditing/overview',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'admin/config',
        {
          type: 'category',
          label: 'Guides',
          collapsible: false,
          items: [
            'admin/guides/high-availability',
            'admin/guides/direct-cluster-endpoint',
            'admin/guides/metrics',
            'admin/guides/oidc-provider',
            'admin/guides/uninstall',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        {
          type: 'category',
          label: 'CI/CD',
          items: [
            'integrations/cicd/github',
            'integrations/cicd/gitlab',
          ],
        },
        {
          type: 'category',
          label: 'Registries',
          items: [
            'integrations/registries/harbor',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/access-keys',
        {
          type: 'category',
          label: 'API Endpoints',
          collapsible: false,
          items: [
            'api/overview',
            'api/endpoints/management',
            'api/endpoints/cluster',
            'api/endpoints/virtual-cluster',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'CLI',
      items: [
        {
          type: 'autogenerated',
          dirName: 'cli',
        }
      ],
    },
    {
      type: 'link',
      label: 'DevSpace',
      href: 'https://devspace.sh/',
    },
    {
      type: 'link',
      label: 'jsPolicy',
      href: 'https://jspolicy.com/',
    },
  ],
};
