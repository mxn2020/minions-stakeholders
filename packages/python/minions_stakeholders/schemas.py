"""
Minions Stakeholders SDK — Type Schemas
Custom MinionType schemas for Minions Stakeholders.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

stakeholder_type = MinionType(
    id="stakeholders-stakeholder",
    name="Stakeholder",
    slug="stakeholder",
    description="A project stakeholder with their role and preferences.",
    icon="🤝",
    schema=[
        FieldDefinition(name="projectId", type="string", label="projectId"),
        FieldDefinition(name="contactId", type="string", label="contactId"),
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="role", type="select", label="role"),
        FieldDefinition(name="influence", type="select", label="influence"),
        FieldDefinition(name="interest", type="select", label="interest"),
        FieldDefinition(name="communicationPreference", type="select", label="communicationPreference"),
        FieldDefinition(name="notes", type="string", label="notes"),
    ],
)

stakeholder_update_type = MinionType(
    id="stakeholders-stakeholder-update",
    name="Stakeholder update",
    slug="stakeholder-update",
    description="A communication sent to a stakeholder.",
    icon="📨",
    schema=[
        FieldDefinition(name="stakeholderId", type="string", label="stakeholderId"),
        FieldDefinition(name="projectId", type="string", label="projectId"),
        FieldDefinition(name="type", type="select", label="type"),
        FieldDefinition(name="summary", type="string", label="summary"),
        FieldDefinition(name="sentAt", type="string", label="sentAt"),
        FieldDefinition(name="channel", type="select", label="channel"),
    ],
)

custom_types: list[MinionType] = [
    stakeholder_type,
    stakeholder_update_type,
]

