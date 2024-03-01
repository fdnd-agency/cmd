import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { dev } from "$app/environment";
import { prisma } from "$lib/server/prisma";
import { sveltekit } from "lucia-auth/middleware";

const adapter =  new PrismaAdapter(prisma)

export const lucia = new Lucia(adapter, {
    env: dev ? "DEV" : "PROD",
    middleware: sveltekit(),
    transformDatabaseUser: (userData) =>{
        return{
            userId: userData.id,
            username: userData.username,
            name: userData.name
        }
    }
})

export const Auth = lucia;

