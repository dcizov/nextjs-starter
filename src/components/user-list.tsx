"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { orpc } from "@/lib/orpc/utils";
import Image from "next/image";

export function UserList() {
  const { data } = useSuspenseQuery(
    orpc.user.list.queryOptions({ input: { limit: 10 } }),
  );

  return (
    <div className="w-full max-w-md space-y-4">
      <h2 className="text-xl font-semibold">Users ({data.total})</h2>
      <div className="space-y-2">
        {data.users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-3 rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]"
          >
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[.05] dark:bg-white/[.06]">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ID: {user.id.slice(0, 8)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
