/**
 * @module @minions-stakeholders/sdk/schemas
 * Custom MinionType schemas for Minions Stakeholders.
 */

import type { MinionType } from 'minions-sdk';

export const stakeholderType: MinionType = {
  id: 'stakeholders-stakeholder',
  name: 'Stakeholder',
  slug: 'stakeholder',
  description: 'A project stakeholder with their role and preferences.',
  icon: '🤝',
  schema: [
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'contactId', type: 'string', label: 'contactId' },
    { name: 'name', type: 'string', label: 'name' },
    { name: 'role', type: 'select', label: 'role' },
    { name: 'influence', type: 'select', label: 'influence' },
    { name: 'interest', type: 'select', label: 'interest' },
    { name: 'communicationPreference', type: 'select', label: 'communicationPreference' },
    { name: 'notes', type: 'string', label: 'notes' },
  ],
};

export const stakeholderupdateType: MinionType = {
  id: 'stakeholders-stakeholder-update',
  name: 'Stakeholder update',
  slug: 'stakeholder-update',
  description: 'A communication sent to a stakeholder.',
  icon: '📨',
  schema: [
    { name: 'stakeholderId', type: 'string', label: 'stakeholderId' },
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'type', type: 'select', label: 'type' },
    { name: 'summary', type: 'string', label: 'summary' },
    { name: 'sentAt', type: 'string', label: 'sentAt' },
    { name: 'channel', type: 'select', label: 'channel' },
  ],
};

export const customTypes: MinionType[] = [
  stakeholderType,
  stakeholderupdateType,
];

