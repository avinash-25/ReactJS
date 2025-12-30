import Role from '../models/roles.model.js'

export const addRole = async () => {
  try {
    await Role.updateOne(
      { roleName: "admin" },
      {
        $setOnInsert: {
          roleName: "admin",
          permissions: ["create", "read", "update", "delete"]
        }
      },
      { upsert: true }
    );

    await Role.updateOne(
      { roleName: "user" },
      {
        $setOnInsert: {
          roleName: "user",
          permissions: ["read"]
        }
      },
      { upsert: true }
    );

  } catch (error) {
    console.error("Role seeding failed:", error.message);
  }
};
