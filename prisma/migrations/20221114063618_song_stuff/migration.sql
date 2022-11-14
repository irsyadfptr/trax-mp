/*
  Warnings:

  - You are about to drop the column `playlistId` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Song` table. All the data in the column will be lost.
  - Added the required column `duration` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Song" DROP COLUMN "playlistId",
DROP COLUMN "title",
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
