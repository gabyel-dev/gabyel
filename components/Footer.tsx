export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-4 py-8 border-t border-border mt-12">
      <div className="flex justify-center items-center">
        <p className="text-sm text-foreground/70">
          &copy; {new Date().getFullYear()} Gab Guban. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
