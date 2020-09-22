/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  adminSidebar: [
    {
      type: 'doc',
      id: 'introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'quickstart',
        },
        {
          type: 'category',
          label: 'Full Setup Guide',
          items: [
            'getting-started/setup',
            'getting-started/clusters',
            'getting-started/auth',
            'getting-started/cluster-accounts',
            'getting-started/limits-isolation',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Self-Service',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'self-service/namespaces',
        },
        {
          type: 'doc',
          id: 'self-service/virtual-clusters',
        },
        {
          type: 'doc',
          id: 'self-service/sleep-mode',
        },
      ],
    },
    {
      type: 'category',
      label: 'Multi-Tenancy',
      collapsed: false,
      items: [
        'multi-tenancy/clusters',
        'multi-tenancy/accounts',
        'multi-tenancy/account-quotas',
        'multi-tenancy/templates',
        'multi-tenancy/apps',
      ],
    },
    {
      type: 'category',
      label: 'Users & Authentication',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'User Management',
          items: [
            'auth/users',
            'auth/teams',
            'auth/profiles',
            'auth/access-keys',
          ],
        },
        {
          type: 'category',
          label: 'Authentication + SSO',
          items: [
            'auth/password',
            'auth/sso/github',
            'auth/sso/gitlab',
            'auth/sso/ldap',
            'auth/sso/okta',
            'auth/sso/saml',
            'auth/sso/others',
          ],
        },
        'auth/account-templates',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/onboarding',
        'guides/ci-cd-pipelines',
        'guides/oidc',
        'guides/administration/upgrade',
        'guides/administration/uninstall',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: false,
      items: [
        'integrations/harbor',
        'integrations/dex',
      ],
    },
    {
      type: 'doc',
      id: 'architecture',
    },
    {
      type: 'category',
      label: 'CLI Reference',
      items: [
        'commands/loft_connect_vcluster',
        'commands/loft_create_space',
        'commands/loft_create_vcluster',
        'commands/loft_delete_space',
        'commands/loft_delete_vcluster',
        'commands/loft_generate_admin-kube-config',
        'commands/loft_get_user',
        'commands/loft_list_clusters',
        'commands/loft_list_spaces',
        'commands/loft_list_teams',
        'commands/loft_list_vclusters',
        'commands/loft_login',
        'commands/loft_sleep',
        'commands/loft_token',
        'commands/loft_upgrade',
        'commands/loft_use_cluster',
        'commands/loft_use_space',
        'commands/loft_use_vcluster',
        'commands/loft_wakeup',
      ],
    },
    {
      type: 'link',
      label: '↗️ DevSpace',
      href: 'https://devspace.sh/cli/docs/introduction',
    },
  ],
};
