import { profile } from "@/src/data";

export default function Footer() {
  return (
    <footer className="mx-auto mt-12 max-w-4xl border-t border-border px-4 py-8">
      <div className="flex items-center justify-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.shortName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
