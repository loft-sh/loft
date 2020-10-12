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
      type: 'doc',
      id: 'quickstart',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/setup',
        'getting-started/clusters',
        'getting-started/apps',
        'getting-started/spaces',
        'getting-started/users-limits',
        'getting-started/templates',
        'getting-started/teams',
      ],
    },
    {
      type: 'category',
      label: 'Spaces',
      items: [
        'spaces/basics',
        'spaces/sharing',
        'spaces/networking',
        'spaces/isolation',
      ],
    },
    {
      type: 'doc',
      id: 'vclusters/basics',
    },
    {
      type: 'category',
      label: 'Clusters',
      items: [
        'clusters/basics',
        'clusters/accounts',
        'clusters/account-quotas',
        'clusters/templates',
        'clusters/apps',
        'clusters/monitoring',
        'clusters/harbor',
      ],
    },
    {
      type: 'doc',
      id: 'sleep-mode/basics',
    },
    {
      type: 'category',
      label: 'Users & Teams',
      items: [
        'auth/users',
        'auth/teams',
        'auth/accounttemplates',
        'auth/oidc',
        'auth/okta',
      ],
    },
    {
      type: 'category',
      label: 'Profile',
      items: [
        'profile/basics',
        'profile/access-keys',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'administration/ssl',
        'administration/upgrade',
        'administration/uninstall',
      ],
    },
    {
      type: 'doc',
      id: 'architecture/basics',
    },
    {
      type: 'doc',
      id: 'onboarding/basics',
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
