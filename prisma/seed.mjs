import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const accounts = [
    { name: "Admin", email: "admin@example.com", password: "admin123", role: "ADMIN" },
    { name: "Staff", email: "staff@example.com", password: "staff123", role: "STAFF" },
    { name: "User", email: "user@example.com", password: "user123", role: "USER" },
  ];

  for (const a of accounts) {
    const passwordHash = await bcrypt.hash(a.password, 12);
    await prisma.user.upsert({
      where: { email: a.email },
      update: {},
      create: { name: a.name, email: a.email, passwordHash, role: a.role },
    });
    console.log(`✔ ${a.role}: ${a.email} / ${a.password}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
