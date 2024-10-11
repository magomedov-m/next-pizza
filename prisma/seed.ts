import { prisma } from "./prismaClient";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        email: "user@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {},
    ],
  });
}
async function down() {}
async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}
