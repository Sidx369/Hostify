-- CreateEnum
CREATE TYPE "DeploymentStatus" AS ENUM ('Ready', 'Error', 'Building', 'Queued', 'Canceled');

-- CreateEnum
CREATE TYPE "DeploymentLogStatus" AS ENUM ('Completed', 'Error', 'Warning');

-- CreateTable
CREATE TABLE "User" (
    "userId" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gitHubProfile" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Project" (
    "projectId" BIGSERIAL NOT NULL,
    "projectName" TEXT NOT NULL,
    "deploymentStatus" "DeploymentStatus" NOT NULL,
    "domainUrl" TEXT,
    "githubUrl" TEXT,
    "userId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("projectId")
);

-- CreateTable
CREATE TABLE "Deployment" (
    "deploymentId" BIGSERIAL NOT NULL,
    "deploymentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deploymentStatus" "DeploymentStatus" NOT NULL,
    "commitId" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3),
    "sourcePath" TEXT,
    "outputPath" TEXT,
    "projectId" BIGINT NOT NULL,

    CONSTRAINT "Deployment_pkey" PRIMARY KEY ("deploymentId")
);

-- CreateTable
CREATE TABLE "DeploymentLog" (
    "logId" BIGSERIAL NOT NULL,
    "logMessage" TEXT NOT NULL,
    "errorMessage" TEXT,
    "status" "DeploymentLogStatus" NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deploymentId" BIGINT NOT NULL,

    CONSTRAINT "DeploymentLog_pkey" PRIMARY KEY ("logId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Project_domainUrl_key" ON "Project"("domainUrl");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deployment" ADD CONSTRAINT "Deployment_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("projectId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeploymentLog" ADD CONSTRAINT "DeploymentLog_deploymentId_fkey" FOREIGN KEY ("deploymentId") REFERENCES "Deployment"("deploymentId") ON DELETE RESTRICT ON UPDATE CASCADE;
