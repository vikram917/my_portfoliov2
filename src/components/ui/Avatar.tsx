interface AvatarProps {
  src: string;
  size?: number;
  alt?: string;
  className?: string;
}

export function Avatar({ src, size = 64, alt, className }: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt || "avatar"}
      className={`rounded-full object-cover ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: "var(--radius-full)",
        border: "2px solid var(--color-primary)",
      }}
    />
  );
}
