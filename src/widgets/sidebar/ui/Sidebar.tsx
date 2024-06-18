import { RoutButton } from "@/shared/ui/RoutButton";

export const Sidebar = () => {
  return (
    <header className="flex items-end flex-col mt-10 //border-4">
      <RoutButton path="/" text="Gara Photo" />
      <RoutButton path="/yesterday" text="yesterday" />
    </header>
  );
};
