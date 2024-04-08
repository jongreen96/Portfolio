import { cn } from '@/lib/utils';

export default function P(props: React.HTMLProps<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      className={cn(
        'text-muted-foreground text-sm text-pretty',
        props.className
      )}
    />
  );
}
