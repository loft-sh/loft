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
        'spaces/sleep-mode',
      ],
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
        'clusters/harbor',
      ],
    },
    {
      type: 'category',
      label: 'Users & Teams',
      items: [
        'auth/users',
        'auth/teams',
        'auth/oidc',
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
      type: 'link',
      label: '↗️ DevSpace',
      href: 'https://devspace.sh/cli/docs/introduction',
    },
  ],
};
