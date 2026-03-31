import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      {...props}
    />
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </BaseIcon>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </BaseIcon>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 20s-6.5-4.3-8.3-8.1C2.3 9 3.5 5.5 7.1 5.1A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.9-2.9c3.6.4 4.8 3.9 3.4 6.8C18.5 15.7 12 20 12 20Z" />
    </BaseIcon>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 5h2l2 10h9l3-7H7" />
      <circle cx="10" cy="19" r="1.5" />
      <circle cx="18" cy="19" r="1.5" />
    </BaseIcon>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19c1.3-3 4-4.5 6.5-4.5S17.2 16 18.5 19" />
    </BaseIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6.7 4.8 9 4.2a1 1 0 0 1 1.2.6l1.1 2.7a1 1 0 0 1-.3 1.2l-1.2 1a15.7 15.7 0 0 0 4.4 4.4l1-1.2a1 1 0 0 1 1.2-.3l2.7 1.1a1 1 0 0 1 .6 1.2l-.6 2.3a1 1 0 0 1-1 .7c-8.2 0-14.9-6.7-14.9-14.9a1 1 0 0 1 .7-1Z" />
    </BaseIcon>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m15 18-6-6 6-6" />
    </BaseIcon>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m9 18 6-6-6-6" />
    </BaseIcon>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m6 9 6 6 6-6" />
    </BaseIcon>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.5 1.1 6.3L12 17.1l-5.8 3.1 1.1-6.3L2.6 9.4l6.5-.9L12 2.6Z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 8h2.2V4.5c-.4-.1-1.3-.2-2.3-.2-2.2 0-3.7 1.4-3.7 3.9V10H7v3.8h3.2V20h3.9v-6.2H17L17.5 10H14V8.6c0-.9.2-1.6 1.4-1.6Z" />
    </BaseIcon>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M20 7.2c-.6.3-1.3.5-2 .6a3.5 3.5 0 0 0 1.5-1.9 7.4 7.4 0 0 1-2.2.9 3.5 3.5 0 0 0-6 3.2A10 10 0 0 1 4.2 6.4a3.5 3.5 0 0 0 1.1 4.7c-.5 0-1-.2-1.6-.4 0 1.7 1.2 3.2 2.9 3.5-.5.1-1 .2-1.6.1.5 1.5 1.9 2.5 3.6 2.5A7 7 0 0 1 4 18.3 9.9 9.9 0 0 0 9.4 20c6.4 0 9.9-5.4 9.9-10.1v-.5c.7-.5 1.3-1.1 1.8-1.9Z" />
    </BaseIcon>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6.5 8.5v9M6.5 5.7a1.2 1.2 0 1 1 0 2.3 1.2 1.2 0 0 1 0-2.3ZM11 17.5v-5.1c0-1.8 1-2.8 2.4-2.8s2.1 1 2.1 2.8v5.1M11 11c.7-1.1 1.7-1.7 3.1-1.7 2.2 0 3.9 1.4 3.9 4.5v3.7" />
    </BaseIcon>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.3" cy="6.7" r=".9" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}
