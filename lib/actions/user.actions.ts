'use server';

import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
import bcrypt from "bcrypt"

const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
} = process.env;

export const getUserInfo = async ({ userId }: getUserInfoProps) => {
  try {
    const { database } = await createAdminClient();

    const user = await database.listDocuments(
      DATABASE_ID!,
      USER_COLLECTION_ID!,
      [Query.equal('userId', [userId])]
    )

    return parseStringify(user.documents[0]);
  } catch (error) {
    console.log(error)
  }
}

export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    const user = await getUserInfo({ userId: session.userId }) 

    return parseStringify(user);
  } catch (error) {
    console.error('Error', error);
  }
}

export const signUp = async ({ name, email, password}: SignUpParams) => {
  try {
    const { account, database } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email, 
      password,
      name
    );

    if(!newUserAccount) throw new Error('Error creating user')

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await database.createDocument(
      DATABASE_ID!,
      USER_COLLECTION_ID!,
      ID.unique(),
      {
        email,
        password: hashedPassword,
        name,
        userId: newUserAccount.$id,
      }
    )

    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUser);
  } catch (error) {
    console.error('Error', error);
  }
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const result = await account.get();

    const user = await getUserInfo({ userId: result.$id})

    return parseStringify(user);
  } catch (error) {
    console.log(error)
    return null;
  }
}

export const logoutAccount = async () => {
  try {
    const { account } = await createSessionClient();

    (await cookies()).delete('appwrite-session');

    await account.deleteSession('current');
  } catch (error) {
    return null;
  }
}

// Bank Account Document in Appwrite Database
// export const createBankAccount = async ({
//   userId,
//   bankId,
//   accountId,
//   accessToken,
//   fundingSourceUrl,
//   shareableId,
// }: createBankAccountProps) => {
//   try {
//     const { database } = await createAdminClient();

//     const bankAccount = await database.createDocument(
//       DATABASE_ID!,
//       BANK_COLLECTION_ID!,
//       ID.unique(),
//       {
//         userId,
//         bankId,
//         accountId,
//         accessToken,
//         fundingSourceUrl,
//         shareableId,
//       }
//     )

//     return parseStringify(bankAccount);
//   } catch (error) {
//     console.log(error);
//   }
// }

// export const getBanks = async ({ userId }: getBanksProps) => {
//   try {
//     const { database } = await createAdminClient();

//     const banks = await database.listDocuments(
//       DATABASE_ID!,
//       BANK_COLLECTION_ID!,
//       [Query.equal('userId', [userId])]
//     )

//     return parseStringify(banks.documents);
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const getBank = async ({ documentId }: getBankProps) => {
//   try {
//     const { database } = await createAdminClient();

//     const bank = await database.listDocuments(
//       DATABASE_ID!,
//       BANK_COLLECTION_ID!,
//       [Query.equal('$id', [documentId])]
//     )

//     return parseStringify(bank.documents[0]);
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const getBankByAccountId = async ({ accountId }: getBankByAccountIdProps) => {
//   try {
//     const { database } = await createAdminClient();

//     const bank = await database.listDocuments(
//       DATABASE_ID!,
//       BANK_COLLECTION_ID!,
//       [Query.equal('accountId', [accountId])]
//     )

//     if(bank.total !== 1) return null;

//     return parseStringify(bank.documents[0]);
//   } catch (error) {
//     console.log(error)
//   }
// }