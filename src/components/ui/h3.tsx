import { cn } from '@/lib/utils';

export default function H3(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h2 {...props} className={cn('text-xl tracking-tight', props.className)} />
  );
}
