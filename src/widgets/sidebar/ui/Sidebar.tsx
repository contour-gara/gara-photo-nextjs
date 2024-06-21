import { RoutButton } from "@/shared/ui";

export const Sidebar = () => {
  return (
    <header className="flex items-end flex-col mt-10">
      <RoutButton path="/" text="Gara Photo" />
      <RoutButton path="/yesterday" text="yesterday" />
    </header>
  );
};
