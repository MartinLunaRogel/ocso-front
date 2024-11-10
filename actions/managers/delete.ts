"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function createManager(managerId: string, formData: FormData) {
  const response = await fetch(`${API_URL}/managers/${managerId}`, {
    method: "DELETE",
    headers: {
      ...authHeaders(),
    },
  })
  if (response.status === 200) revalidateTag("dashboard:managers")
}
