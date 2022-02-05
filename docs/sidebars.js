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
          label: '1. Install Loft',
          collapsible: false,
          items: [
            {
              type: 'doc',
              id: 'getting-started/install/cli',
            },
            {
              type: 'doc',
              id: 'getting-started/install/helm',
            },/*
            {
              type: 'category',
              label: 'via GitOps, ...',
              items: [
                'getting-started/install/kubectl',
                'getting-started/install/kustomize',
                'getting-started/install/terraform',
                'getting-started/install/argocd',
                'getting-started/install/flux',
              ],
            },*/
            {
              type: 'doc',
              id: 'getting-started/install/troubleshooting',
            },
          ],
        },
        {
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
        {
          type: 'doc',
          id: 'getting-started/domain',
        },
        {
          type: 'doc',
          id: 'getting-started/single-sign-on',
        },/*
        {
          type: 'doc',
          id: 'getting-started/next-steps',
        },*/
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
        },/*
        {
          type: 'category',
          label: 'Guides',
          collapsible: false,
          items: [
            {
              type: 'doc',
              id: 'spaces/guides/development',
            },
            {
              type: 'doc',
              id: 'spaces/guides/cicd',
            },
          ],
        },*/
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
        },/*
        {
          type: 'category',
          label: 'Guides',
          collapsible: false,
          items: [
            {
              type: 'doc',
              id: 'virtual-clusters/guides/local-cluster-alternative',
            },
            {
              type: 'doc',
              id: 'virtual-clusters/guides/cicd',
            },
          ],
        },*/
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
            },/*
            {
              type: 'doc',
              id: 'clusters/access/quotas',
            },*/
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
        'secrets/encryption',/*
        {
          type: 'category',
          label: 'Guides',
          collapsible: false,
          items: [
            'secrets/guides/devspace',
            'secrets/guides/pull-secrets',
          ],
        },*/
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
            'users/guides/admin',/*
            {
              type: 'category',
              label: 'Configure SSO',
              items: [
                'users/guides/sso/azure-ad',
                'users/guides/sso/ldap',
                'users/guides/sso/okta',
                'users/guides/sso/oidc',
                'users/guides/sso/saml',
                'users/guides/sso/github',
                'users/guides/sso/gitlab',
                'users/guides/sso/google',
                'users/guides/sso/microsoft',
              ],
            },*/
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Audit',
      items: [
        'auditing/overview',/*
        'auditing/activity-log',
        'auditing/task-log',
        'auditing/policy-violations',*/
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'admin/config',/*
        'admin/license',
        'admin/billing',*/
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
    },/*
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/overview',
        {
          type: 'category',
          label: 'Reference Architectures',
          collapsible: false,
          items: [
            'architecture/low-cost',
            'architecture/large-teams',
            'architecture/distributed-teams',
            'architecture/self-servicing-teams',
            'architecture/gitops-flows',
          ],
        },
      ],
    },*//*
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/onboarding',
        'guides/cicd',
      ],
    },*/
    {
      type: 'category',
      label: 'Integrations',
      items: [
        {
          type: 'category',
          label: 'CI/CD',
          items: [/*
            'integrations/cicd/terraform',*/
            'integrations/cicd/github',
            'integrations/cicd/gitlab',
          ],
        },/*
        {
          type: 'category',
          label: 'Policies',
          items: [
            'integrations/policies/jspolicy',
            'integrations/policies/opa',
            'integrations/policies/kyverno',
          ],
        },
        {
          type: 'category',
          label: 'Dev Tools',
          items: [
            'integrations/devtools/devspace',
            'integrations/devtools/skaffold',
            'integrations/devtools/tilt',
          ],
        },*/
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
