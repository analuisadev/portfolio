import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface SocialButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export function SocialButton({ icon: Icon, label, href }: SocialButtonProps) {
  return (
    <Button
      variant="outline"
      size="lg"
      className="gap-2"
      asChild
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="h-4 w-4" />
        {label}
      </a>
    </Button>
  );
}