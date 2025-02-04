interface NavbarItemProps {
  label: string;
}

export default function NavbarItem({ label }: NavbarItemProps) {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
}
